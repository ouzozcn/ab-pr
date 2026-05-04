import {
	EnvelopeIcon,
	HeadsetIcon,
	MapPinIcon,
	PhoneIcon,
} from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import ListItem from "../components/ListItem";
import { Button } from "../components/ui/button";
import SectionTitle from "../components/ui/SectionTitle";
export const Route = createFileRoute("/iletisim")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex flex-col">
			{/* Page Header */}
			<SectionTitle
				className="px-4 md:px-16!"
				title="İletişim"
				description="Bize Projenizi Anlatın"
			/>
			{/* Contact Information */}
			<section className="flex flex-col items-center justify-center  w-full p-12 md:p-24">
				<div className="List__Item__Container grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-8 items-start">
					<ListItem
						title="Adres"
						description="Esenyalı Mah. Uygar Sok. Varyap Plaza No:61 Ofis No:247 PK- 34903 Pendik İstanbul"
						icon={<MapPinIcon size={32} weight="duotone" />}
					/>
					<ListItem
						title="E-posta"
						description="abtanitim@ab-pr.com"
						icon={<EnvelopeIcon size={32} weight="duotone" />}
					/>
					<ListItem
						title="Telefon"
						description="+90 212 233 22 38 "
						icon={<PhoneIcon size={32} weight="duotone" />}
					/>

					<ListItem
						title="Telefon"
						description="+90 850 305 70 58"
						icon={<HeadsetIcon size={32} weight="duotone" />}
					/>
				</div>
			</section>
			<div className="Map__Container flex flex-col w-full min-h-[300px] aspect-video">
				<div className="flex flex-col items-center  justify-center bg-(--brand-primary)  font-sans text-white  text-center p-4 md:px-24 py-12 gap-4 md:gap-6 ">
					<p className="text-lg md:text-2xl font-bold">
						Bizi Haritalarda Bulun
					</p>
				</div>
				<iframe
					title="A&B İletişim A.Ş. konum haritası"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.680013033854!2d29.289907!3d40.8569487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab70dd45a3503%3A0xeb5fdbeda47a34ef!2zQSZCIMSwbGV0acWfaW0gQS7Fni4!5e0!3m2!1str!2str!4v1777736226732!5m2!1str!2str"
					width="1200"
					height="600"
					className="h-full w-full min-h-[300px] rounded-md border-0"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
			<div className="Social__Media__Sectionflex flex-col w-full min-h-[300px] aspect-video">
				<div className="flex flex-col items-center  justify-center bg-(--brand-primary)  font-sans text-white  text-center p-4 md:px-24 py-12 gap-4 md:gap-6 ">
					<p className="text-lg md:text-2xl font-bold">
						Sosyal Medyada Takip Edin
					</p>
				</div>
				<div className="Social__Media__Links flex flex-col items-center justify-center w-full h-full">
					<Button variant="outline">Instagram</Button>
				</div>
			</div>
		</main>
	);
}
