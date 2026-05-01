"use client";

import CustomerOne from "../../../img/customers/hrant-dink-vakfi.jpg";
import CustomerTwo from "../../../img/customers/togrenkli-seffafzemin.png";
import CustomerThree from "../../../img/customers/wb-aima-logo.jpg";
import CustomerFour from "../../../img/customers/wb-changeorg-logo.png";
import CustomerFive from "../../../img/customers/wb-cydd-logo-3.png";
import CustomerSix from "../../../img/customers/wb-good4trust-logo.jpg";

import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "./index";

export const MarqueeMaster = () => (
	<div className="flex size-full items-center justify-center bg-background">
		<Marquee>
			<MarqueeFade side="left" />
			<MarqueeFade side="right" />
			<MarqueeContent>
				<MarqueeItem className="h-32 w-32">
					<img
						alt={`Placeholder`}
						className="overflow-hidden rounded-full"
						src={CustomerOne}
					/>
				</MarqueeItem>
			</MarqueeContent>
		</Marquee>
	</div>
);

export default MarqueeMaster;
