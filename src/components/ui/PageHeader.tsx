interface PageHeaderProps {
	title: string;
	description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
	return (
		<section className="flex flex-col items-center justify-center font-sans bg-(--brand-primary) text-white text-lg md:text-2xl text-center p-8 md:p-12 ">
			<h1 className="text-lg md:text-4xl font-bold md:mb-4">{title}</h1>
			<p className="text-lg md:text-xl">{description}</p>
		</section>
	);
}
