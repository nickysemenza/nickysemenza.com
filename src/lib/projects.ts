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
  return end ? `${fmt(start)} - ${fmt(end)}` : `${fmt(start)} - Present`;
}

export function getProjectBySlug(
  projects: Project[],
  slug: string
): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const categoryColors: Record<ProjectCategory, string> = {
  building: 'var(--color-copper)',
  code: '#3b82f6',
  career: '#6b7280',
  creative: '#8b5cf6',
};
