import exif from "fast-exif";

export async function getAlbumImages(albumId: string) {
  // 1. List all album files from blog post directories
  let images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/content/blog/**/albums/**/*.{jpeg,jpg,png,gif,webp}"
  );

  // 2. Filter images by albumId - must be exact folder name in /albums/{albumId}/
  images = Object.fromEntries(
    Object.entries(images).filter(([key]) => key.includes(`/albums/${albumId}/`))
  );

  // 3. Images are promises, so we need to resolve the glob promises
  const resolvedImages = await Promise.all(
    Object.entries(images).map(async ([fileName, image]) => {
      const mod = await image();
      const exifResult = await exif.read("." + fileName);
      return {
        image: mod.default,
        originalFilename: fileName,
        description:
          (exifResult?.image?.ImageDescription as string) || undefined,
        date: (exifResult?.exif?.DateTimeOriginal as Date) || undefined,
      };
    })
  );

  // 4. Fail build if album doesn't exist
  if (resolvedImages.length === 0) {
    throw new Error(`Album "${albumId}" not found. No images matched in /src/content/blog/**/albums/**`);
  }

  // 5. sort images by filename
  resolvedImages.sort((a, b) =>
    a.originalFilename.localeCompare(b.originalFilename)
  );
  return resolvedImages;
}
