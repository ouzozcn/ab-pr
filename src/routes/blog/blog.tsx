import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "#/components/ui/PageHeader";

export const Route = createFileRoute("/blog/blog")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex flex-col">
			{/* Page Header */}
			<PageHeader title="Blog" description="Blog" />
			{/* Contact Information */}
			<section className="flex flex-col items-center justify-center w-full p-12 md:p-24">
				<p>Blog</p>
			</section>
		</main>
	);
}
