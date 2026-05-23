const SITE_URL =
	(typeof import.meta.env.VITE_SITE_URL === "string" &&
		import.meta.env.VITE_SITE_URL) ||
	"https://www.ab-pr.com";

export const SITE_NAME = "A&B Danışmanlık";

export const DEFAULT_TITLE =
	"A&B Danışmanlık | Halkla İlişkiler ve İletişim Danışmanlığı";

export const DEFAULT_DESCRIPTION =
	"1974'ten bu yana Türkiye'nin öncü halkla ilişkiler ve iletişim danışmanlığı firması. Kurumsal iletişim, sürdürülebilirlik, kriz yönetimi ve dijital PR çözümleri sunuyoruz.";

const DEFAULT_KEYWORDS =
	"A&B Danışmanlık, halkla ilişkiler, iletişim danışmanlığı, kurumsal iletişim, sürdürülebilirlik iletişimi, kriz iletişimi, itibar yönetimi, PR ajansı, medya ilişkileri, İzmit, Kocaeli";

/** Default Open Graph image (absolute URL). Replace with a dedicated 1200×630 asset when available. */
const DEFAULT_OG_IMAGE = "/img/blog/visual_01.jpg";

export const SOCIAL_LINKS = {
	instagram: "https://www.instagram.com/avebiletisim/",
	facebook: "https://www.facebook.com/avebiletisim",
	twitter: "https://x.com/avebiletisim",
	linkedin: "https://www.linkedin.com/company/1260750",
} as const;

export function absoluteUrl(path = ""): string {
	const base = SITE_URL.replace(/\/$/, "");
	if (!path) return base;
	return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

interface SiteHeadOptions {
	title?: string;
	description?: string;
	path?: string;
	image?: string;
}

export function createRootHead(options: SiteHeadOptions = {}) {
	const title = options.title ?? DEFAULT_TITLE;
	const description = options.description ?? DEFAULT_DESCRIPTION;
	const canonical = absoluteUrl(options.path ?? "/");
	const ogImage = absoluteUrl(options.image ?? DEFAULT_OG_IMAGE);

	return {
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ title },
			{ name: "description", content: description },
			{ name: "keywords", content: DEFAULT_KEYWORDS },
			{ name: "author", content: SITE_NAME },
			{
				name: "robots",
				content:
					"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
			},
			{ name: "googlebot", content: "index, follow" },
			{ name: "theme-color", content: "#EC2E39" },
			{ property: "og:type", content: "website" },
			{ property: "og:site_name", content: SITE_NAME },
			{ property: "og:locale", content: "tr_TR" },
			{ property: "og:url", content: canonical },
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ property: "og:image", content: ogImage },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: title },
			{ name: "twitter:description", content: description },
			{ name: "twitter:image", content: ogImage },
		],
		links: [{ rel: "canonical", href: canonical }],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(createOrganizationSchema()),
			},
		],
	};
}

function createOrganizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: SITE_NAME,
		url: absoluteUrl(),
		logo: absoluteUrl("/img/blog/visual_01.jpg"),
		description: DEFAULT_DESCRIPTION,
		foundingDate: "1974",
		email: "abtanitim@ab-pr.com",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Akmeşe Cumhuriyet Mahallesi Kapaklı Yolu Sokak No:24",
			addressLocality: "İzmit",
			addressRegion: "Kocaeli",
			addressCountry: "TR",
		},
		sameAs: Object.values(SOCIAL_LINKS),
	};
}
