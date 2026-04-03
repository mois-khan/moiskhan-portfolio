// src/data/index.ts
// Central export for all site data
// Import from here to keep imports clean: import { projects, skills } from '@/data'

export { projects, getFeaturedProjects, getProjectBySlug } from './projects'
export { skills } from './skills'
export { achievements } from './achievements'
export { personal } from './personal'
export { blogPosts, getPublishedPosts, getBlogPostBySlug } from './blog'
export type { BlogPostWithContent } from './blog'
