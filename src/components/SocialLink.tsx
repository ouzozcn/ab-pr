import { Link } from "@tanstack/react-router";

interface SocialLinkProps {
	href: string;
	icon: React.ReactNode;
	label?: string;
}

export const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
	return (
		<Link
			to={href}
			target="_blank"
			rel="noopener noreferrer"
			className="flex flex-col gap-4 md:gap-2  items-center justify-center gap-2"
		>
			{icon}
			{label && <span className="text-sm md:text-base">{label}</span>}
		</Link>
	);
};

export default SocialLink;
