import { getCollection } from 'astro:content';

export type ProjectCategory = 'building' | 'code' | 'career' | 'creative';

export interface Project {
  type: 'blog' | 'standalone';
  slug: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  category: ProjectCategory;
  heroImage?: ImageMetadata;
  emoji?: string;
  url?: string;
  external?: boolean;
  githubUrl?: string;
}

export async function getAllProjects(): Promise<Project[]> {
  const blogPosts = await getCollection('blog');
  const standaloneProjects = await getCollection('projects');

  // Building blog posts with startDate become projects
  const blogProjects: Project[] = blogPosts
    .filter(
      (post) => post.data.startDate && post.data.tags?.includes('building')
    )
    .map((post) => ({
      type: 'blog' as const,
      slug: post.id,
      title: post.data.title,
      description: post.data.description,
      startDate: post.data.startDate!,
      endDate: post.data.endDate,
      category: 'building' as const,
      heroImage: post.data.heroImage,
      url: `/blog/${post.id}/`,
      external: false,
    }));

  // Standalone projects
  const standalone: Project[] = standaloneProjects.map((project) => ({
    type: 'standalone' as const,
    slug: project.id,
    title: project.data.title,
    description: project.data.description,
    startDate: project.data.startDate,
    endDate: project.data.endDate,
    category: project.data.category,
    emoji: project.data.emoji,
    url: project.data.blogPostSlug
      ? `/blog/${project.data.blogPostSlug}/`
      : project.data.externalUrl,
    external: !project.data.blogPostSlug && !!project.data.externalUrl,
    githubUrl: project.data.githubUrl,
  }));

  return [...blogProjects, ...standalone].sort(
    (a, b) => b.startDate.valueOf() - a.startDate.valueOf()
  );
}

export function formatDateRange(start: Date, end?: Date): string {
  const fmt = (d: Date) =>
    d.toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
    });

  if (!end) {
    return `${fmt(start)} - Present`;
  }

  // If same month and year, just show single date
  if (
    start.getMonth() === end.getMonth() &&
    start.getFullYear() === end.getFullYear()
  ) {
    return fmt(start);
  }

  return `${fmt(start)} - ${fmt(end)}`;
}

export function getProjectBySlug(
  projects: Project[],
  slug: string
): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const categoryColors: Record<ProjectCategory, string> = {
  building: '#c4956a', // warm terracotta
  code: '#7b9eb8', // dusty blue
  career: '#8a8580', // warm gray
  creative: '#a898b8', // dusty purple
};
