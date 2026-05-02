import {
	AnchorSimpleIcon,
	CircleHalfTiltIcon,
	FlowerIcon,
	LineVerticalIcon,
	PersonSimpleIcon,
	UsersThreeIcon,
} from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import SectionTitle from "#/components/ui/SectionTitle";
import HistoryofAB from "../components/HistoryofAB";
import ListItem from "../components/ListItem";
import PlaceholderImage from "../img/brand/image_placeholder_lg.png";
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
				description="51 yıldır markalara güvenilir, cesur ve sürdürülebilir iletişim çözümleri sunuyoruz."
			/>
			{/* Contact Information */}
			<section className="flex flex-col items-center justify-center w-full ">
				{/* Secondary Motto Section */}
				<section className="flex flex-col items-center justify-center font-sans text-(--brand-text-primary) text-lg md:text-2xl text-center p-12 md:p-24 ">
					<p>
						1974'te kimsenin tam olarak ne iş yaptığımızı bilmediği bir dönemde
						kurduk bu şirketi. Bugün 51 yıl sonra, mesleğin kuramsal temellerine
						katkıda bulunmuş, onlarca sektörde yüzlerce projeye imza atmış ve
						değerlerinden hiç taviz vermemiş bir kurumuz.
					</p>
				</section>
				{/* Landing Section Start */}

				<div className="flex flex-col md:flex-row items-center justify-center w-full p-12 md:p-24 gap-4 md:gap-12">
					<div className="flex flex-col items-center justify-center w-full md:w-1/2 text-(--brand-text-primary) text-md md:text-lg gap-2 md:gap-4">
						<p>
							1974 yılında Prof. Dr. Alaeddin Asna tarafından kurulan A&B
							İletişim, Türkiye'nin ilk halkla ilişkiler şirketidir.
							Cağaloğlu'ndaki mütevazı bir han odasından başlayan yolculuğumuz,
							kısa sürede iş dünyasının güvenini kazandı; şirket büyüdü,
							Teşvikiye'ye taşındı ve köklü bir iletişim kurumuna dönüştü.
						</p>
						<p>
							1995'te Sibel Asna'nın liderliğinde yeniden yapılanan A&B, "Toplam
							İletişim Danışmanlığı" anlayışını geliştirerek iletişim yönetimini
							stratejik bir boyuta taşıdı. 2004'te çalışanlara hisse dağıtılarak
							A&B İletişim A.Ş. yapısına geçildi; şirket, sahiplenilen bir kurum
							kimliğiyle yoluna devam etti.
						</p>
						<p>
							Yarım asrı aşan bu yolculukta yalnızca Türkiye'nin ilk PR şirketi
							olmadık. Mesleğin pek çok alanında öncü olduk: halkla ilişkiler
							akademik literatüre girdi, iş ortaklarımızla 30 yılı bulan uzun
							soluklu iş birlikleri kurduk, uluslararası ödüller kazandık.
							2023'te ise Clean Creatives taahhüdünü imzalayan ilk Türk iletişim
							ajansı olduk.
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
				{/* History of A&B */}
				<div className="flex flex-col items-center justify-center w-full text-center  ">
					<p className="text-4xl font-classic">51 Yıl, Bir Pusula</p>
				</div>
				<HistoryofAB />
				{/* Page Header */}
				<SectionTitle
					className="px-4 md:px-16! w-full"
					title="Ajans Kültürü ve Değerler"
					description="51 Yıldır Aynı Pusulayı Takip Ediyoruz"
				/>
				{/* Contact Information */}
				<section className="flex flex-col items-center justify-center  w-full p-12 md:p-16">
					<div className="List__Item__Container grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-8 items-start">
						<ListItem
							title="İletişimde en güçlü araç, gerçeğin kendisidir. Müşterilerimizle, medyayla ve kamuoyuyla kurduğumuz her ilişkide şeffaflık ilk adımımızdır. Söylemediğimizi söylemiyoruz; söylediğimizin arkında duruyoruz."
							icon={<AnchorSimpleIcon size={32} />}
						/>
						<ListItem
							title="Zor soruları sormaktan, doğruyu savunmaktan, gerektiğinde kârlı bir işe &quot;hayır&quot; demekten hiç vazgeçmedik. Cesaret, 51 yıldır en yakın yol arkadaşımız."
							icon={<LineVerticalIcon size={32} />}
						/>
						<ListItem
							title="Bugünü değil, yarını da düşünerek çalışıyoruz. İletişim, geleceğe bırakılan bir izdir. Bu yüzden her projede kalıcı etki yaratmayı, kısa vadeli kazanımlar yerine uzun vadeli değer üretmeyi tercih ediyoruz."
							icon={<FlowerIcon size={32} />}
						/>

						<ListItem
							title="Markalara değer katarken topluma fayda üretmeyi vazgeçilmez kabul ediyoruz. Ticari hedeflerle toplumsal sorumluluk çatışmaz; doğru kurgulandığında birbirini güçlendirir."
							icon={<UsersThreeIcon size={32} />}
						/>
						<ListItem
							title="Her iş fırsatı bizim için doğru fırsat değildir. Neye &quot;evet diyeceğimiz kadar neye &quot;hayır&quot; diyeceğimizi de biliriz. Etik değerler rotamızı, müşteri portföyümüzü ve çalışma biçimimizi belirler."
							icon={<CircleHalfTiltIcon size={32} />}
						/>
						<ListItem
							title="İletişimin merkezinde insan var. Ekibimiz için, müşterilerimiz için, hedef kitleler için — hep insanı önce düşünüyoruz. Çünkü biliyoruz ki kalıcı etki, ancak insana dokunan iletişimle mümkündür."
							icon={<PersonSimpleIcon size={32} />}
						/>
					</div>
				</section>
			</section>
		</main>
	);
}
