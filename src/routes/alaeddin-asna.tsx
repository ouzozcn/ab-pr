import { createFileRoute } from "@tanstack/react-router";
import SectionTitle from "#/components/ui/SectionTitle";
export const Route = createFileRoute("/alaeddin-asna")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex flex-col">
			{/* Page Header */}
			<SectionTitle
				className="px-4 md:px-16!"
				title="Kurucumuz: Prof. Dr. Alaeddin Asna"
				description="Türkiye’de Halkla İlişkiler Mesleğinin Kurucusu"
			/>
			{/* Secondary Motto Section */}
			<section className="flex flex-col items-center justify-center font-sans text-(--brand-text-primary) text-lg md:text-3xl font-semibold text-center p-4 md:px-16 md:pt-12 md:pb-0">
				<p>
					Türkiye’de halkla ilişkiler mesleğinin kurucusu olarak kabul edilen
					Prof. Dr. Alaeddin Asna, hem akademide hem iş dünyasında iletişim
					disiplininin gelişimine öncülük eden bir vizyonerdi.
				</p>
			</section>
			{/* History of Founder Starts */}
			<div className="flex flex-col items-center justify-center w-full p-12 md:p-24 text-justify gap-4 md:gap-12 text-md md:text-lg">
				<p>
					1961’de Ankara Üniversitesi Siyasal Bilgiler Fakültesi Ekonomi
					Bölümü’nden mezun oldu. ABD Michigan State University’de İletişim
					Sanatları alanında yüksek lisans yaptı (1964). Türkiye’ye dönüşünde
					TRT’de radyoculuk, Yeni İstanbul ve Vatan gazetelerinde gazetecilik
					yaptı; ardından Milli Savunma Bakanlığı, Devlet Planlama Teşkilatı ve
					Sağlık Bakanlığı’nda görev aldı. Koç Holding’de Halkla İlişkiler
					Müdürü olarak kurumsal iletişimin ilk yapı taşlarını attı.
				</p>
				<p>
					1974’te Türkiye’nin ilk halkla ilişkiler şirketi olan{" "}
					<b>A&B Halkla İlişkiler</b>’i kurdu. 21 yıl boyunca yüzlerce kurum ve
					organizasyona danışmanlık verdi. Onun yönetiminde A&B, 1991’de
					Uluslararası Halkla İlişkiler Derneği (IPRA) tarafından Altın Küre
					Ödülü’ne layık görüldü. 1995’te akademik kariyerine odaklanmak üzere
					şirketin yönetimini devretti; danışman ve yönetim kurulu üyesi olarak
					2015’teki vefatına kadar katkılarını sürdürdü.
				</p>
				<p>
					Asna yalnızca bir ajans kurucusu değil, aynı zamanda mesleğin
					örgütleyicisiydi. 1972’de Halkla İlişkiler Derneği’nin kuruluşuna
					öncülük etti, iki kez başkanlık yaptı ve derneğin gelişimine yön
					verdi. Marmara Üniversitesi İletişim Fakültesi’nde öğretim üyeliği,
					dekanlık, doçentlik ve profesörlük unvanlarıyla yüzlerce öğrenci
					yetiştirdi.
				</p>
				<p>
					Onun yetiştirdiği öğrenciler, bugün iletişim sektörünün liderleri
					arasında yer alıyor; akademisyen, danışman, gazeteci ve yöneticiler
					olarak Türkiye’nin iletişim ekosistemine yön veriyorlar. Bu miras,
					A&B’nin kültüründe ve değerlerinde yaşamaya devam ediyor.
				</p>
				<p>
					Akademik ve profesyonel kariyerinin yanı sıra edebiyatla da iç içeydi.
					Şiir ve hikâyeleri Varlık ve Türk Dili dergilerinde yayımlandı,
					1974’te “Sandaldaki Adam” kitabıyla ödül kazandı. Halkla ilişkiler ve
					iletişim alanında yazdığı kitaplar, makaleler ve bildiriler hâlâ
					kaynak niteliğini koruyor.
				</p>
			</div>
			<section className="flex flex-col items-center justify-center font-sans text-(--brand-text-primary) text-lg md:text-3xl font-semibold text-center p-4 md:p-16 ">
				<p>
					Prof. Dr. Alaeddin Asna, etik değerleri, öncü vizyonu ve akademik
					katkılarıyla yalnızca A&B’nin değil, Türkiye’de iletişim disiplininin
					de temel taşlarından biri oldu. Onun vizyonu, bugün hâlâ bizim
					pusulamız.
				</p>
			</section>
		</main>
	);
}
