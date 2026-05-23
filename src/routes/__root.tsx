import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { createRootHead } from "../lib/seo";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => {
		const siteHead = createRootHead();
		return {
			...siteHead,
			links: [
				...siteHead.links,
				{
					rel: "stylesheet",
					href: appCss,
				},
			],
		};
	},
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="tr" suppressHydrationWarning>
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
