import exif from 'fast-exif';

export interface LoadedImage {
  image: ImageMetadata;
  originalFilename: string;
  description: string | undefined;
  date: Date | undefined;
}

// Glob all images in blog content at build time
const allBlogImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/blog/**/*.{jpeg,jpg,png,gif,webp}'
);

/**
 * Load specific images by path with EXIF data
 * @param base - Base path relative to /src/content/blog/ (e.g., 'kitchen-renovation')
 * @param paths - Array of image paths relative to base (e.g., ['planning/image.jpg'])
 */
export async function loadImages(
  base: string,
  paths: string[]
): Promise<LoadedImage[]> {
  const results = await Promise.all(
    paths.map(async (path) => {
      const fullPath = `/src/content/blog/${base}/${path}`;
      const loader = allBlogImages[fullPath];

      if (!loader) {
        throw new Error(
          `Image not found: ${fullPath}\nAvailable images in ${base}: ${Object.keys(
            allBlogImages
          )
            .filter((k) => k.includes(`/${base}/`))
            .map((k) => k.replace(`/src/content/blog/${base}/`, ''))
            .join(', ')}`
        );
      }

      const mod = await loader();
      const exifResult = await exif.read('.' + fullPath);

      return {
        image: mod.default,
        originalFilename: fullPath,
        description:
          (exifResult?.image?.ImageDescription as string) || undefined,
        date: (exifResult?.exif?.DateTimeOriginal as Date) || undefined,
      };
    })
  );

  return results;
}

/**
 * Load all images from an album folder with EXIF data
 * @param albumId - Album folder name within /albums/ subdirectory
 */
export async function getAlbumImages(albumId: string): Promise<LoadedImage[]> {
  // Filter to only album images
  const albumImages = Object.fromEntries(
    Object.entries(allBlogImages).filter(([key]) =>
      key.includes(`/albums/${albumId}/`)
    )
  );

  const resolvedImages = await Promise.all(
    Object.entries(albumImages).map(async ([fileName, loader]) => {
      const mod = await loader();
      const exifResult = await exif.read('.' + fileName);

      return {
        image: mod.default,
        originalFilename: fileName,
        description:
          (exifResult?.image?.ImageDescription as string) || undefined,
        date: (exifResult?.exif?.DateTimeOriginal as Date) || undefined,
      };
    })
  );

  if (resolvedImages.length === 0) {
    throw new Error(
      `Album "${albumId}" not found. No images matched in /src/content/blog/**/albums/**`
    );
  }

  // Sort by filename
  resolvedImages.sort((a, b) =>
    a.originalFilename.localeCompare(b.originalFilename)
  );

  return resolvedImages;
}
