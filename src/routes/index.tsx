import { AnchorSimpleIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { MarqueeMaster } from "../components/kibo-ui/marquee/marqueeMaster";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../components/ui/accordion";
import SectionTitle from "../components/ui/SectionTitle";
import PlaceholderImage from "../img/brand/image_placeholder_lg.png";
export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="flex flex-col ">
			{/* Hero Section */}
			<section className="flex flex-col md:flex-row w-full">
				<div className="Hero__Left flex w-full md:w-1/2  bg-(--brand-primary) items-center justify-center font-sans text-white text-xl md:text-6xl text-start p-4 md:p-12">
					<p>Daha iyi bir dünya için 51 yıldır iletişimi dönüştürüyoruz. </p>
				</div>
				<div className="Hero__Right w-full md:w-1/2 bg-(--brand-secondary) text-white p-4 md:p-12">
					<img
						src={PlaceholderImage}
						alt="Hero placeholder"
						className="w-full h-full object-cover"
					/>
				</div>
			</section>

			{/* Secondary Motto Section */}
			<section className="flex flex-col items-center justify-center font-sans text-(--brand-text-primary) text-lg md:text-2xl text-center p-12 md:p-24 ">
				<p>
					1974'ten bu yana markalara güvenilir, cesur ve sürdürülebilir iletişim
					çözümleri sunuyoruz. Bizim için iletişim yalnızca mesaj iletmek değil;
					toplumsal fayda yaratmanın, ortak değerleri korumanın ve geleceği
					birlikte inşa etmenin yolu.
				</p>
			</section>

			{/* Marquee Section */}
			<section className="flex flex-col items-center justify-center font-sans text-(--brand-text-primary) text-lg md:text-2xl text-center p-12 md:p-24 border-y border-(--line)">
				<MarqueeMaster />
			</section>
			{/* Landing Section Start */}
			<SectionTitle
				title="Biz Kimiz?"
				description="Şeffaf, Cesur ve Sürdürülebilir İletişim"
			/>
			<div className="flex flex-col md:flex-row items-center justify-center w-full p-12 md:p-24 gap-4 md:gap-12">
				<div className="flex flex-col items-center justify-center w-full md:w-1/2 text-(--brand-text-primary) text-md md:text-lg gap-2 md:gap-4">
					<p>
						1974'te Türkiye'nin ilk halkla ilişkiler şirketi olarak yola çıktık.
						O günden bu yana iletişimin toplumsal fayda yaratma gücüne inanıyor;
						markalara güvenilir, etik ve sürdürülebilir çözümler sunuyoruz.
					</p>
					<p>
						Yarım asrı aşan bu yolculukta yalnızca Türkiye'nin ilk PR şirketi
						olmadık; mesleğin pek çok alanında "ilk"lerin öncüsü olduk. İş
						ortaklarımızla 30 yılı bulan uzun soluklu iş birlikleri kurduk. Bu
						da hem güvenilirliğimizin hem de değerlerimize olan bağlılığımızın
						en somut göstergesi.
					</p>
				</div>
				<div className="Section__Image w-full md:w-1/2 bg-(--brand-secondary) text-white p-4 md:p-12">
					<img
						src={PlaceholderImage}
						alt="Hero placeholder"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
			{/* Landing Section End */}
			{/* Our Services Section */}
			<section className="flex flex-col items-center justify-center font-sans text-(--brand-text-primary) text-lg md:text-2xl text-center p-12 md:p-24">
				<div className="Card__Container  flex flex-col lg:flex-row w-full items-center justify-center divide-solid divide-y md:divide-x md:divide-y-0 divide-(--line)">
					<div className="Card__Item flex flex-col items-center justify-center w-full md:w-1/4 h-full bg-white p-4 md:p-12 gap-2 md:gap-4">
						<AnchorSimpleIcon className="text-(--brand-primary)" size={32} />
						<p className="text-xl">51+ Yıl Sektörde Öncülük</p>
					</div>
					<div className="Card__Item flex flex-col items-center justify-center w-full md:w-1/4 h-full bg-white p-4 md:p-12 gap-2 md:gap-4">
						<AnchorSimpleIcon className="text-(--brand-primary)" size={32} />
						<p className="text-xl">Türkiye'nin İlk PR Şirketi</p>
					</div>
					<div className="Card__Item flex flex-col items-center justify-center w-full md:w-1/4 h-full bg-white p-4 md:p-12 gap-2 md:gap-4">
						<AnchorSimpleIcon className="text-(--brand-primary)" size={32} />
						<p className="text-xl">100+ Marka ile İş Birliği</p>
					</div>
					<div className="Card__Item flex flex-col items-center justify-center w-full md:w-1/4 h-full bg-white p-4 md:p-12 gap-2 md:gap-4">
						<AnchorSimpleIcon className="text-(--brand-primary)" size={32} />
						<p className="text-xl">500+ Tamamlanan Proje</p>
					</div>
				</div>
			</section>

			{/* Landing Section Start */}
			<SectionTitle
				title="Neler Yapıyoruz?"
				description="18 farklı uzmanlık alanında markanızın yanındayız."
			/>
			<div className="flex flex-col md:flex-row items-center justify-center w-full p-12 md:p-24 gap-4 md:gap-12">
				<div className="Section__Image w-full md:w-1/2 bg-(--brand-secondary) text-white p-4 md:p-12">
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
			<div className="flex flex-col md:flex-row items-center justify-center w-full p-12 md:p-24 gap-4 md:gap-12">
				<div className="flex flex-col items-center justify-center w-full md:w-1/2 text-(--brand-text-primary) text-md md:text-lg gap-2 md:gap-4">
					<p>
						Bizi farklı kılan yalnızca yaptıklarımız değil, yapmadıklarımızdır.
						Tütün, nükleer enerji ve fosil yakıt şirketleriyle çalışmıyoruz.
						Yeşil yıkamaya karşı duruyoruz. Lobicilik faaliyetlerinde yer
						almıyoruz. 2023'te Clean Creatives taahhüdünü imzalayan ilk Türk
						iletişim ajansı olduk.
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
				<div className="Section__Image w-full md:w-1/2 bg-(--brand-secondary) text-white p-4 md:p-12">
					<img
						src={PlaceholderImage}
						alt="Hero placeholder"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</main>
	);
}
