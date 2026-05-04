import { createFileRoute } from "@tanstack/react-router";
import SectionTitle from "#/components/ui/SectionTitle";

interface ServiceItem {
	title: string;
	spot: string;
	description: string;
}

export const Route = createFileRoute("/neler-yapiyoruz")({
	component: RouteComponent,
});

function RouteComponent() {
	const serviceItems: ServiceItem[] = [
		{
			title: "Kaos İletişimi",
			spot: "Belirsizlik dönemlerinde markanızın sesini doğru yönlendiriyoruz.",
			description:
				"Ekonomik veya sosyal kriz ortamlarında paydaşlarınızla güvene dayalı iletişim kurmanızı sağlıyoruz. Üst yönetime danışmanlık veriyor, çalışanlardan medyaya kadar tüm paydaşlara doğru mesajı doğru zamanda ulaştırıyoruz.",
		},
		{
			title: "Kurumsal Değerler İletişimi",
			spot: "Değerlerinizi projelerle görünür hale getiriyoruz.",
			description:
				"Markaların kurumsal değerlerini somut projelere dönüştürüyor, hedef kitlenizle duygusal bağ kurmanızı sağlıyoruz. STÖ'ler ve akademiyle iş birlikleri geliştiriyor, değer odaklı iletişimi prestije dönüştürüyoruz.",
		},
		{
			title: "Lider Konumlandırması",
			spot: "Yöneticilerinizi sektörlerinde sözü geçen liderler haline getiriyoruz.",
			description:
				"Üst düzey yöneticilerinizi medyada, sektörde ve kamuoyunda güvenilir otorite olarak konumlandırıyoruz. Doğru platformlarda doğru mesajlarla, onlara kalıcı bir görünürlük ve danışılan bir kimlik kazandırıyoruz.",
		},
		{
			title: "Medya İlişkileri ve Eğitimi",
			spot: "Medyada doğru görünürlük için stratejik çözümler sunuyoruz.",
			description:
				"Basın ilişkilerinizi yönetiyor, doğru mecralarda doğru zamanda görünürlük sağlıyoruz. Sözcüleriniz için medya eğitimleriyle; kameraların önünde, mikrofon karşısında etkili iletişim becerileri kazandırıyoruz.",
		},
		{
			title: "Ürün İletişimi",
			spot: "Ürünlerinizi doğru hedef kitleyle buluşturuyoruz.",
			description:
				"Pazarlama hedeflerinize uygun iletişim planları hazırlıyor, ürünlerinizi tüketiciye yalnızca özellik listesiyle değil anlamlı hikayelerle sunuyoruz. Satış ve marka değerini aynı anda artıracak yaratıcı projeler tasarlıyoruz.",
		},
		{
			title: "Kurum İçi İletişim",
			spot: "Çalışan bağlılığınızı güçlendiriyoruz.",
			description:
				"Yönetimle birlikte kurum içi iletişim programları kurguluyor, çalışan motivasyonu ve iş birliğini artırıyoruz. Sağlıklı bir kurum kültürünün en güçlü temeli, içeriden başlayan dürüst iletişimdir.",
		},
		{
			title: "Etkinlik ve Proje Yönetimi",
			spot: "Etkinliklerinizi unutulmaz bir deneyime dönüştürüyoruz.",
			description:
				"Markalar için yaratıcı konseptler geliştiriyor, lansman, konferans ve özel davetlerin tüm sürecini uçtan uca yönetiyoruz. Katılımcıların markayla gerçek bir bağ kurmasını sağlayacak deneyimler tasarlıyoruz.",
		},
		{
			title: "Kriz İletişimi",
			spot: "Kriz anlarında itibarınızı koruyoruz.",
			description:
				"Kriz öncesinde senaryo çalışmaları yapıyor, kriz anında hızlı ve doğru aksiyon alıyor, kriz sonrasında itibar onarımını yönetiyoruz. Her aşamada tek bir hedef: paydaşların güvenini korumak.",
		},
		{
			title: "Dijital İletişim",
			spot: "Markanızı dijital dünyada güçlendiriyoruz.",
			description:
				"Web, sosyal medya ve dijital kampanyalar için strateji geliştirip yaratıcı içerikler üretiyoruz. Dijital dünyada güvenilir, tutarlı ve güçlü bir marka algısı oluşturuyoruz.",
		},
		{
			title: "İtibar Yönetimi",
			spot: "Güvenilir ve saygın bir marka kimliği inşa ediyoruz.",
			description:
				"Markanızın toplum, medya ve paydaşlar nezdinde güven kazanmasını sağlıyoruz. Kısa vadeli krizlerden uzun vadeli algı yönetimine kadar itibarınızı koruyan stratejiler tasarlıyoruz.",
		},
		{
			title: "Entegre Pazarlama İletişimi",
			spot: "Tüm mecralarda tek ses, güçlü etki.",
			description:
				"Reklam, PR, dijital ve sosyal medya kanallarını entegre ederek bütünsel kampanyalar yürütüyoruz. Mesajlarınızın her kanalda tutarlı ve etkili olmasını sağlıyoruz.",
		},
		{
			title: "Toplumsal Sorumluluk Projeleri",
			spot: "Topluma değer katacak projeler tasarlıyoruz.",
			description:
				"Sosyal sorumluluk projelerinizi kurumsal stratejinize entegre ediyor, toplumla güçlü bağ kurmanızı sağlıyoruz. Göstermelik değil, gerçek ve ölçülebilir toplumsal etki yaratıyoruz.",
		},
		{
			title: "Yaratıcı Proje Yönetimi",
			spot: "Özgün fikirlerle markanıza fark yaratıyoruz.",
			description:
				"Markaların ihtiyaçlarına özel yaratıcı projeler geliştiriyor, uygulama süreçlerini uçtan uca yönetiyoruz. Kalıp dışı düşünmek, 51 yıldır değişmeyen çalışma biçimimizdir.",
		},
		{
			title: "İç İletişim ve Adil Yönetim Danışmanlığı",
			spot: "Çalışanlar için adil ve şeffaf bir kurum kültürü inşa ediyoruz.",
			description:
				"Adil yönetim ve şeffaf iletişim kültürü oluşturuyor, çalışan bağlılığını güçlendiriyoruz. Kurum içi uyum ve verimlilik, güçlü bir iç iletişim altyapısıyla başlar.",
		},
		{
			title: "Kurumsal İletişim",
			spot: "Mesajlarınızı her paydaşa doğru ulaştırıyoruz.",
			description:
				"Tüm iletişim faaliyetlerinizi bir çatı altında topluyor, markanızın paydaşlarla tutarlı ve güçlü bir bağ kurmasını sağlıyoruz. Dağınık mesajlar yerine, bütünsel ve stratejik bir ses.",
		},
		{
			title: "Sosyal Medya Strateji ve İçerik Danışmanlığı",
			spot: "Sosyal medyada etkili ve özgün içerikler üretiyoruz.",
			description:
				"Markanıza özel sosyal medya stratejileri oluşturuyor, içerik planları tasarlıyoruz. Algoritmayı değil, insanı hedefleyen; etkileşimi artıran, marka sadakati yaratan içerikler geliştiriyoruz.",
		},
	];

	return (
		<main className="flex flex-col">
			{/* Page Header */}
			<SectionTitle
				className="px-4 md:px-16!"
				title="Hikayemiz"
				description="51 yıldır markalara güvenilir, cesur ve sürdürülebilir iletişim çözümleri sunuyoruz."
			/>
			{/* Contact Information */}
			<section className="flex flex-col items-center justify-center w-full ">
				{/* Secondary Motto Section */}
				<section className="flex flex-col items-center justify-center font-sans text-(--brand-text-primary) text-lg md:text-2xl text-center p-12 md:p-24 ">
					<p>
						Her marka farklıdır. Her kriz farklıdır. Her fırsat farklıdır. Bu
						yüzden tek tip çözümler üretmiyoruz. 51 yıllık deneyim ve 18
						uzmanlık alanıyla, ihtiyacınıza özel bir strateji geliştiriyoruz.
					</p>
				</section>
				{/* Landing Section Start */}
				{/* Page Section */}
				<section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full p-12 md:p-24 space-y-8 md:space-y-0 gap-8 md:gap-12">
					{serviceItems.map(({ title, description }) => (
						<div
							key={title}
							className="Blog__Item flex flex-col items-start justify-center w-full text-(--brand-text-primary) text-md md:text-lg gap-2 md:gap-4"
						>
							<p className="text-xl md:text-2xl font-semibold font-classic">
								{title}
							</p>

							<p>{description}</p>
						</div>
					))}
				</section>
			</section>
		</main>
	);
}
