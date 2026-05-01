"use client";

import CustomerFour from "../../../img/customers/change_org_hori.svg";
import CustomerOne from "../../../img/customers/hrant_hori.png";
import CustomerTwo from "../../../img/customers/tog-logo-horizontal.svg";
import CustomerThree from "../../../img/customers/wb-aima-logo.jpg";
import CustomerFive from "../../../img/customers/wb-cydd-logo-3.png";
import CustomerSix from "../../../img/customers/wb-good4trust-logo.jpg";

import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "./index";

export const MarqueeMaster = () => (
	<div className="flex size-full items-center justify-center bg-background">
		<Marquee>
			<MarqueeFade side="left" />
			<MarqueeFade side="right" />
			<MarqueeContent className="gap-4 md:gap-12">
				<MarqueeItem className="">
					<img
						alt={`Hrant Dink Vakfı`}
						className="overflow-hidden "
						src={CustomerOne}
					/>
				</MarqueeItem>
				<MarqueeItem className="">
					<img
						alt={`Tog Vakfı`}
						className="overflow-hidden "
						src={CustomerTwo}
					/>
				</MarqueeItem>
				<MarqueeItem className=" ">
					<img alt={`aima`} className="overflow-hidden " src={CustomerThree} />
				</MarqueeItem>
				<MarqueeItem className=" ">
					<img
						alt={`change.org`}
						className="overflow-hidden "
						src={CustomerFour}
					/>
				</MarqueeItem>
				<MarqueeItem className="">
					<img
						alt={`Çağdaş Yaşamı Destekleme Derneği`}
						className="overflow-hidden "
						src={CustomerFive}
					/>
				</MarqueeItem>
				<MarqueeItem className="">
					<img
						alt={`Good 4 Trust`}
						className="overflow-hidden "
						src={CustomerSix}
					/>
				</MarqueeItem>
			</MarqueeContent>
		</Marquee>
	</div>
);

export default MarqueeMaster;
