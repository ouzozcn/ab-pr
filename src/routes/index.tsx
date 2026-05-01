import { createFileRoute } from "@tanstack/react-router";
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
			<section className="flex flex-col items-center justify-center font-sans text-(--brand-text-primary) text-lg md:text-2xl text-center p-12 md:p-24 border-b border-(--line)">
				<p>
					1974'ten bu yana markalara güvenilir, cesur ve sürdürülebilir iletişim
					çözümleri sunuyoruz. Bizim için iletişim yalnızca mesaj iletmek değil;
					toplumsal fayda yaratmanın, ortak değerleri korumanın ve geleceği
					birlikte inşa etmenin yolu.
				</p>
			</section>

			{/* Our Services Section */}
			<section className="flex flex-col items-center justify-center font-sans text-(--brand-text-primary) text-lg md:text-2xl text-center p-12 md:p-24">
				<div className="Card__Container  flex flex-col md:flex-row w-full items-center justify-center divide-solid divide-y md:divide-x md:divide-y-0 divide-(--line)">
					<div className="Card__Item flex flex-col items-center justify-center w-full md:w-1/4 h-full bg-white p-4 md:p-12">
						<p className="text-xl">51+ Yıl Sektörde Öncülük</p>
					</div>
					<div className="Card__Item flex flex-col items-center justify-center w-full md:w-1/4 h-full bg-white p-4 md:p-12">
						<p className="text-xl">Türkiye'nin İlk PR Şirketi</p>
					</div>
					<div className="Card__Item flex flex-col items-center justify-center w-full md:w-1/4 h-full bg-white p-4 md:p-12">
						<p className="text-xl">100+ Marka ile İş Birliği</p>
					</div>
					<div className="Card__Item flex flex-col items-center justify-center w-full md:w-1/4 h-full bg-white p-4 md:p-12">
						<p className="text-xl">500+ Tamamlanan Proje</p>
					</div>
				</div>
			</section>
			<SectionTitle
				title="Biz Kimiz?"
				description="Şeffaf, Cesur ve Sürdürülebilir İletişim"
			/>
			<div className="flex flex-col items-center justify-center w-full p-12 md:p-24">
				<p>
					1974'te Türkiye'nin ilk halkla ilişkiler şirketi olarak yola çıktık. O
					günden bu yana iletişimin toplumsal fayda yaratma gücüne inanıyor;
					markalara güvenilir, etik ve sürdürülebilir çözümler sunuyoruz.
				</p>
				<p>
					Yarım asrı aşan bu yolculukta yalnızca Türkiye'nin ilk PR şirketi
					olmadık; mesleğin pek çok alanında "ilk"lerin öncüsü olduk. İş
					ortaklarımızla 30 yılı bulan uzun soluklu iş birlikleri kurduk. Bu da
					hem güvenilirliğimizin hem de değerlerimize olan bağlılığımızın en
					somut göstergesi.
				</p>
			</div>
		</main>
	);
}
