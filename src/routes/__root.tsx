import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import Footer from "../components/Footer";
import Header from "../components/Header";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "A&B Danışmanlık | 52 Yıldır iletişimi dönüştürüyoruz",
				description: "A&B Danışmanlık | 52 Yıldır iletişimi dönüştürüyoruz.",
				keywords: "A&B Danışmanlık, iletişim, dönüştürüyoruz, 52 Yıldır",
				author: "A&B Danışmanlık",
				robots: "index, follow",
				googlebot: "index, follow",
				google: "index, follow",
				yahoo: "index, follow",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/** biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
				{/* <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} /> */}
				<HeadContent />
			</head>
			<body className="font-sans antialiased wrap-anywhere">
				<Header />
				{children}
				<Footer />
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
