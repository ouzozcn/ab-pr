import { readFileSync, readdirSync } from "node:fs";
import { basename, join, relative } from "node:path";
import type { Plugin } from "vite";
import matter from "gray-matter";

const VIRTUAL_ID = "virtual:blog-summaries";
const RESOLVED_ID = `\0${VIRTUAL_ID}`;

interface ManifestEntry {
	globKey: string;
	title: string;
	description: string;
	date: string;
	slug: string;
	image?: string;
}

/** Keys (`globKey`) must match `import.meta.glob("../content/blog/*.mdx")` from `src/lib/blog-posts.ts`. */
export function blogSummariesManifestPlugin(): Plugin {
	let root = process.cwd();

	function buildManifest(): ManifestEntry[] {
		const blogDir = join(root, "src/content/blog");
		const libDir = join(root, "src/lib");
		const entries: ManifestEntry[] = [];
		let files: string[] = [];
		try {
			files = readdirSync(blogDir).filter((f: string) => f.endsWith(".mdx"));
		} catch {
			return [];
		}
		for (const file of files) {
			const absPath = join(blogDir, file);
			const source = readFileSync(absPath, "utf8");
			const { data } = matter(source);
			const fm = data as Record<string, unknown>;
			const title = fm.title;
			const description = fm.description;
			const date = fm.date;
			if (typeof title !== "string" || typeof description !== "string" || typeof date !== "string")
				continue;
			const slugFromFile = basename(file, ".mdx");
			const slug =
				typeof fm.slug === "string" && fm.slug.length > 0 ? fm.slug : slugFromFile;
			const globKey = relative(libDir, absPath).replace(/\\/g, "/");
			const entry: ManifestEntry = {
				globKey,
				title,
				description,
				date,
				slug,
			};
			if (typeof fm.image === "string") entry.image = fm.image;
			entries.push(entry);
		}
		entries.sort((a, b) => b.date.localeCompare(a.date));
		return entries;
	}

	return {
		name: "blog-summaries-manifest",
		configResolved(config) {
			root = config.root;
		},
		resolveId(id) {
			if (id === VIRTUAL_ID) return RESOLVED_ID;
		},
		load(id) {
			if (id !== RESOLVED_ID) return;
			const manifest = buildManifest();
			return `export default ${JSON.stringify(manifest)}`;
		},
		configureServer(server) {
			const blogGlob = join(root, "src/content/blog");
			server.watcher.add(blogGlob);
			server.watcher.on("change", (path) => {
				if (!path.endsWith(".mdx")) return;
				const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
				if (mod) server.moduleGraph.invalidateModule(mod);
			});
		},
	};
}
