import { Timeline } from "@/components/ui/timeline";

export default function HistoryofAB() {
	const data = [
		{
			title: "1972",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						Türkiye Halkla İlişkiler Derneği&apos;nin kuruluşuna öncülük edildi.
						Mesleğin kurumsal temelleri atıldı.
					</p>
				</div>
			),
		},
		{
			title: "1974",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						Prof. Dr. Alaeddin Asna, &quot;ne iş yapacağını kimsenin tam bilmediği&quot;
						bir dönemde Türkiye&apos;nin ilk halkla ilişkiler şirketi A&B Halkla
						İlişkiler&apos;i kurdu. Cağaloğlu&apos;ndaki han odasından başlayan yolculuk
						kısa sürede büyüdü. Betül Mardin&apos;in katılımıyla ekip güçlendi; şirket
						Teşvikiye&apos;ye taşındı.
					</p>
				</div>
			),
		},
		{
			title: "1980'ler",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						Türkiye&apos;de halkla ilişkilerin yaygınlaşması sürecinde A&B öncü rol
						oynadı. Akademik katkılar, konferanslar ve yayınlarla meslek teorik temeller
						kazandı. A&B &quot;okul ajans&quot; kimliğiyle hem sektöre insan yetiştirdi
						hem de mesleğin tanınırlığını artırdı.
					</p>
				</div>
			),
		},
		{
			title: "1991",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						A&B, Uluslararası Halkla İlişkiler Derneği&apos;nin (IPRA) Altın Küre Ödülü
						ile uluslararası alanda takdir edildi.
					</p>
				</div>
			),
		},
		{
			title: "1995",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						Alaeddin Asna akademiye odaklanmak üzere yönetimi devretti. Sibel Asna
						liderliğinde A&B yeniden yapılandı. &quot;Toplam İletişim Danışmanlığı&quot;
						anlayışı geliştirildi; iletişim yönetimi stratejik bir boyut kazandı.
					</p>
				</div>
			),
		},
		{
			title: "2004",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						30. yıl kutlandı. Çalışanlara hisse dağıtılarak A&B İletişim A.Ş. yapısı
						kuruldu.
					</p>
				</div>
			),
		},
		{
			title: "2005",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						Londra merkezli Bolton & Quinn ile stratejik ortaklık başladı. Kültür-sanat
						iletişimi projeleriyle uluslararası alanda öncülük sağlandı.
					</p>
				</div>
			),
		},
		{
			title: "2006",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						Artı C İletişim kuruldu; etkinlik ve organizasyon yönetimi alanında
						uzmanlaşma hedeflendi.
					</p>
				</div>
			),
		},
		{
			title: "2015",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						Kurucumuz Prof. Dr. Alaeddin Asna&apos;yı kaybettik. Aynı yıl Yardımsever
						Ltd. kuruldu; A&B&apos;nin gönüllü çalışmaları ve sosyal girişim projeleri
						kurumsallaştı. Türkiye&apos;nin ilk yardımsever arama motoru yardimicinara.org
						yayına girdi.
					</p>
				</div>
			),
		},
		{
			title: "2016",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						&quot;Prof. Dr. Alaeddin Asna Mesleki Konferanslar Dizisi&quot; başlatıldı.
						TÜHİD Altın Pusula Ödülleri kapsamında Alaeddin Asna Altın Baget Ödülü
						verilmeye başlandı.
					</p>
				</div>
			),
		},
		{
			title: "2017",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						&quot;Yeni Zamanlar ve Halkla İlişkiler&quot; temalı konferans serisi Marmara
						Üniversitesi ile başladı, ardından diğer üniversitelere yayıldı. Yardımsever
						Ltd., Dr. Uygar Özesmi ortaklığıyla sivil toplum ve sosyal girişimlere iletişim
						danışmanlığı vermeye başladı.
					</p>
				</div>
			),
		},
		{
			title: "2018",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						A&B yeni bir yönetim modeline geçti; kıdemli çalışanlar ve işkolu liderleri
						yönetimde söz sahibi oldu. Navigate Response ile iş birliği yapılarak kriz
						iletişimi ve denizcilik sektöründe küresel çözüm ortaklığı üstlenildi.
					</p>
				</div>
			),
		},
		{
			title: "2019",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						Bulut sistemine geçilerek uzaktan çalışma uygulamaları başlatıldı.
					</p>
				</div>
			),
		},
		{
			title: "2020",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						Pandemiyle birlikte tamamen uzaktan çalışma modeline geçildi. Bu süreç
						A&B&apos;nin insan odaklı ve esnek kültürünü daha da güçlendirdi.
					</p>
				</div>
			),
		},
		{
			title: "2021",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						Influencer iletişimi için ayrı bir ekip yapılanması kuruldu; markalara özel
						içerik stratejileri geliştirildi.
					</p>
				</div>
			),
		},
		{
			title: "2022",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						Pandemi sonrası fiziksel etkinlikler hız kazandı. Garanti BBVA için
						başlatılan &quot;İhracatta Sürdürülebilir Gelecek&quot; etkinlikleriyle Yeşil
						Mutabakat konusunda sektöre yön verildi.
					</p>
				</div>
			),
		},
		{
			title: "2023",
			content: (
				<div>
					<p className="mb-8 text-md font-normal text-neutral-800 md:text-2xl ">
						Clean Creatives taahhüdü imzalandı; fosil yakıt sektörüne hizmet vermeme
						kararı alan ilk Türk ajansı olduk. Aynı yıl Kadının Güçlenmesi Prensipleri
						(WEPs) imzacısı olunarak toplumsal cinsiyet eşitliği kurumsal düzeyde
						sahiplenildi.
					</p>
				</div>
			),
		},
	];
	return (
		<div className="relative w-full overflow-clip">
			<Timeline data={data} />
		</div>
	);
}
