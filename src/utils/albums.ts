import exif from "fast-exif";

export async function getAlbumImages(albumId: string) {
  // 1. List all album files from collections path
  let images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/content/album/**/*.{jpeg,jpg,png,gif}"
  );

  // 2. Filter images by albumId
  images = Object.fromEntries(
    Object.entries(images).filter(([key]) => key.includes(albumId))
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

  // 4. sort images by filename
  resolvedImages.sort((a, b) =>
    a.originalFilename.localeCompare(b.originalFilename)
  );
  return resolvedImages;
}
