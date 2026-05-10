import {
	FacebookLogoIcon,
	InstagramLogoIcon,
	LinkedinLogoIcon,
	XLogoIcon,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import logo from "../img/logo/ab_logo_md.svg";
import SocialLink from "./SocialLink";
export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-20 border-t border-(--line) bg-white p-4 md:px-12">
			<div className=" flex flex-col items-center justify-between gap-4 md:flex-row">
				<Link
					to="/"
					className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2"
				>
					<img src={logo} alt="AB Logo" className="h-auto w-32" />
				</Link>
				<div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm font-semibold md:w-auto md:justify-end">
					<Link
						to="/"
						className="nav-link"
						activeProps={{ className: "nav-link is-active" }}
					>
						Anasayfa
					</Link>
					<Link
						to="/hikayemiz"
						className="nav-link"
						activeProps={{ className: "nav-link is-active" }}
					>
						Hikayemiz
					</Link>
					<Link
						to="/neler-yapiyoruz"
						className="nav-link"
						activeProps={{ className: "nav-link is-active" }}
					>
						Neler Yapıyoruz?
					</Link>
					<Link
						to="/is-ortaklarimiz"
						className="nav-link"
						activeProps={{ className: "nav-link is-active" }}
					>
						İş Ortaklarımız
					</Link>
					<Link
						to="/blog"
						className="nav-link"
						activeProps={{ className: "nav-link is-active" }}
					>
						Blog
					</Link>
					<Link
						to="/iletisim"
						className="nav-link"
						activeProps={{ className: "nav-link is-active" }}
					>
						İletişim
					</Link>
				</div>
			</div>
			<div className="Social__Media__Links flex flex-col md:flex-row items-center justify-end w-full h-auto p-4 gap-4 md:gap-12">
				<SocialLink
					href={"https://www.instagram.com/avebiletisim/"}
					icon={<InstagramLogoIcon size={24} weight="fill" />}
				/>
				<SocialLink
					href={"https://www.facebook.com/avebiletisim"}
					icon={<FacebookLogoIcon size={24} weight="fill" />}
				/>
				<SocialLink
					href={"https://x.com/avebiletisim"}
					icon={<XLogoIcon size={24} weight="fill" />}
				/>
				<SocialLink
					href={"https://www.linkedin.com/company/1260750"}
					icon={<LinkedinLogoIcon size={24} weight="fill" />}
				/>
			</div>
			<div className="flex flex-col items-center justify-center gap-4 md:flex-row">
				<p className="mt-4 items-center text-center text-sm text-(--brand-anthracite) md:text-left">
					&copy; {year} A&B Danışmanlık. Tüm hakları saklıdır.
				</p>
			</div>
		</footer>
	);
}
