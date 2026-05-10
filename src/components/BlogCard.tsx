import { ArrowRightIcon } from "@phosphor-icons/react";
import Button from "../components/Button";

interface BlogCardProps {
	title: string;
	description: string;
	image?: string;
	readMoreHref?: string;
	className?: string;
}

export default function BlogCard({
	title,
	description,
	image,
	readMoreHref,
	className,
}: BlogCardProps) {
	return (
		<div
			className={`Blog__Card flex flex-col bg-white  hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl p-4 md:p-8 gap-4 border border-stone-200 ${className}`}
		>
			<div className="Blog__Card__Image">
				{image ? (
					<img
						src={image}
						alt={title}
						className="w-full h-full object-cover rounded-xl"
					/>
				) : (
					<div className="w-full h-full bg-stone-200 rounded-xl" />
				)}
			</div>
			<div className="Blog__Card__Content flex flex-col gap-4">
				<div className="Blog__Card__Title text-2xl md:text-3xl font-semibold">
					{title}
				</div>
				<div className="Blog__Card__Description text-lg md:text-xl ">
					{description}
				</div>
			</div>
			<div className="Blog__Card__Actions mt-auto">
				<Button
					label="Daha Fazla Oku"
					type="primary"
					size="large"
					rounded
					to={readMoreHref}
					endIcon={<ArrowRightIcon size={24} />}
				/>
			</div>
		</div>
	);
}
