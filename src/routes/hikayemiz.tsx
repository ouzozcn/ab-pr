import {
	AnchorSimpleIcon,
	ArrowUpRightIcon,
	CircleHalfTiltIcon,
	FlowerIcon,
	LineVerticalIcon,
	PersonSimpleIcon,
	UsersThreeIcon,
} from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import SectionTitle from "#/components/ui/SectionTitle";
import Button from "../components/Button";
import HistoryofAB from "../components/HistoryofAB";
import ListItem from "../components/ListItem";
import SplitText from "../components/SplitText";
import ArmasImage from "../img/armas/armas_vakif_building.jpg";
import AlaaddinAsnaImage from "../img/brand/alaaddin-asna.jpg";
import BoltonQuinnImage from "../img/customers/boltonquinn.svg";
import CCBadge from "../img/customers/cclogo.svg";
import NavigateResponseImage from "../img/customers/navresponse.svg";
import WEPsImage from "../img/customers/wepslogo.svg";
export const Route = createFileRoute("/hikayemiz")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex flex-col">
			{/* Page Header */}
			<SectionTitle
				className="px-4 md:px-16!"
				title="Hikayemiz"
				description="50 yılı aşkın süredir markalara güvenilir, cesur ve sürdürülebilir iletişim çözümleri sunuyoruz."
			/>
			{/* Contact Information */}
			<section className="flex flex-col items-center justify-center w-full ">
				{/* Secondary Motto Section */}

				{/* Landing Section Start */}

				<div className="flex flex-col md:flex-row items-center justify-center w-full p-12 md:p-24 gap-4 md:gap-12 text-justify ">
					<div className="Section__Image w-auto  ">
						<img
							src={AlaaddinAsnaImage}
							alt="Kurucumuz Prof. Dr. Alaeddin Asna"
							className="w-auto h-full rounded-xl overflow-hidden object-cover"
						/>
					</div>
					<div className="flex flex-col items-center justify-center w-full lg:min-w-160 text-(--brand-text-primary) text-md md:text-lg gap-2 md:gap-4">
						<p>
							1974 yılında Prof. Dr. Alaeddin Asna tarafından kurulan A&B
							İletişim, <b>Türkiye’nin ilk halkla ilişkiler şirketidir</b>.
							Cağaloğlu’ndaki mütevazı bir ofisten başlayan yolculuğumuz, kısa
							sürede iş dünyasının güvenini kazanarak Teşvikiye’de köklü bir
							iletişim kurumuna dönüştü. 1995’te Sibel Asna Özesmi’nın liderliğinde
							yeniden yapılanan şirketimiz, 2000’lerden itibaren A&B İletişim
							A.Ş. adıyla yoluna devam etti. Bugün{" "}
							<b>52 yıllık deneyimimizle</b>, hem ulusal hem de uluslararası
							düzeyde stratejik ortaklıklarla iletişim gücümüzü büyütüyoruz.
						</p>
						<p>
							Yarım asrı aşan bu yolculukta, yalnızca Türkiye’nin ilk halkla
							ilişkiler şirketi olmadık; aynı zamanda mesleğin pek çok alanında
							<b>“ilk”lerin öncüsü</b> olduk. Halkla ilişkiler ve iletişimde
							geliştirdiğimiz yaklaşımlar, akademik literatüre girerek mesleğin
							kuramsal temellerine de katkıda bulundu. İş ortaklarımızla 30 yılı
							bulan uzun soluklu iş birlikleri kurduk; bu da hem
							güvenilirliğimizin hem de değerlerimize olan bağlılığımızın en
							somut göstergesi oldu.
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center w-full md:mb-16 p-4">
					<Button
						label="Kurucumuz Prof. Dr. Alaeddin Asna'yı Tanıyın"
						type="secondary"
						size="large"
						rounded={true}
						to="/alaeddin-asna"
					/>
				</div>
				{/* Landing Section End */}
				{/* Landing Section Start */}

				<div className="flex flex-col md:flex-row items-center justify-center w-full p-12 md:pt-0 md:pb-24 gap-4 md:gap-12 text-justify ">
					<div className="flex flex-col items-center justify-center w-full  text-(--brand-text-primary) text-md md:text-lg gap-2 md:gap-4">
						<p>
							Ama bizi biz yapan sadece tarihimiz değil. En başından beri
							iletişimi <b>daha iyi bir yaşamın temel aracı</b> olarak
							görüyoruz. Bizim için iletişim; şeffaflık, cesaret ve
							sürdürülebilirlik demek. Dünyanın ve toplumun ortak faydasını
							gözetmek, markalara kalıcı değer katmak ve geleceğe sorumlulukla
							bakmak demek. İşte bu yüzden 52 yıldır aynı pusulayı takip
							ediyoruz: <b>Vicdan, hakkaniyet ve ifade özgürlüğü.</b> Çünkü
							biliyoruz ki, iletişim yalnızca değişimi yansıtmaz; değişimi
							mümkün kılar.
						</p>
						<p>
							İşte tam da bu yüzden Ocak 2026 itibariyle, etik değerlerimizi
							kalıcılaştırmak için, Türkiye’de ve dünyada nadir görülen bir
							kurumsal modele geçtik. 52 yıllık etik anlayışımızı koruma ve
							geleceğe taşıma kararı aldık. Bu doğrultuda, şirketin tüm
							hisselerini Sibel Asna Özesmi <b>Armaş Vakfı</b>’na devretti. Yeni
							yapımızla birlikte yolumuza A&B Danışmanlık adıyla devam ediyoruz.
							Bu adımı, klasik bir şirket devri olarak değil; iletişim gibi son
							derece güçlü ve aynı zamanda yüksek sorumluluk taşıyan bir alanda,
							mülkiyet yerine misyonu, kısa vadeli kazançlar yerine etik
							sürekliliği merkeze alan bilinçli bir kurumsal tercih olarak
							görüyoruz. Yeni yapımızla birlikte, iletişim danışmanlığındaki
							deneyimimizi Armaş Vakfı’nın iklim, sürdürülebilirlik, etik,
							toplumsal etki ve liderlik alanlarındaki bilgi birikimiyle
							birleştiriyoruz. Bu sayede hizmet kapsamımızı genişletiyoruz. Yeni
							dönemde <b>A&B Danışmanlık</b> olarak; etik yönetim ve kurumsal
							değer tanımlaması, sürdürülebilirlik ve iklim iletişimi, topluluk
							oluşturma ve değişim liderliği, <b>“yeşil”</b> ve <b>“mavi”</b>{" "}
							yıkamadan arınmış şeffaf iletişim modelleri üzerine çalışan
							kurumlar için uzun vadeli bir iş ortağı olmayı hedefliyoruz.
						</p>
					</div>
				</div>
				{/* Landing Section End */}
				{/* History of Founder Starts */}
				{/* Hero Section */}
				<section className="flex flex-col md:flex-row w-full mb-12 md:mb-24">
					<div className="Hero__Left flex flex-col w-full md:w-1/2  bg-green-900 items-center justify-center font-sans text-white text-xl md:text-6xl  text-start p-4 md:p-12 gap-4 md:gap-12">
						<SplitText
							className="font-classic text-white text-4xl md:text-6xl text-start font-semibold"
							text="Armaş Vakfı'nı Tanıyalım"
						/>
						<Button
							label="Daha Fazla"
							type="tertiary"
							size="large"
							rounded={true}
							to="https://armasvakfi.org/"
							endIcon={<ArrowUpRightIcon size={24} />}
						/>
					</div>

					<div className="Hero__Right w-full md:w-1/2">
						<img
							src={ArmasImage}
							alt="Armaş Vakfı"
							className="w-full h-full object-cover"
						/>
					</div>
				</section>
				{/* History of Founder Ends */}
				{/* History of A&B */}
				<div className="flex flex-col items-center justify-center w-full text-center  ">
					<p className="text-4xl font-classic">52 Yıl, Bir Pusula</p>
				</div>
				<HistoryofAB />
				{/* Page Header */}
				<SectionTitle
					className="px-4 md:px-16! w-full"
					title="Kültürümüz ve Değerlerimiz"
					description="52 Yıldır Aynı Pusulayı Takip Ediyoruz"
				/>
				{/* Contact Information */}
				<section className="flex flex-col items-center justify-center  w-full p-12 md:p-16">
					<div className="List__Item__Container grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-8 items-start">
						<ListItem
							title="İletişimde en güçlü araç, gerçeğin kendisidir. Müşterilerimizle, medyayla ve kamuoyuyla kurduğumuz her ilişkide şeffaflık ilk adımımızdır. Söylemediğimizi söylemiyoruz; söylediğimizin arkında duruyoruz."
							icon={<AnchorSimpleIcon size={32} weight="duotone" />}
						/>
						<ListItem
							title="Zor soruları sormaktan, doğruyu savunmaktan, gerektiğinde kârlı bir işe &quot;hayır&quot; demekten hiç vazgeçmedik. Cesaret, 52 yıldır en yakın yol arkadaşımız."
							icon={<LineVerticalIcon size={32} weight="duotone" />}
						/>
						<ListItem
							title="Bugünü değil, yarını da düşünerek çalışıyoruz. İletişim, geleceğe bırakılan bir izdir. Bu yüzden her projede kalıcı etki yaratmayı, kısa vadeli kazanımlar yerine uzun vadeli değer üretmeyi tercih ediyoruz."
							icon={<FlowerIcon size={32} weight="duotone" />}
						/>

						<ListItem
							title="Markalara değer katarken topluma fayda üretmeyi vazgeçilmez kabul ediyoruz. Ticari hedeflerle toplumsal sorumluluk çatışmaz; doğru kurgulandığında birbirini güçlendirir."
							icon={<UsersThreeIcon size={32} weight="duotone" />}
						/>
						<ListItem
							title="Her iş fırsatı bizim için doğru fırsat değildir. Neye &quot;evet diyeceğimiz kadar neye &quot;hayır&quot; diyeceğimizi de biliriz. Etik değerler rotamızı, müşteri portföyümüzü ve çalışma biçimimizi belirler."
							icon={<CircleHalfTiltIcon size={32} weight="duotone" />}
						/>
						<ListItem
							title="İletişimin merkezinde insan var. Ekibimiz için, müşterilerimiz için, hedef kitleler için hep insanı önce düşünüyoruz. Çünkü biliyoruz ki kalıcı etki, ancak insana dokunan iletişimle mümkündür."
							icon={<PersonSimpleIcon size={32} weight="duotone" />}
						/>
					</div>
				</section>
			</section>
			<SectionTitle
				className="px-4 md:px-16! w-full"
				title="Uluslararası İş Birliklerimiz"
			/>
			<div className="flex flex-col md:flex-row items-center justify-center w-full p-12 md:p-16 gap-12">
				<div className="flex flex-col items-center justify-center gap-4">
					<p className="text-2xl md:text-3xl font-semibold text-(--brand-primary) ">
						Kriz İletişimi
					</p>
					<img src={NavigateResponseImage} alt="Navigate Response" />
					<a
						href="https://navigateresponse.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-2xl font-semibold">Navigate Response </p>
					</a>
					<p className="text-lg">
						Uluslararası nakliye, liman ve offshore alanlarında uzmanlaşmış
						Londra merkezli küresel kriz iletişim ağı Navigate Response'un
						Türkiye'deki tek ve resmi çözüm ortağıyız.{" "}
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-4">
					<p className="text-2xl md:text-3xl font-semibold text-(--brand-primary) text-center md:text-start">
						Sanat ve Lüks Marka İletişimi
					</p>
					<img src={BoltonQuinnImage} alt="Navigate Response" />
					<a
						href="https://boltonquinn.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-2xl font-semibold">BOLTON&QUINN </p>
					</a>
					<p className="text-lg">
						Türkiye ve bölge ülkelerinde hayata geçirilen uluslararası nitelikli
						kültür-sanat etkinliklerinin iletişim çalışmaları için Londra
						merkezli Bolton&Quinn ile stratejik ortağız.
					</p>
				</div>
			</div>
			<SectionTitle
				className="px-4 md:px-16! w-full"
				title="Uluslararası Hak Temelli İş Birliklerimiz"
			/>
			<div className="flex flex-col md:flex-row items-center justify-center w-full p-12 md:p-16 gap-4 md:gap-12">
				<div className="flex flex-col items-center justify-center gap-4">
					<p className="text-2xl md:text-3xl font-semibold text-(--brand-primary) ">
						Çevre Hakları
					</p>
					<img src={CCBadge} alt="Navigate Response" />
					<a
						href="https://cleancreatives.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-2xl font-semibold">Clean Creatives </p>
					</a>
					<p className="text-lg">
						Fosil yakıt şirketleri, ilgili meslek kuruluşu ve ticaret odaları
						veya fosil yakıt endüstrisiyle ilişkili paravan gruplar için
						çalışmayacağımıza dair Clean Creatives taahhüdü imzacısıyız.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-4">
					<p className="text-2xl md:text-3xl font-semibold text-(--brand-primary) ">
						Kadın Hakları
					</p>
					<img src={WEPsImage} alt="Navigate Response" />
					<a
						href="https://eca.unwomen.org/en/digital-library/publications/2017/01/weps-implementation-guide"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-2xl font-semibold text-center md:text-start">
							Women&apos;s Empowerment Principles (WEPs)
						</p>
					</a>
					<p className="text-lg">
						Şeffaf ve etik iletişim anlayışıyla toplumda fayda yaratmak,
						toplumsal cinsiyet eşitliğini desteklemek ve kadınların iş yaşamında
						güçlenmesini sağlamak üzere WEPs imzacısıyız.
					</p>
				</div>
			</div>
		</main>
	);
}
