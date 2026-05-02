import BlurText from "../BlurText";
import TextType from "../TextType";

interface SectionTitleProps {
	title: string;
	description?: string;
	className?: string;
}

export default function SectionTitle({
	title,
	description,
	className,
}: SectionTitleProps) {
	return (
		<div
			className={`flex flex-col items-center md:items-start justify-center bg-(--brand-primary) lg:min-h-[208px] font-sans text-white text-lg md:text-2xl text-center md:text-start p-4 md:px-24 py-12 gap-4 md:gap-6 ${className}`}
		>
			<TextType
				loop={false}
				startOnVisible={true}
				typingSpeed={100}
				text={title || ""}
				className="text-lg md:text-6xl font-bold"
			/>
			<BlurText
				direction="bottom"
				delay={100}
				text={description || ""}
				className="text-md md:text-lg"
			/>
		</div>
	);
}
