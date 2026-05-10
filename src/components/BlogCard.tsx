import Button from "../components/Button";

interface BlogCardProps {
	title: string;
	description: string;
	image: string;
	className?: string;
}

export default function BlogCard({
	title,
	description,
	image,
	className,
}: BlogCardProps) {
	return (
		<div
			className={`Blog__Card flex flex-col bg-white  hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl p-4 md:p-8 gap-4 border border-stone-200 ${className}`}
		>
			<div className="Blog__Card__Image">
				<img src={image} alt={title} className="w-full h-full object-cover" />
			</div>
			<div className="Blog__Card__Content flex flex-col gap-4">
				<div className="Blog__Card__Title text-2xl md:text-3xl font-semibold">
					{title}
				</div>
				<div className="Blog__Card__Description text-lg md:text-xl ">
					{description}
				</div>
			</div>
			<div className="Blog__Card__Actions">
				<Button label="Read more" type="primary" size="large" rounded />
			</div>
		</div>
	);
}
