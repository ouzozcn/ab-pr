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
import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "#/components/ui/dialog";
import SectionTitle from "#/components/ui/SectionTitle";
import Partner8 from "../img/customers/ankara_kasaum_2.png";
import Partner1 from "../img/customers/change_org.svg";
import Partner9 from "../img/customers/cuzaam-logo.png";
import Partner5 from "../img/customers/cydd.svg";
import Partner6 from "../img/customers/g4t-logo-full.svg";
import Partner7 from "../img/customers/hayatadestek-logo.svg";
import Partner2 from "../img/customers/hrant_hori.png";
import Partner3 from "../img/customers/tog-logo-horizontal.svg";
import Partner4 from "../img/customers/wb-aima-logo.jpg";
import Partner10 from "../img/customers/turetim_logo.webp";

interface IndustryClient {
	name: string;
	logo?: React.ReactNode;
}

interface IndustryItem {
	id: number;
	icon: React.ReactNode;
	title: string;
	clients: IndustryClient[];
}

interface PartnerItem {
	id: number;
	icon: React.ReactNode;
	title: string;
}

const partnerItems: PartnerItem[] = [
	{
		id: 1,
		icon: (
			<img
				src={Partner1}
				alt="Change.org"
				className="h-auto w-full object-contain"
			/>
		),
		title: "Change.org",
	},
	{
		id: 2,
		icon: (
			<img
				src={Partner2}
				alt="Hrant Dink Vakfı"
				className="h-auto w-full object-contain"
			/>
		),
		title: "Hrant Dink Vakfı",
	},
	{
		id: 3,
		icon: (
			<img
				src={Partner3}
				alt="Tog Vakfı"
				className="h-auto w-full object-contain"
			/>
		),
		title: "TOG Vakfı",
	},
	{
		id: 4,
		icon: (
			<img src={Partner4} alt="AIMA" className="h-auto w-full object-contain" />
		),
		title: "Ayvalık Uluslararası Müzik Akademisi",
	},
	{
		id: 5,
		icon: (
			<img src={Partner5} alt="CYDD" className="h-auto w-full object-contain" />
		),
		title: "Çağdaş Yaşamı Destekleme Derneği",
	},
	{
		id: 6,
		icon: (
			<img
				src={Partner6}
				alt="Good 4 Trust"
				className="h-auto w-full object-contain"
			/>
		),
		title: "Good 4 Trust",
	},
	{
		id: 7,
		icon: (
			<img
				src={Partner7}
				alt="Hayata Destek  İnsani Yardım Derneği "
				className="h-auto w-full object-contain"
			/>
		),
		title: "Hayata Destek İnsani Yardım Derneği",
	},
	{
		id: 8,
		icon: (
			<img
				src={Partner8}
				alt="Kadın Sorunları Uygulama ve Araştırma Merkezi"
				className="h-auto w-full object-contain"
			/>
		),
		title: "Kadın Sorunları Uygulama ve Araştırma Merkezi",
	},
	{
		id: 9,
		icon: (
			<img
				src={Partner9}
				alt="Cüzzamla Savaş Derneği"
				className="h-auto w-full object-contain"
			/>
		),
		title: "Cüzzamla Savaş Derneği",
	},
	{
		id: 10,
		icon: (
			<img
				src={Partner10}
				alt="Türetim Ekonomisi Derneği"
				className="h-auto w-full object-contain"
			/>
		),
		title: "Türetim Ekonomisi Derneği",
	},
];
const industryItems: IndustryItem[] = [
	{
		id: 1,
		icon: <ShoppingCartSimpleIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "AVM",
		clients: [
			{ name: "Addressistanbul" },
			{ name: "Carousel Alışveriş ve Yaşam Merkezi" },
			{ name: "Grand Pera" },
		],
	},
	{
		id: 2,
		icon: <CalculatorIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Finans",
		clients: [
			{ name: "Alternatif Bank" },
  { name: "Amerikan Express" },
  { name: "Arena Faktoring" },
  { name: "Benkar Tüketici Finansman ve Kart Hizmetleri A.Ş." },
  { name: "Diebold" },
  { name: "Figopara" },
  { name: "Garanti BBVA ve İştirakleri" },
  { name: "PWC" },
  { name: "Türkiye Bankalar Birliği" }
		],
	},
	{
		id: 3,
		icon: <UsersThreeIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Birleşme",
		clients: [
			{ name: "Eczacıbaşı - Vilorey&Bosch (Anlaşma)" },
			{ name: "Garanti Sigortası - Euroke" },
			{ name: "İsviçre Sigorta Ergo" },
			{ name: "KörfezBank- Osmanlı Bankası" },
			{ name: "Osmanlı Bankası - Garanti Bankası" },
		],
	},
	{
		id: 4,
		icon: <GearIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Dayanıklı Tüketim Malları",
		clients: [{ name: "BSH Ev Aletleri A.Ş." }, { name: "Türk Philips A.Ş." }],
	},
	{
		id: 5,
		icon: <SailboatIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Denizcilik",
		clients: [
			{ name: "Catoni" },
			{ name: "MIP-Mersin International Port" },
			{ name: "Zihni Denizcilik" },
		],
	},
	{
		id: 6,
		icon: <GraduationCapIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Eğitim",
		clients: [
			{
				name: "Bilkent Üniversitesi Müzik ve Sahne Sanatları Fakültesi",
			},
			{ name: "Girişim Savaşçısı" },
			{ name: "Hisar Okulları" },
			{ name: "İstanbul Notre Dame De Sion Fransız Lisesi" },
			{ name: "İTÜ" },
			{ name: "İTÜ GVO" },
			{ name: "TED Rönesans Koleji" },
			{ name: "Yale Üniversitesi" },
		],
	},
	{
		id: 7,
		icon: <ForkKnifeIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Gıda",
		clients: [
			{ name: "Kurukahveci Mehmet Efendi" },
			{ name: "NAR Gourmet" },
			{ name: "Pakmaya" },
			{ name: "Sidra Bitkisel" },
			{ name: "Unilever" },
		],
	},
	{
		id: 8,
		icon: <UsersFourIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Halka Arz",
		clients: [
			{ name: "Altınyıldız" },
			{ name: "Batı Anadolu Çimento A.Ş." },
			{ name: "Çarşı Büyük Mağazıcılık A.Ş" },
			{ name: "Coats Villa" },
			{ name: "Mavi" },
			{ name: "Russell Reynolds" },
			{ name: "Turkcell" },
		],
	},
	{
		id: 9,
		icon: <AirplaneIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Havacılık & Uzay",
		clients: [
			{ name: "British Airways" },
			{ name: "Boeing" },
			{ name: "Gulf Air" },
			{ name: "Honeywell" },
			{ name: "Hughes Aircrafts" },
			{ name: "SunExpress Havayolları" },
			{ name: "Türk Hava Yolları" },
			{ name: "United Airlines" },
		],
	},
	{
		id: 10,
		icon: <MoneyIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Holdingler",
		clients: [
			{ name: "Bayraktar Holding" },
			{ name: "Boyner Holding A.Ş." },
			{ name: "Hatay Yatırım Holding A.Ş" },
			{ name: "Rönesans Holding" },
			{ name: "Unitim Holding A.Ş." },
		],
	},
	{
		id: 11,
		icon: <AsclepiusIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "İlaç & Tıp",
		clients: [
			{ name: "Abdi İbrahim" },
			{ name: "EULAR 8. Uluslararası Romatoloji Sempozyumu" },
			{ name: "İlaç Endüstrisi İşverenler Sendikası" },
			{ name: "MEDTEK" },
			{ name: "Mustafa Nevzat İlaç Sanayi" },
		],
	},
	{
		id: 12,
		icon: <PersonIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "İnsan Kaynakları",
		clients: [{ name: "Ranstad" }],
	},
	{
		id: 13,
		icon: <BuildingIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "İnşaat & Emlak",
		clients: [
			{ name: "Artema" },
			{ name: "Büyükyalı" },
			{ name: "Çukurova Tower" },
			{ name: "Eczacıbaşı Yapı Ürünleri Grubu" },
			{ name: "İntema Mutfak" },
			{ name: "Sotheby's" },
			{ name: "Tepe İnşaat San. ve Tic. A.Ş" },
			{ name: "Türkiye Şişe ve Cam Fabrikaları" },
			{ name: "VitrA" },
		],
	},
	{
		id: 14,
		icon: <HandSoapIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Kişisel Bakım",
		clients: [
			{ name: "Colgate" },
			{ name: "Gülsha" },
			{ name: "GYVNA" },
			{ name: "Nivea" },
			{ name: "Selpak" },
			{ name: "Sephora" },
			{ name: "Vichy" },
		],
	},
	{
		id: 15,
		icon: <PanoramaIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Kültür Kurumları & Müzeler",
		clients: [
			{ name: "İstanbul Kültür ve Sanat Merkezi" },
			{ name: "Platform Garanti Güncel Sanatlar Merkezi" },
			{ name: "Osmanlı Bankası Müzesi" },
			{ name: "SALT Galata" },
			{ name: "SÜ Sakıp Sabancı Müzesi" },
			{ name: "Türk ve İslam Eserleri Müzesi" },
		],
	},
	{
		id: 16,
		icon: <CouchIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Mobilya",
		clients: [
			{ name: "CASA Mobilya" },
			{ name: "Ersa Ofis Mobilyaları" },
			{ name: "Habitat" },
			{ name: "IKEA" },
			{ name: "Koleksiyon Mobilya" },
		],
	},
	{
		id: 17,
		icon: <DressIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Moda & Hazır Giyim",
		clients: [
			{ name: "Aldo" },
			{ name: "Altınyıldız" },
			{ name: "Armaggan" },
			{ name: "A&Y Marka Mağazacılık" },
			{ name: "Bally Shoes" },
			{
				name: "Basel and Moscow Turkish Textiles and Exported Goods Fair",
			},
			{ name: "BBA Corp." },
			{ name: "Benetton" },
			{ name: "Beymen" },
			{ name: "Beymen Club" },
			{ name: "Beymen Home" },
			{ name: "Blender" },
			{ name: "Çarşı Stores (Boyner)" },
			{ name: "Cinema by Zina's" },
			{ name: "Comite Colbert" },
			{ name: "Cotton Bar" },
			{ name: "Divarese" },
			{ name: "Harvey's Nichols Turkey" },
			{ name: "İntema" },
			{ name: "Karınca" },
			{ name: "Levi's" },
			{ name: "Mavi" },
			{ name: "Network" },
			{ name: "NIKE" },
			{ name: "Sisley" },
		],
	},
	{
		id: 18,
		icon: <CarIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Otomotiv",
		clients: [{ name: "BMW" }, { name: "TOFAŞ" }],
	},
	{
		id: 19,
		icon: <FilmStripIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Kültür Sanat Yönetimi",
		clients: [
			{ name: "3000 Yılda Ayakkabı ve İnsan Sevgisi" },
			{ name: "17. Yüzyıldan Günümüze Manzara Resimleri Sergisi" },
			{ name: "Avrupa Konseyi Anadolu Medeniyetleri Sergisi" },
			{
				name: "Bilkent Üniversitesi Müzik ve Sahne Sanatları Etkinlikleri",
			},
			{
				name: "Cem Boyner - Yakındaki Uzak Uzaktaki Yakın Fotoğraf Sergisi",
			},
			{ name: "Cirque du Soleil Alegria Şovu" },
			{
				name: "Credo Multimedya Müzik Gösterisi (Karlsruhe, Belfast, Kudüs, İstanbul)",
			},
			{ name: "Colors Sıradışı Objeler Sergisi" },
			{
				name: "Devler Bakanlığı Uluslararası Halıcılık Kongresi ve Fuarı",
			},
			{
				name: "Ekspresyonizm ve Sonrası Sergisi (Wuppertal Von Der Heydt Müzesi Koleksiyonu)",
			},
			{ name: "Erdal Öz Edebiyat Ödülleri" },
			{ name: "Frans'da Türk Mevsimi Sergisi" },
			{
				name: 'Gianmaria Potenza "Gelenekler Arasında Diyalog Venedik-İstanbul Sergisi"',
			},
			{ name: "Ilıas Lalaonis Takı Sergisi" },
			{ name: "Kanuni Sultan Süleyman Çağı Sergileri" },
			{ name: 'Mengü Ertel "Büyültmeler" Sergisi' },
			{ name: "Osmanlı Padişah Fermanları Sergisi" },
			{ name: "Parliament Superbad Caz Konserleri" },
			{ name: "Türkler: Bin Yılın Yolculuğu (600-1600) Sergisi" },
			{ name: "Uluslararası Eskişehir Festivali" },
			{ name: "Venedik Bienali Türkiye Pavyonu" },
			{ name: "VitrA Çağdaş Mimarlık Dizisi" },
			{
				name: "XIV. - XVIII Yüzyıl Portolan ve Deniz Haritaları Sergisi",
			},
		],
	},
	{
		id: 20,
		icon: <HandHeartIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Sivil Toplum Örgütleri",
		clients: [
			{ name: "Adım Adım" },
			{ name: "Ashoka Türkiye" },
			{ name: "Çağdaş Yaşamı Destekleme Derneği" },
			{ name: "Cüzzamla Savaş Derneği" },
			{ name: "Doğal Hayatı Koruma Derneği (WWF Türkiye)" },
			{ name: "Europalia" },
			{ name: "Greenpeace Türkiye" },
			{ name: "Good4Trust" },
			{ name: "İstanbul Hepimizin Girişimi" },
			{
				name: "İstanbul Üniversitesi Kadın Sorunları Araştırma ve Uygulama Merkezi",
			},
			{ name: "Kansersiz Yaşam Derneği" },
			{ name: "Lions" },
			{ name: "Mülkiyeliler Vakfı" },
			{ name: "Öğretmen Akademisi Vakfı (ÖRAV)" },
			{ name: "Reklamcılar Derneği" },
			{ name: "ROTARY" },
			{ name: "Sabancı Üniversitesi İstanbul Politikalar Merkezi" },
			{ name: "Tüketiciyi Koruma Derneği" },
			{ name: "Türk İnfeksiyon Vakfı" },
			{ name: "Türkiye Bankalar Birliği" },
			{ name: "Türkiye Gazeteciler Cemiyeti" },
			{ name: "Türkiye Halkla İlişkiler Derneği" },
			{ name: "TÜSİAD" },
			{ name: "Umberto Veronesi Vakfı" },
			{ name: "UNDP" },
			{ name: "YASED" },
		],
	},
	{
		id: 21,
		icon: <VolleyballIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Spor",
		clients: [
			{ name: "Jaybird" },
			{ name: "Mavikupa Üniversiteler Arası Basketbol Şenliği" },
			{ name: "S Uluslararası Binicilik Merkezi" },
			{ name: "Türkiye Binicilik Federasyonu" },
		],
	},
	{
		id: 22,
		icon: <DesktopIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Teknoloji & E-ticaret",
		clients: [
			{ name: "3M" },
			{ name: "IBM Türk" },
			{ name: "Kodak" },
			{ name: "Logitech" },
			{ name: "Logitech G" },
			{ name: "Logo.com" },
			{ name: "NCR" },
			{ name: "Nu Teknoloji" },
			{ name: "Sahibinden.com" },
			{ name: "Sestek" },
			{ name: "Teknoser" },
			{ name: "Ultimate Ears" },
		],
	},
	{
		id: 23,
		icon: <PhoneIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Haberleşme",
		clients: [
			{ name: "Dorinsight" },
			{ name: "Napolyon.com" },
			{ name: "NETAŞ" },
			{ name: "Turkcell" },
		],
	},
	{
		id: 24,
		icon: <BedIcon size={32} className="h-24 w-24 shrink-0" />,
		title: "Turizm & Otelcilik",
		clients: [
			{ name: "British Turizm İnşaat Yatırım ve Tic. A.Ş." },
			{ name: "British Tourist Authority" },
			{ name: "Etap-Pullman Turgutreis" },
			{ name: "Four Seasons Hotel İstanbul" },
			{
				name: "Hotel Splendido & Splendido Mare by Orient Express",
			},
			{ name: "Padma Hotel" },
			{ name: "Sheraton Hotel" },
			{ name: "Skal Club" },
			{ name: "TÜRSAB" },
		],
	},
];

export const Route = createFileRoute("/is-ortaklarimiz")({
	component: RouteComponent,
});

function RouteComponent() {
	const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(
		null,
	);

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
				{industryItems.map((item) => (
					<button
						key={item.id}
						type="button"
						onClick={() => setSelectedIndustry(item)}
						className="Industry__Item group flex flex-col h-full w-full items-center justify-center gap-4 md:gap-24 rounded-lg border border-transparent bg-stone-100/50 p-12 md:p-16 text-left transition hover:bg-stone-100 hover:cursor-pointer focus-visible:border-(--brand-primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary)/30"
					>
						<div
							className="Industry__Item__Icon flex flex-col items-start justify-center text-(--brand-primary)"
							aria-hidden
						>
							{item.icon}
						</div>
						<div className="Industry__Item__Content flex flex-col items-center justify-center">
							<p className="text-xl md:text-4xl text-center font-semibold pl-2">
								{item.title}
							</p>
						</div>
					</button>
				))}
			</section>
			<SectionTitle
				className="px-4 md:px-16! w-full"
				title="Gönüllü İşlerimiz"
				description="Sivil Toplumun Gücüne İnanıyor, Onlarla Birlikte Yürüyoruz"
			/>
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-center w-full p-6 md:p-12 space-y-8 md:space-y-0 gap-8 md:gap-12">
				{partnerItems.map(({ id, icon, title }) => (
					<div
						key={id}
						className="Partner__Item flex flex-col h-full items-center justify-center gap-4 md:gap-24 bg-stone-100/50 rounded-lg p-12 md:p-16"
					>
						<div className="Partner__Item__Icon flex flex-col items-start justify-center text-(--brand-primary)">
							{icon}
						</div>
						<div className="Partner__Item__Content flex flex-col items-center justify-center">
							<p className="text-xl md:text-4xl text-center font-semibold pl-2">
								{title}
							</p>
						</div>
					</div>
				))}
			</section>
			<Dialog
				open={selectedIndustry !== null}
				onOpenChange={(open) => {
					if (!open) setSelectedIndustry(null);
				}}
			>
				<DialogContent className="max-h-[min(85vh,720px)] overflow-y-auto sm:max-w-lg">
					{selectedIndustry ? (
						<>
							<DialogHeader>
								<DialogTitle>{selectedIndustry.title}</DialogTitle>
							</DialogHeader>
							{selectedIndustry.clients.length > 0 ? (
								<ul className="grid gap-4 pt-2">
									{selectedIndustry.clients.map((client) => (
										<li
											key={`${selectedIndustry.id}-${client.name}`}
											className="flex flex-col gap-2 rounded-lg   bg-(--brand-primary) p-4 sm:flex-row sm:items-center sm:gap-6"
										>
											{client.logo ? (
												<div className="flex h-14 w-full max-w-[200px] shrink-0 items-center justify-start">
													{client.logo}
												</div>
											) : null}
											<span className="text-lg font-semibold leading-snug text-white">
												{client.name}
											</span>
										</li>
									))}
								</ul>
							) : (
								<p className="py-6 text-center text-muted-foreground">
									Bu sektör için müşteri listesi yakında paylaşılacak.
								</p>
							)}
						</>
					) : null}
				</DialogContent>
			</Dialog>
		</main>
	);
}
