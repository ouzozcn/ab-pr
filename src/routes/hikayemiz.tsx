import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "#/components/ui/PageHeader";

export const Route = createFileRoute("/hikayemiz")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex flex-col">
			{/* Page Header */}
			<PageHeader title="Hikayemiz" description="Hikayemizi Keşfet" />
			{/* Contact Information */}
			<section className="flex flex-col items-center justify-center w-full p-12 md:p-24">
				<p>Hikayemizi Keşfet</p>
			</section>
		</main>
	);
}
