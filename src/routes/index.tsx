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
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../components/ui/accordion";
import SectionTitle from "../components/ui/SectionTitle";
import BgImage from "../img/brand/bg-image.png";
import PlaceholderImage from "../img/brand/image_placeholder_lg.png";
import CCBadge from "../img/certificates/Clean_Creatives_Badge.svg";
export const Route = createFileRoute("/")({ component: App });

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
						text="Daha iyi bir dünya için 52 Yıldır iletişimi dönüştürüyoruz. "
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
				<div className="flex flex-col items-center justify-center w-full md:w-1/2 text-(--brand-text-primary) text-md md:text-lg gap-2 md:gap-4">
					<p>
						<b>50 yılı aşkın süredir</b> iletişimin, <b>daha iyi bir yaşamın</b>{" "}
						temel taşı olduğuna inanıyor ve bunu tüm karar vericilere anlatmayı
						en önemli hedeflerimizden biri olarak görüyoruz. Sahip olduğumuz
						etik ilkelerin ışığında iletişim yolculuğumuzu sürdürüyoruz.
					</p>
					<p>
						Amacımız, kurumların{" "}
						<b>şeffaf, kanıtlara dayalı ve cesur stratejiler</b>
						geliştirmelerine destek olmak,{" "}
						<b>toplumsal ve çevresel değerlere odaklı</b> bir iletişim
						kurgulamalarını sağlamak.
					</p>
				</div>
				<div className="Section__Image w-full md:w-1/2  text-white p-4 md:p-12">
					<img
						src={PlaceholderImage}
						alt="Hero placeholder"
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
			<div className="flex flex-col md:flex-row items-center justify-center w-full lg:min-h-[700px] p-12 md:p-24 gap-4 md:gap-12">
				<div className="Section__Image w-full md:w-1/2  text-white p-4 md:p-12">
					<img
						src={PlaceholderImage}
						alt="Hero placeholder"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="flex flex-col items-center justify-center w-full md:w-1/2 text-(--brand-text-primary) text-md md:text-lg">
					<Accordion
						type="single"
						collapsible
						defaultValue="firstItem"
						className="w-full"
					>
						<AccordionItem value="firstItem">
							<AccordionTrigger>Sürdürülebilirlik İletişimi</AccordionTrigger>
							<AccordionContent>
								Sürdürülebilirlik çalışmalarınızı yalnızca raporlamakla
								kalmıyor; hedef kitlenizde gerçek farkındalık yaratan, markanızı
								sorumlu bir aktör olarak konumlandıran stratejilere
								dönüştürüyoruz.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="secondItem">
							<AccordionTrigger>Kriz İletişimi</AccordionTrigger>
							<AccordionContent>
								Kriz anında her dakika değerlidir. Önceden hazırladığımız
								senaryolar ve hızlı aksiyon planlarıyla itibarınızı korur,
								kamuoyunda güveni yeniden inşa ederiz.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="thirdItem">
							<AccordionTrigger>Lider Konumlandırması</AccordionTrigger>
							<AccordionContent>
								Yöneticilerinizi medyada, sektörde ve kamuoyunda güvenilir
								otorite olarak konumlandırıyor; onlara görünürlük ve danışılan
								bir kimlik kazandırıyoruz.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="fourthItem">
							<AccordionTrigger>Sosyal Değişim Danışmanlığı</AccordionTrigger>
							<AccordionContent>
								Dünyadaki sosyal ve kültürel dönüşümleri yakından izliyor; ürün
								ve hizmetlerinizi toplumsal faydaya dönüştüren projelerle
								markanızın hem değerini hem etkisini artırıyoruz.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
			{/* Landing Section End */}
			{/* Landing Section Start */}
			<SectionTitle
				title="Etik Duruşumuz"
				description="Her 'Evet'in Arkasında Bir 'Hayır' Vardır"
			/>
			<div className="flex flex-col md:flex-row items-center justify-center w-full lg:min-h-[700px] p-12 md:p-24 gap-4 md:gap-12">
				<div className="flex flex-col items-center justify-center w-full md:w-1/2 text-(--brand-text-primary) text-md md:text-lg gap-2 md:gap-4">
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
			<SectionTitle
				title="Neden a&b?"
				description="52 Yıllık Güven, Tek Farkımız"
			/>
			<div className="flex flex-col md:flex-row items-center justify-center w-full lg:min-h-[700px] p-12 md:p-24 gap-4 md:gap-12">
				<Accordion
					type="single"
					collapsible
					defaultValue="firstItem"
					className="w-full"
				>
					<AccordionItem value="firstItem">
						<AccordionTrigger>Köklü Deneyim</AccordionTrigger>
						<AccordionContent>
							Türkiye'de halkla ilişkilerin henüz bir meslek olarak tanınmadığı
							dönemde kurulduk. Bugün mesleğin kuramsal temellerine katkıda
							bulunmuş, akademik literatüre girmiş bir kurumuz.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="secondItem">
						<AccordionTrigger>Uzun Soluklu İş Birlikleri</AccordionTrigger>
						<AccordionContent>
							Müşterilerimizle ortalama iş birliği süremiz 10 yılın üzerinde.
							Bizi tercih edenler genellikle bizi bırakmıyor. Bunun en büyük
							nedeni: sonuç odaklı çalışmak kadar, güvene dayalı ilişki kurmak.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="thirdItem">
						<AccordionTrigger>Uluslararası Ağ</AccordionTrigger>
						<AccordionContent>
							Londra merkezli Bolton & Quinn ve küresel kriz iletişimi uzmanı
							Navigate Response ile stratejik ortaklıklarımız sayesinde
							uluslararası projelerde de güçlü bir çözüm ortağıyız.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<div className="Section__Image w-full md:w-1/2  text-white p-4 md:p-12">
					<img
						src={PlaceholderImage}
						alt="Hero placeholder"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
			{/* Landing Section End */}
			{/* Landing Section Start */}
			<div className="flex flex-col md:flex-row w-full  bg-(--brand-primary) text-white p-12 md:px-24 py-12 h-auto lg:h-120 justify-start items-center gap-4 ">
				<div className="Left__Section flex w-full text-4xl font-classic text-italic font-semibold  ">
					<p>Finans'tan Kültür-Sanata, Enerjiden Sağlığa</p>
				</div>
				<div className="Right__Section flex flex-col text-md md:text-xl text-start items-start gap-4 md:gap-6">
					<p>
						30 yılı aşan iş birlikleriyle onlarca sektörde deneyim kazandık. Her
						sektörün kendine özgü dinamiklerini, risklerini ve fırsatlarını
						biliyor; buna göre özelleştirilmiş iletişim stratejileri
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
