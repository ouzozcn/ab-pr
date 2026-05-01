import { Link } from "@tanstack/react-router";
import logo from "../img/logo/ab_logo_md.svg";

export default function Header() {
	return (
		<header className="sticky top-0 w-full z-50  bg-white p-4 md:px-12">
			<nav className="flex flex-wrap items-center justify-between ">
				<h2 className="m-0 shrink-0 text-base font-semibold tracking-tight">
					<Link
						to="/"
						className="inline-flex items-center gap-2  px-3 py-1.5  sm:px-4 sm:py-2"
					>
						<img src={logo} alt="AB Logo" className="w-32 h-auto" />
					</Link>
				</h2>

				<div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-2 sm:w-auto sm:flex-nowrap sm:pb-0">
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
						Neler Yapıyoruz
					</Link>
					<Link
						to="/is-ortaklarimiz"
						className="nav-link"
						activeProps={{ className: "nav-link is-active" }}
					>
						İş Ortaklarımız
					</Link>
					<Link
						to="/blog/blog"
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
			</nav>
		</header>
	);
}
