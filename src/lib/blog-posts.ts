import manifest from "virtual:blog-summaries";
import type { ComponentType } from "react";
import defaultCover from "#/img/brand/image_placeholder_lg.png";

export interface BlogFrontmatter {
	title: string;
	description: string;
	/** ISO date string for sorting (e.g. 2026-05-01) */
	date: string;
	/** SEO path segment; defaults to the file name without `.mdx` */
	slug?: string;
	/** Optional cover URL; falls back to a shared placeholder */
	image?: string;
}

export interface BlogPostSummary extends BlogFrontmatter {
	slug: string;
	image: string;
}

const mdxPostModules = import.meta.glob("../content/blog/*.mdx");

interface BlogIndexCache {
	summaries: BlogPostSummary[];
	slugToModulePath: Record<string, string>;
}

let blogPostsCache: BlogIndexCache | null = null;

function getBlogPostsCache(): BlogIndexCache {
	if (blogPostsCache) return blogPostsCache;

	const summaries: BlogPostSummary[] = [];
	const slugToModulePath: Record<string, string> = {};

	for (const entry of manifest) {
		summaries.push({
			title: entry.title,
			description: entry.description,
			date: entry.date,
			slug: entry.slug,
			image: entry.image ?? defaultCover,
		});
		slugToModulePath[entry.slug] = entry.globKey;
	}

	blogPostsCache = { summaries, slugToModulePath };
	return blogPostsCache;
}

export function getAllBlogSummaries(): BlogPostSummary[] {
	return getBlogPostsCache().summaries;
}

export function getBlogSummaryBySlug(
	slug: string,
): BlogPostSummary | undefined {
	return getBlogPostsCache().summaries.find((p) => p.slug === slug);
}

export function getMdxImport(
	slug: string,
): (() => Promise<{ default: ComponentType }>) | undefined {
	const path = getBlogPostsCache().slugToModulePath[slug];
	if (!path) return undefined;
	return mdxPostModules[path] as () => Promise<{ default: ComponentType }>;
}
