interface SectionTitleProps {
	title: string;
	description: string;
}

export default function SectionTitle({
	title,
	description,
}: SectionTitleProps) {
	return (
		<div className="flex flex-col items-center md:items-start justify-center bg-(--brand-primary)  font-sans text-white text-lg md:text-2xl text-center md:text-start p-4 md:px-24 py-12 gap-4 md:gap-6 ">
			<h2 className="text-lg md:text-6xl font-bold">{title}</h2>
			<p className="text-md md:text-lg ">{description}</p>
		</div>
	);
}
