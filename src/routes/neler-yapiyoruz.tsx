import { createFileRoute } from "@tanstack/react-router";
import SectionTitle from "#/components/ui/SectionTitle";
import SKA01 from "../img/ska/SDG-1.svg";
import SKA02 from "../img/ska/SDG-2.svg";

// Import each SDG asset when adding rows: import SKA02 from "../img/ska/SDG-2.svg";

interface SkaItem {
	iconSrc: string;
	title: string;
	description: string;
}

interface ServiceItem {
	title: string;
	spot: string;
	description: string;
}

interface EtikItem {
	orderNumber: string;
	title: string;
	description: string;
}

export const Route = createFileRoute("/neler-yapiyoruz")({
	component: RouteComponent,
});

function RouteComponent() {
	const serviceItems: ServiceItem[] = [
		{
			title: "Sosyal Değişim Danışmanlığı",
			spot: "Toplumsal değişimleri takip ederek markalara yeni yönler açıyoruz.",
			description:
				"Dünyadaki sosyal ve kültürel dönüşümleri izliyor, kurumların bu değişimlere uyum sağlaması için stratejiler geliştiriyoruz. Ürün ve hizmetlerinizi toplumsal faydaya dönüştüren projelerle markanızın hem değerini hem de etkisini artırıyoruz.",
		},
		{
			title: "Kaos İletişimi",
			spot: "Belirsizlik dönemlerinde markanızın sesini doğru yönlendiriyoruz.",
			description:
				"Ekonomik veya sosyal kriz ortamlarında paydaşlarınızla güvene dayalı iletişim kurmanızı sağlıyoruz. Üst yönetime danışmanlık veriyor, çalışanlardan medyaya kadar tüm paydaşlara doğru mesajı ulaştırıyoruz.",
		},
		{
			title: "Sürdürülebilirlik İletişimi",
			spot: "Sürdürülebilirlik çalışmalarınızı görünür ve etkili kılıyoruz.",
			description:
				"Çevre, toplum ve ekonomi odaklı sürdürülebilirlik projelerinizi iletişim stratejilerine dönüştürüyoruz. Hedef kitlenizde farkındalık yaratıyor, markanızı sorumlu bir aktör olarak konumlandırıyoruz.",
		},

		{
			title: "Kurumsal Değerler İletişimi",
			spot: "Değerlerinizi projelerle görünür hale getiriyoruz.",
			description:
				"Markaların kurumsal değerlerini somut projelere dönüştürüyor, hedef kitlenizle duygusal bağ kurmanızı sağlıyoruz. STÖ'ler ve akademiyle iş birlikleri geliştiriyor, değer odaklı iletişimi prestije dönüştürüyoruz.",
		},
		{
			title: "Lider Konumlandırması",
			spot: "Yöneticilerinizi sözü geçen liderler haline getiriyoruz.",
			description:
				"Üst düzey yöneticilerinizi medyada, sektörde ve kamuoyunda güvenilir otorite olarak konumlandırıyoruz. Onlara görünürlük ve danışılan bir kimlik kazandırıyoruz.",
		},
		{
			title: "Medya İlişkileri ve Eğitimi",
			spot: "Medyada doğru görünürlük için stratejik çözümler sunuyoruz.",
			description:
				"Basın ilişkilerinizi yönetiyor, doğru mecralarda görünürlük sağlıyoruz. Röportaj ve haber fırsatları yaratıyor, sözcüleriniz için medya eğitimleriyle etkili iletişim becerileri kazandırıyoruz.",
		},
		{
			title: "Ürün İletişimi",
			spot: "Ürünlerinizi doğru hedef kitleyle buluşturuyoruz.",
			description:
				"Pazarlama hedeflerinize uygun iletişim planları hazırlıyor, ürünlerinizi tüketiciye anlamlı hikâyelerle sunuyoruz. Satış ve marka değerini artıracak yaratıcı projeler tasarlıyoruz.",
		},
		{
			title: "Kurum İçi İletişim",
			spot: "Çalışan bağlılığınızı güçlendiriyoruz.",
			description:
				"Yönetimle birlikte kurum içi iletişim programları kurguluyor, çalışan motivasyonu ve iş birliğini artırıyoruz. Daha güçlü bir kurum kültürü oluşmasına katkı sağlıyoruz.",
		},
		{
			title: "Etkinlik ve Proje Yönetimi",
			spot: "Etkinliklerinizi unutulmaz bir deneyime dönüştürüyoruz.",
			description:
				"Markalar için yaratıcı konseptler geliştiriyor, lansman, konferans ve özel davetlerin tüm sürecini yönetiyoruz. Katılımcıların markayla bağ kurmasını sağlayacak deneyimler tasarlıyoruz.",
		},
		{
			title: "Kriz İletişimi",
			spot: "Kriz anlarında itibarınızı koruyoruz.",
			description:
				"Kriz senaryoları hazırlıyor, beklenmedik durumlarda doğru iletişim stratejileri oluşturuyoruz. Kamuoyunda güveni koruyarak marka değerinizin zarar görmesini önlüyoruz.",
		},
		{
			title: "Dijital İletişim",
			spot: "Markanızı dijital dünyada güçlendiriyoruz.",
			description:
				"Web, sosyal medya ve dijital kampanyalar için yaratıcı içerikler üretiyor, görünürlüğünüzü artırıyoruz. Dijital dünyada güvenilir ve güçlü bir marka algısı oluşturuyoruz.",
		},
		{
			title: "İtibar Yönetimi",
			spot: "Güvenilir ve saygın bir marka kimliği inşa ediyoruz.",
			description:
				"Markanızın toplum, medya ve paydaşlar nezdinde güven kazanmasını sağlıyoruz. İtibarınızı koruyan uzun vadeli iletişim stratejileri tasarlıyoruz.",
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
				"Sosyal sorumluluk projelerinizi kurumsal stratejinize entegre ediyor, toplumla güçlü bağ kurmanızı sağlıyoruz. Bu sayede markanızı sorumlu bir aktör olarak konumlandırıyoruz.",
		},
		{
			title: "Yaratıcı Proje Yönetimi",
			spot: "Özgün fikirlerle markanıza fark yaratıyoruz.",
			description:
				"Markaların ihtiyaçlarına özel yaratıcı projeler geliştiriyor, uygulama süreçlerini uçtan uca yönetiyoruz. Katma değer sağlayan yenilikçi çözümler sunuyoruz.",
		},

		{
			title: "Kurumsal İletişim",
			spot: "Mesajlarınızı her paydaşa doğru ulaştırıyoruz.",
			description:
				"Tüm iletişim faaliyetlerinizi bir çatı altında topluyor, markanızın paydaşlarla tutarlı ve güçlü bir bağ kurmasını sağlıyoruz.",
		},
		{
			title: "İç İletişim ve Adil Yönetim Danışmanlığı",
			spot: "Çalışanlar için adil ve şeffaf bir kurum kültürü inşa ediyoruz.",
			description:
				"Adil yönetim ve şeffaf iletişim kültürü oluşturuyor, çalışan bağlılığını güçlendiriyoruz. Böylece kurum içi uyum ve verimliliği artırıyoruz.",
		},
		{
			title: "Sosyal Medya Strateji ve İçerik Danışmanlığı",
			spot: "Sosyal medyada etkili ve özgün içerikler üretiyoruz.",
			description:
				"Markanıza özel sosyal medya stratejileri oluşturuyor, içerik planları tasarlıyoruz. Hedef kitlenizle etkileşimi artıran yaratıcı içerikler geliştiriyoruz.",
		},
	];
	const etikItems: EtikItem[] = [
		{
			orderNumber: "1",
			title: "Dostluk ve Güven",
			description:
				"Profesyonel ilişkilerde dostluk, şeffaflık, dürüstlük ve sırdaşlığı temel kabul ederiz.",
		},
		{
			orderNumber: "2",
			title: "Yasalara ve Değerlere Saygı",
			description:
				"Yasalara, toplumsal düzene, kültürel değerlere, yaşam haklarına, ifade özgürlüğüne ve çevreye duyarlıyız; tüm çalışmalarımıza bunu yansıtırız.",
		},
		{
			orderNumber: "3",
			title: "Kamu Yararını Gözetmek",
			description:
				"Toplumu yanıltacak, kamuoyunu veya devlet kurumlarını yanlış etkileyecek faaliyetlerin gizlenmesine destek vermeyiz.",
		},
		{
			orderNumber: "4",
			title: "Mesleki Özdenetim",
			description:
				"Halkla ilişkiler mesleğinin özdenetim kurallarının geliştirilmesi ve bu kurallara uyulması için çalışırız.",
		},
		{
			orderNumber: "5",
			title: "Çıkar Çatışmasından Kaçınmak",
			description:
				"Aynı sektörden, benzer segmentte birden fazla kuruluşa bilgi ve onayları olmadan hizmet vermeyiz.",
		},
		{
			orderNumber: "6",
			title: "Yasaklı Alanlar",
			description:
				"Tütün, nükleer enerji, fosil yakıt üretimi ve siyasi partilerle çalışmayız; lobicilik faaliyetlerinde yer almayız.",
		},
		{
			orderNumber: "7",
			title: "Yeşil Yıkamaya Karşı",
			description:
				"“Greenwashing” olarak bilinen her türlü yanıltıcı çevrecilik uygulamasına karşıyız.",
		},
		{
			orderNumber: "8",
			title: "Medya ile Açık İletişim",
			description:
				"Medya mensuplarına her zaman açık, doğru ve haber değeri taşıyan bilgi veririz. Yanıltıcı içerik paylaşmayız.",
		},
		{
			orderNumber: "9",
			title: "Medya Etik İlkeleri",
			description:
				"Basın mensuplarının çalışma alanına müdahale etmeyiz, “haber–menfaat” ilişkisini hiçbir şekilde onaylamayız.",
		},
		{
			orderNumber: "10",
			title: "Uluslararası Standartlar",
			description:
				"Basın ve sosyal medya ilişkilerinde uluslararası etik standartların dışındaki uygulamaları reddederiz.",
		},
		{
			orderNumber: "11",
			title: "Sürdürülebilirlik ve Şeffaflık",
			description:
				"Sürdürülebilir iletişimin temeli olarak şeffaflık, gerçeklik ve kanıtlanmışlığa inanırız.",
		},
		{
			orderNumber: "12",
			title: "Küresel Sorumluluk",
			description:
				"Birleşmiş Milletler'in 17 Sürdürülebilir Kalkınma Hedefi'ni destekler, bu prensiplerin yaygınlaşması için çalışırız.",
		},
	];
	const skaItems: SkaItem[] = [
		{
			iconSrc: SKA01,
			title: "Yoksulluğa Son",
			description:
				"Kaynakların adil dağılımını destekleyen projeleri önemsiyoruz. Yoksulluğun azaltılması için sosyal sorumluluk girişimlerini iletişim stratejilerine dönüştürüyoruz.",
		},
		{
			iconSrc: SKA02,
			title: "Açlığa Son",
			description:
				"Gıda güvenliği ve erişilebilirliği konularında farkındalık yaratıyor, sürdürülebilir tarım ve sağlıklı beslenme projelerine iletişim desteği veriyoruz.",
		},
	];

	return (
		<main className="flex flex-col">
			{/* Page Header */}
			<SectionTitle
				className="px-4 md:px-16!"
				title="Neler Yapıyoruz?"
				description="18 farklı uzmanlık alanında markanızın yanındayız."
			/>
			{/* Contact Information */}
			<section className="flex flex-col items-center justify-center w-full ">
				{/* Secondary Motto Section */}
				<section className="flex flex-col items-center justify-center font-sans text-(--brand-text-primary) text-lg md:text-2xl text-center p-12 md:p-24 ">
					<p>Title goes here</p>
				</section>
				{/* Landing Section Start */}
				{/* Services Section */}
				<section className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full p-12 md:p-24 space-y-8 md:space-y-0 gap-8 md:gap-12">
					{serviceItems.map(({ title, spot, description }) => (
						<div
							key={title}
							className="Blog__Item flex flex-col items-start justify-center w-full   gap-2 md:gap-4"
						>
							<p className="text-xl md:text-4xl text-green-950 font-semibold font-classic">
								{title}
							</p>
							<p className="font-medium text-md md:text-lg">{spot}</p>
							<p>{description}</p>
						</div>
					))}
				</section>
				{/* Services Section End */}
				{/* Etik İlkelerimiz Section Start */}
				<SectionTitle
					className="px-4 md:px-16! w-full"
					title="Etik İlkelerimiz"
					description="Her 'Evet'in Arkasında Bir 'Hayır' Vardır"
				/>
				{/* Etik İlkelerimiz Section End */}
				{/* Etik İlkelerimiz List Start */}

				<section className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full p-12 md:p-24 space-y-8 md:space-y-0 gap-8 md:gap-12">
					{etikItems.map(({ orderNumber, title, description }) => (
						<div
							key={orderNumber}
							className="List__Item__Body flex flex-col md:min-h-48 md:flex-row gap-2 md:gap-6 items-start justify-start font-sans p-2 md:p-6 rounded-xl border border-red-200 "
						>
							<div className="List__Item__Icon flex rounded-lg text-xl md:text-2xl font-bold min-h-12 min-w-12 items-center justify-center  bg-(--brand-primary) text-white">
								{orderNumber}
							</div>
							<div className="List__Item__Content">
								<p className=" text-lg md:text-xl font-semibold">{title}</p>
								<p className="text-md md:text-lg  ">{description}</p>
							</div>
						</div>
					))}
				</section>
				{/* Etik İlkelerimiz List Ends */}
				{/* A&B’nin Sürdürülebilirlik Manifestosu Section Start */}
				<SectionTitle
					className="px-4 md:px-16! w-full"
					title="Sürdürülebilirlik Manifestomuz"
					description="İz bırakmak değil, etki yaratmak için varız."
				/>
				{/* A&B’nin Sürdürülebilirlik Manifestosu Section End */}
				<section className="flex flex-col items-center justify-center font-sans text-(--brand-text-primary) text-lg md:text-2xl text-center p-12 md:p-24 ">
					<p>
						Bizim için sürdürülebilirlik yalnızca çevresel değil, aynı zamanda
						düşünsel, etik ve insani bir sorumluluktur. Fiziksel kaynak
						tüketimimiz minimum olsa da temsil ettiğimiz değerler, seçtiğimiz
						projeler ve kullandığımız dil toplumda kalıcı bir etki bırakır. Ne
						yapmayacağımızı bildiğimiz kadar, neye “evet” diyeceğimizi de
						biliriz: Adil, şeffaf ve sorumlu bir gelecek için iletişim üretiriz.
					</p>
				</section>

				{/* SKA İlkelerimiz List Start */}
				<section className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full p-12 md:p-24 space-y-8 md:space-y-0 gap-8 md:gap-12">
					{skaItems.map(({ iconSrc, title, description }) => (
						<div
							key={title}
							className="List__Item__Body flex flex-col md:flex-row md:min-h-48  gap-2 md:gap-6 items-center justify-start font-sans p-2 md:p-6 "
						>
							<div className="List__Item__Icon flex shrink-0 items-center justify-center">
								<img
									src={iconSrc}
									alt=""
									className="h-14 w-14 md:h-40 md:w-40 object-contain"
									loading="lazy"
									decoding="async"
								/>
							</div>
							<div className="List__Item__Content">
								<p className="text-md md:text-lg text-justify ">
									{description}
								</p>
							</div>
						</div>
					))}
				</section>
				{/* SKA İlkelerimiz List Ends */}
			</section>
		</main>
	);
}
