import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { defineConfig } from "vite";

import { blogSummariesManifestPlugin } from "./vite/blog-manifest.plugin";

const config = defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [
		blogSummariesManifestPlugin(),
		devtools(),
		tailwindcss(),
		tanstackStart(),
		nitro(),
		{
			enforce: "pre",
			...mdx({
				providerImportSource: "@mdx-js/react",
				remarkPlugins: [
					remarkFrontmatter,
					/* @ts-expect-error remark-gfm is well-typed against mdast root; unified types can disagree */
					remarkGfm,
				],
			}),
		},
		viteReact({ include: /\.(tsx|ts|jsx|js|mdx)$/ }),
	],
});

export default config;
