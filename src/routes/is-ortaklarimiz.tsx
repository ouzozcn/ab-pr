import {
	AirplaneIcon,
	AsclepiusIcon,
	BedIcon,
	BuildingIcon,
	CalculatorIcon,
	CarIcon,
	CouchIcon,
	DesktopIcon,
	DressIcon,
	FilmStripIcon,
	ForkKnifeIcon,
	GearIcon,
	GraduationCapIcon,
	HandHeartIcon,
	HandSoapIcon,
	MoneyIcon,
	PanoramaIcon,
	PersonIcon,
	PhoneIcon,
	SailboatIcon,
	ShoppingCartSimpleIcon,
	UsersFourIcon,
	UsersThreeIcon,
	VolleyballIcon,
} from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import SectionTitle from "#/components/ui/SectionTitle";

interface IndustryItem {
	id: number;
	icon: React.ReactNode;
	title: string;
}

const industryItems: IndustryItem[] = [
	{
		id: 1,
		icon: <ShoppingCartSimpleIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "AVM",
	},
	{
		id: 2,
		icon: <CalculatorIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Finans",
	},
	{
		id: 3,
		icon: <UsersThreeIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Birleşme",
	},
	{
		id: 4,
		icon: <GearIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Dayanıklı Tüketim Malları",
	},
	{
		id: 5,
		icon: <SailboatIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Denizcilik",
	},
	{
		id: 6,
		icon: <GraduationCapIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Eğitim",
	},
	{
		id: 7,
		icon: <ForkKnifeIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Gıda",
	},
	{
		id: 8,
		icon: <UsersFourIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Halka Arz",
	},
	{
		id: 9,
		icon: <AirplaneIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Havacılık & Uzay",
	},
	{
		id: 10,
		icon: <MoneyIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Holdingler",
	},
	{
		id: 11,
		icon: <AsclepiusIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "İlaç & Tıp",
	},
	{
		id: 12,
		icon: <PersonIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "İnsan Kaynakları",
	},
	{
		id: 13,
		icon: <BuildingIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "İnşaat & Emlak",
	},
	{
		id: 14,
		icon: <HandSoapIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Kişisel Bakım",
	},
	{
		id: 15,
		icon: <PanoramaIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Kültür Kurumları & Müzeler",
	},
	{
		id: 16,
		icon: <CouchIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Mobilya",
	},
	{
		id: 17,
		icon: <DressIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Moda & Hazır Giyim",
	},
	{
		id: 18,
		icon: <CarIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Otomotiv",
	},
	{
		id: 19,
		icon: <FilmStripIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Kültür Sanat Yönetimi",
	},
	{
		id: 20,
		icon: <HandHeartIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Sivil Toplum Örgütleri",
	},
	{
		id: 21,
		icon: <VolleyballIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Spor",
	},
	{
		id: 22,
		icon: <DesktopIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Teknoloji & E-ticaret",
	},
	{
		id: 23,
		icon: <PhoneIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Haberleşme",
	},
	{
		id: 24,
		icon: <BedIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Turizm & Otelcilik",
	},
];

export const Route = createFileRoute("/is-ortaklarimiz")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex flex-col">
			{/* Page Header */}
			<SectionTitle
				className="px-4 md:px-16!"
				title="İş Ortaklarımız"
				description="Sektördeki liderlerimizle birlikte çalışıyoruz."
			/>
			{/* Client Item */}
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-center w-full p-6 md:p-12 space-y-8 md:space-y-0 gap-8 md:gap-12">
				{industryItems.map(({ id, icon, title }) => (
					<div
						key={id}
						className="Industry__Item flex flex-col h-full items-center justify-center gap-4 md:gap-24 bg-stone-100/50 rounded-lg p-12 md:p-16"
					>
						<div
							className="Industry__Item__Icon flex flex-col items-start justify-center text-(--brand-primary)"
							aria-hidden
						>
							{icon}
						</div>
						<div className="Industry__Item__Content flex flex-col items-center justify-center">
							<p className="text-xl md:text-4xl text-center font-semibold pl-2">
								{title}
							</p>
						</div>
					</div>
				))}
			</section>
		</main>
	);
}
