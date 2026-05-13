import { ListIcon, XIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import logo from "../img/logo/ab_logo_md.svg";

const NAV_LINKS = [
	{ to: "/", label: "Anasayfa" },
	{ to: "/hikayemiz", label: "Hikayemiz" },
	{ to: "/neler-yapiyoruz", label: "Neler Yapıyoruz?" },
	{ to: "/is-ortaklarimiz", label: "İş Ortaklarımız" },
	{ to: "/blog", label: "Blog" },
	{ to: "/iletisim", label: "İletişim" },
] as const;

const MOBILE_NAV_LINK_CLASS =
	"nav-link  py-4 text-center text-lg font-semibold last:border-b-0 sm:py-5 sm:text-xl";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuPanelId = useId();

	useEffect(() => {
		if (!menuOpen) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [menuOpen]);

	useEffect(() => {
		if (!menuOpen) return;
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") setMenuOpen(false);
		}
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [menuOpen]);

	useEffect(() => {
		const media = window.matchMedia("(min-width: 1024px)");
		function onChange() {
			if (media.matches) setMenuOpen(false);
		}
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	}, []);

	function closeMenu() {
		setMenuOpen(false);
	}

	const mobileOverlay =
		menuOpen &&
		typeof document !== "undefined" &&
		createPortal(
			<div
				id={menuPanelId}
				role="dialog"
				aria-modal="true"
				aria-label="Site menüsü"
				className="fixed inset-0 z-100 flex min-h-dvh w-full flex-col bg-white lg:hidden"
			>
				<div className="flex shrink-0 items-center justify-between border-b border-(--line) p-4 md:px-12">
					<Link
						to="/"
						onClick={closeMenu}
						className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2"
					>
						<img src={logo} alt="AB Logo" className="h-auto w-32" />
					</Link>
					<button
						type="button"
						onClick={closeMenu}
						className="inline-flex h-11 w-11 items-center justify-center rounded-md text-(--brand-text-primary) transition-colors hover:bg-black/5 hover:text-(--brand-primary)"
						aria-label="Menüyü kapat"
					>
						<XIcon className="h-7 w-7" weight="bold" aria-hidden />
					</button>
				</div>
				<nav
					className="flex flex-1 flex-col items-stretch justify-start gap-1 px-6 py-10 sm:px-10"
					aria-label="Ana navigasyon"
				>
					{NAV_LINKS.map(({ to, label }) => (
						<Link
							key={to}
							to={to}
							onClick={closeMenu}
							className={MOBILE_NAV_LINK_CLASS}
							activeProps={{
								className: `${MOBILE_NAV_LINK_CLASS} is-active`,
							}}
						>
							{label}
						</Link>
					))}
				</nav>
			</div>,
			document.body,
		);

	return (
		<header className="sticky top-0 z-50 w-full bg-white p-4 shadow-md md:px-12">
			<nav
				className="flex items-center justify-between gap-4"
				aria-label="Üst çubuk"
			>
				<h2 className="m-0 shrink-0 text-base font-semibold tracking-tight">
					<Link
						to="/"
						className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2"
					>
						<img src={logo} alt="AB Logo" className="h-auto w-32" />
					</Link>
				</h2>

				<div className="hidden flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold lg:flex lg:flex-nowrap">
					{NAV_LINKS.map(({ to, label }) => (
						<Link
							key={to}
							to={to}
							className="nav-link"
							activeProps={{ className: "nav-link is-active" }}
						>
							{label}
						</Link>
					))}
				</div>

				<button
					type="button"
					className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-(--brand-text-primary) transition-colors hover:bg-black/5 hover:text-(--brand-primary) lg:hidden"
					onClick={() => setMenuOpen(true)}
					aria-expanded={menuOpen}
					aria-controls={menuOpen ? menuPanelId : undefined}
					aria-label="Menüyü aç"
				>
					<ListIcon className="h-7 w-7" weight="bold" aria-hidden />
				</button>
			</nav>
			{mobileOverlay}
		</header>
	);
}
