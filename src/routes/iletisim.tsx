import {
	EnvelopeIcon,
	FacebookLogoIcon,
	InstagramLogoIcon,
	LinkedinLogoIcon,
	MapPinIcon,
	PhoneIcon,
	XLogoIcon,
} from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import ListItem from "../components/ListItem";
import SocialLink from "../components/SocialLink";
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
			<section className="flex flex-col items-center justify-center  w-full p-6 md:p-12">
				<div className="List__Item__Container grid grid-cols-1 md:grid-cols-3 w-full gap-4 md:gap-8 items-start">
					<ListItem
						title="Adres"
						description="Asna Danışmanlık, Akmeşe Cumhuriyet Mahallesi Kapaklı Yolu Sokak No:24 İzmit / Kocaeli "
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
				</div>
			</section>

			<div className="Social__Media__Section flex flex-col w-full h-auto ">
				<div className="flex flex-col items-center  justify-center bg-(--brand-primary)  font-sans text-white  text-center p-4 md:px-24 py-12 gap-4 md:gap-6 ">
					<p className="text-lg md:text-2xl font-bold">
						Bizi Sosyal Medyada Takip Edin
					</p>
				</div>
				<div className="Social__Media__Links flex flex-col md:flex-row items-center justify-center w-full h-auto p-4 md:p-12 gap-4 md:gap-12">
					<SocialLink
						href={"https://www.instagram.com/avebiletisim/"}
						icon={<InstagramLogoIcon size={32} weight="fill" />}
						label="Instagram"
					/>
					<SocialLink
						href={"https://www.facebook.com/avebiletisim"}
						icon={<FacebookLogoIcon size={32} weight="fill" />}
						label="Facebook"
					/>
					<SocialLink
						href={"https://x.com/avebiletisim"}
						icon={<XLogoIcon size={32} weight="fill" />}
						label="X"
					/>
					<SocialLink
						href={"https://www.linkedin.com/company/1260750"}
						icon={<LinkedinLogoIcon size={32} weight="fill" />}
						label="Linkedin"
					/>
				</div>
			</div>
		</main>
	);
}
