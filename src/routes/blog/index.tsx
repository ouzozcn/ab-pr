import { createFileRoute } from "@tanstack/react-router";
import BlogCard from "#/components/BlogCard";
import SectionTitle from "#/components/ui/SectionTitle";
import { getAllBlogSummaries } from "#/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
	loader: (): ReturnType<typeof getAllBlogSummaries> => getAllBlogSummaries(),
	component: BlogIndex,
});

function BlogIndex() {
	const posts = Route.useLoaderData();

	return (
		<main className="flex flex-col">
			<SectionTitle
				className="px-4 md:px-16!"
				title="Blog"
				description="İletişim sektöründeki en güncel gelişmeleri takip edin."
			/>
			<div className="Blog__Cards grid grid-cols-1 md:grid-cols-2 w-full items-center justify-center p-4 md:p-16 gap-4 md:gap-12 ">
				{posts.map((post) => (
					<BlogCard
						key={post.slug}
						title={post.title}
						description={post.description}
						image={post.image}
						readMoreHref={`/blog/${post.slug}`}
						className="col-span-1 h-full"
					/>
				))}
			</div>
		</main>
	);
}
