interface SectionTitleProps {
	title: string;
	description: string;
}

export default function SectionTitle({
	title,
	description,
}: SectionTitleProps) {
	return (
		<div className="flex flex-col items-center justify-center bg-white  font-sans text-(--brand-primary) text-lg md:text-2xl text-center p-4 md:p-12 ">
			<h2 className="text-lg md:text-3xl font-bold md:mb-4">{title}</h2>
			<p className="text-md md:text-lg  text-(--brand-text-secondary)">
				{description}
			</p>
		</div>
	);
}
