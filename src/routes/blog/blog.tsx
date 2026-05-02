import { createFileRoute } from "@tanstack/react-router";
import SectionTitle from "#/components/ui/SectionTitle";

export const Route = createFileRoute("/blog/blog")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex flex-col">
			{/* Page Header */}
			<SectionTitle
				className="px-4 md:px-16!"
				title="Blog"
				description="İletişim sektöründeki en güncel gelişmeleri takip edin."
			/>
			{/* Contact Information */}
			<section className="flex flex-col items-center justify-center w-full p-12 md:p-24">
				<p>Blog</p>
			</section>
		</main>
	);
}
