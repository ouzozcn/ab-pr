import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "#/components/ui/PageHeader";

export const Route = createFileRoute("/is-ortaklarimiz")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex flex-col">
			{/* Page Header */}
			<PageHeader title="İş Ortaklarımız" description="İş Ortaklarımız" />
			{/* Contact Information */}
			<section className="flex flex-col items-center justify-center w-full p-12 md:p-24">
				<p>İş Ortaklarımız</p>
			</section>
		</main>
	);
}
