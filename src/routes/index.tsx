import {
	AnchorSimpleIcon,
	ArrowRightIcon,
	ProjectorScreenIcon,
	PuzzlePieceIcon,
	TargetIcon,
} from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import Button from "../components/Button";
import SplitText from "../components/SplitText";

import SectionTitle from "../components/ui/SectionTitle";
import BannerSustain from "../img/brand/banner-sustain.png";
import BgImage from "../img/brand/bg-image.png";
import CCBadge from "../img/certificates/Clean_Creatives_Badge.svg";
export const Route = createFileRoute("/")({ component: App });
interface ServiceItem {
	title: string;
}
const serviceItems: ServiceItem[] = [
	{
		title: "Sosyal Değişim Danışmanlığı",
	},
	{
		title: "Kaos İletişimi",
	},
	{
		title: "Sürdürülebilirlik İletişimi",
	},

	{
		title: "Kurumsal Değerler İletişimi",
	},
	{
		title: "Lider Konumlandırması",
	},
	{
		title: "Medya İlişkileri ve Eğitimi",
	},
	{
		title: "Ürün İletişimi",
	},
	{
		title: "Kurum İçi İletişim",
	},
	{
		title: "Etkinlik ve Proje Yönetimi",
	},
	{
		title: "Kriz İletişimi",
	},
	{
		title: "Dijital İletişim",
	},
	{
		title: "İtibar Yönetimi",
	},
	{
		title: "Entegre Pazarlama İletişimi",
	},
	{
		title: "Toplumsal Sorumluluk Projeleri",
	},
	{
		title: "Yaratıcı Proje Yönetimi",
	},

	{
		title: "Kurumsal İletişim",
	},
	{
		title: "İç İletişim ve Adil Yönetim Danışmanlığı",
	},
	{
		title: "Sosyal Medya Strateji ve İçerik Danışmanlığı",
	},
];
function App() {
	return (
		<main className="flex flex-col ">
			{/* Hero Section */}
			<section
				className="flex flex-col md:flex-row w-full bg-cover bg-center"
				style={{ backgroundImage: `url(${BgImage})` }}
			>
				<div className="Hero__Left flex w-full h-140  items-center justify-center font-sans text-white text-xl md:text-6xl text-start p-4 md:p-12">
					<SplitText
						className="font-classic text-white text-xl md:text-6xl text-start font-semibold"
						text="Daha iyi bir dünya için 52 yıldır iletişimi dönüştürüyoruz "
					/>
				</div>
			</section>

			{/* Secondary Motto Section */}
			<section className="flex flex-col items-center justify-center font-sans text-(--brand-text-primary) text-lg md:text-3xl font-semibold text-center p-12 md:p-24 ">
				<p>
					1974’ten bu yana markalara güvenilir, cesur ve sürdürülebilir iletişim
					çözümleri sunan bir danışmanlık firmasıyız. İletişimi, toplumsal fayda
					ve ortak yaşam için en güçlü araç olarak görüyoruz. 52 yıllık
					deneyimimizle, her projede şeffaflık, kanıtlanmış yöntemler ve kalıcı
					etki yaratma hedefiyle çalışıyoruz.
				</p>
			</section>

			{/* Our Services Section Start */}
			<section className="Services__Section flex flex-col items-center justify-center font-sans text-(--brand-text-primary) text-lg md:text-2xl text-center p-12 md:pb-24 md:pt-2">
				<div className="Card__Container  flex flex-col lg:flex-row w-full items-center justify-center divide-solid divide-y md:divide-x md:divide-y-0 divide-(--line)">
					<div className="Card__Item flex flex-col items-center justify-center w-full md:w-1/4 h-full bg-white p-4 md:p-12 gap-2 md:gap-4">
						<AnchorSimpleIcon
							className="text-(--brand-primary)"
							size={32}
							weight="duotone"
						/>
						<p className="text-xl">52+ Yıl Sektörde Öncülük</p>
					</div>
					<div className="Card__Item flex flex-col items-center justify-center w-full md:w-1/4 h-full bg-white p-4 md:p-12 gap-2 md:gap-4">
						<TargetIcon
							className="text-(--brand-primary)"
							size={32}
							weight="duotone"
						/>
						<p className="text-xl">Türkiye'nin İlk PR Şirketi</p>
					</div>
					<div className="Card__Item flex flex-col items-center justify-center w-full md:w-1/4 h-full bg-white p-4 md:p-12 gap-2 md:gap-4">
						<PuzzlePieceIcon
							className="text-(--brand-primary)"
							size={32}
							weight="duotone"
						/>
						<p className="text-xl">
							300+ Marka ile İş <br />
							Birliği
						</p>
					</div>
					<div className="Card__Item flex flex-col items-center justify-center w-full md:w-1/4 h-full bg-white p-4 md:p-12 gap-2 md:gap-4">
						<ProjectorScreenIcon
							className="text-(--brand-primary)"
							size={32}
							weight="duotone"
						/>
						<p className="text-xl">1500+ Tamamlanan Proje</p>
					</div>
				</div>
			</section>
			{/* Our Services Section End */}
			{/* Marquee Section 
			<section className="flex flex-col items-center justify-center font-sans text-(--brand-text-primary) text-lg md:text-2xl text-center p-12 md:p-24 border-y border-(--line)">
				<MarqueeMaster />
			</section>
			*/}
			{/* Landing Section Start */}
			<SectionTitle
				title="Biz Kimiz?"
				description="Şeffaf, Cesur ve Sürdürülebilir İletişim"
			/>
			<div className="flex flex-col md:flex-row items-center justify-center w-full p-12 md:p-24 gap-4 md:gap-12">
				<div className="flex flex-col items-center justify-center w-full md:w-1/2 text-(--brand-text-primary) text-md md:text-lg gap-2 md:gap-4 text-justify">
					<p>
						50 yılı aşkın süredir iletişimin,{" "}
						<b>daha iyi bir yaşamın temel taşı</b> olduğuna inanıyor ve bunu tüm
						karar vericilere anlatmayı en önemli hedeflerimizden biri olarak
						görüyoruz. Sahip olduğumuz etik ilkelerin ışığında iletişim
						yolculuğumuzu sürdürüyoruz.
					</p>
					<p>
						<b>A&B Danışmanlık</b> olarak, 2026 yılı itibarıyla vakıf
						sahipliğinde faaliyet gösteren bir iletişim danışmanlığı şirketiyiz.
						Etik mirasımızı kalıcı kılmak ve değerlerimizi kişilere bağlı
						olmaktan çıkararak kurumsal güvence altına almak amacıyla bu modele
						geçtik. Şirket hisselerimizi <b>Armaş Vakfı</b>’na devrederek,
						iletişim alanındaki deneyimimizi vakfın{" "}
						<b>iklim, sürdürülebilirlik, etik ve liderlik</b> alanlarındaki
						bilgi birikimiyle bütünleştirdik.
					</p>
					<p>
						Vakıf çatısı altında faaliyet göstermek, uzun vadeli toplumsal ve
						çevresel etki odağımızı güçlendiriyor. Kurumlara yalnızca görünürlük
						değil; şeffaf, kanıta dayalı ve sorumluluk temelli stratejilerle{" "}
						<b>güven ve kalıcılık</b> inşa eden bir iletişim ortaklığı
						sunuyoruz.
					</p>
				</div>

				<div className="Section__Image w-full md:w-1/2  text-white ">
					<img
						src={BannerSustain}
						alt="Banner Sustain"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
			{/* Landing Section End */}

			{/* Landing Section Start */}
			<SectionTitle
				title="Neler Yapıyoruz?"
				description="18 farklı uzmanlık alanında markanızın yanındayız."
			/>
			<section className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full p-6 md:p-24 space-y-8 md:space-y-0 gap-2 md:gap-6">
				{serviceItems.map(({ title }) => (
					<div
						key={title}
						className="Blog__Item flex flex-col items-start justify-center w-full   gap-2 md:gap-4"
					>
						<p className="text-xl md:text-2xl text-green-950 font-semibold font-sans">
							{title}
						</p>
					</div>
				))}
			</section>
			{/* Landing Section End */}
			{/* Landing Section Start */}
			<SectionTitle
				title="Etik Duruşumuz"
				description="Her 'Evet'in Arkasında Bir 'Hayır' Vardır"
			/>
			<div className="flex flex-col md:flex-row items-center justify-center w-full  p-12 md:px-24 md:py-0 gap-4 md:gap-12">
				<div className="flex flex-col items-center justify-center w-full md:w-1/2 text-(--brand-text-primary) text-md md:text-lg gap-2 md:gap-4 text-justify">
					<p>
						Bizi farklı kılan yalnızca yaptıklarımız değil, yapmadıklarımızdır.
						Tütün, nükleer enerji ve fosil yakıt şirketleriyle çalışmıyoruz.
						Yeşil yıkamaya karşı duruyoruz. Lobicilik faaliyetlerinde yer
						almıyoruz. 2023'te <b>Clean Creatives</b> taahhüdünü imzalayan ilk
						Türk iletişim ajansı olduk.
						<br /> <br />
						Çünkü biliyoruz ki doğru iletişim, doğru ortaklarla kurulur.
					</p>
					<ul className="list-disc list-inside text-(--brand-text-secondary) text-md md:text-lg text-start">
						<li>
							Greenwashing'e sıfır tolerans. Yanıltıcı çevrecilik iddialarının
							arkasında durmuyoruz.
						</li>
						<li>
							Yasaklı alanlar. Tütün, fosil yakıt, nükleer enerji ve siyasi
							partilerle çalışmıyoruz.
						</li>
						<li>
							Medya etiği. Haber–menfaat ilişkisini hiçbir koşulda
							onaylamıyoruz.
						</li>
					</ul>
				</div>
				<div className="Section__Image w-full md:w-1/2 max-h-[595px] text-white p-4 md:p-12 flex items-center justify-center">
					<img
						src={CCBadge}
						alt="Clean Creatives Badge"
						className="max-h-[595px] object-contain"
					/>
				</div>
			</div>
			{/* Landing Section End */}

			{/* Landing Section Start */}
			<div className="flex flex-col md:flex-row w-full  bg-(--brand-primary) text-white p-12 md:px-24 py-12 h-auto lg:h-120 justify-start items-center gap-4 ">
				<div className="Left__Section flex w-full text-4xl font-classic text-italic font-semibold  ">
					<p>Finanstan sanata, tekstilden sivil topluma…</p>
				</div>
				<div className="Right__Section flex flex-col text-md md:text-xl text-start items-start gap-4 md:gap-6">
					<p>
						30 yılı aşan iş birlikleriyle onlarca sektörde deneyim kazandık. Her
						sektörün kendine özgü dinamiklerini, risklerini ve fırsatlarını
						biliyor; buna göre özelleştirilmiş projeler ve iletişim stratejileri
						geliştiriyoruz.
					</p>
					<div className="flex w-auto items-center justify-center">
						<Button
							label="Çalıştığımız Sektörleri Keşfedin"
							type="secondary"
							size="large"
							rounded={true}
							fullWidth={true}
							to="/is-ortaklarimiz"
							endIcon={<ArrowRightIcon size={24} />}
						/>
					</div>
				</div>
			</div>

			{/* Landing Section End */}
		</main>
	);
}
