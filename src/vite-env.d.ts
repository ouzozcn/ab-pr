/// <reference types="vite/client" />

declare module "*.mdx" {
	import type { FC } from "react";
	const MDXComponent: FC;
	export default MDXComponent;
}

declare module "virtual:blog-summaries" {
	interface BlogManifestEntry {
		globKey: string;
		title: string;
		description: string;
		date: string;
		slug: string;
		image?: string;
	}
	const manifest: BlogManifestEntry[];
	export default manifest;
}
