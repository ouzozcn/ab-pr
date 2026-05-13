import { SpinnerGapIcon } from "@phosphor-icons/react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { lazy, Suspense, useMemo } from "react";
import {
	type BlogPostSummary,
	getBlogSummaryBySlug,
	getMdxImport,
} from "#/lib/blog-posts";
export const Route = createFileRoute("/blog/$slug")({
	loader: ({ params }): BlogPostSummary => {
		const post = getBlogSummaryBySlug(params.slug);
		if (!post) throw notFound();
		return post;
	},
	head: ({ loaderData }) => ({
		meta: [
			{
				title: `${loaderData?.title} | Blog | A&B Danışmanlık`,
			},
			{
				name: "description",
				content: loaderData?.description,
			},
		],
	}),
	component: BlogPostRoute,
});

function BlogPostRoute() {
	const post = Route.useLoaderData();
	const importer = getMdxImport(post.slug);

	const Body = useMemo(() => {
		if (!importer) return null;
		return lazy(async () => {
			const mod = await importer();
			return { default: mod.default };
		});
	}, [importer]);

	if (!Body) throw notFound();

	return (
		<main className="flex flex-col px-12 md:px-16 py-10 md:py-16">
			{/*}
			<header className="max-w-3xl mx-auto w-full mb-10">
				<p className="text-sm text-(--brand-text-secondary) mb-2">
					{post.date}
				</p>
				<h1 className="text-3xl md:text-4xl font-semibold text-(--brand-text-primary)">
					{post.title}
				</h1>
				<p className="mt-4 text-lg text-(--brand-text-secondary)">
					{post.description}
				</p>
			</header>
			*/}
			<article className="prose prose-neutral prose-lg md:prose-xl max-w-3xl mx-auto w-full text-(--brand-text-primary) prose-headings:font-semibold prose-a:text-(--brand-primary) ">
				<Suspense
					fallback={
						<div className="flex flex-col items-center justify-center h-full">
							<SpinnerGapIcon size={48} className="animate-spin" />
							<p className="text-(--brand-text-secondary)">Yükleniyor…</p>
						</div>
					}
				>
					<div className=" text-justify">
						<Body />
					</div>
				</Suspense>
			</article>
		</main>
	);
}
