import { createFileRoute } from "@tanstack/react-router";
import SectionTitle from "#/components/ui/SectionTitle";

export const Route = createFileRoute("/hikayemiz")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex flex-col">
			{/* Page Header */}
			<SectionTitle
				className="px-4 md:px-16!"
				title="Hikayemiz"
				description="51 yıldır markalara güvenilir, cesur ve sürdürülebilir iletişim çözümleri sunuyoruz."
			/>
			{/* Contact Information */}
			<section className="flex flex-col items-center justify-center w-full p-12 md:p-24">
				<p>Hikayemizi Keşfet</p>
			</section>
		</main>
	);
}
