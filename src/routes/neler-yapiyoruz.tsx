import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "#/components/ui/PageHeader";

export const Route = createFileRoute("/neler-yapiyoruz")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex flex-col">
			{/* Page Header */}
			<PageHeader title="Neler Yapıyoruz" description="Neler Yapıyoruz" />
			{/* Contact Information */}
			<section className="flex flex-col items-center justify-center w-full p-12 md:p-24">
				<p>Neler Yapıyoruz</p>
			</section>
		</main>
	);
}
