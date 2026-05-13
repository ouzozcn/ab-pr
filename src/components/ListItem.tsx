interface ListItemProps {
	title?: string;
	description?: string;
	icon?: React.ReactNode;
}

export default function ListItem({ title, description, icon }: ListItemProps) {
	return (
		<div className="List__Item__Body flex flex-col md:flex-row gap-4 md:gap-6 items-start  justify-start font-sans  p-4 md:p-12 rounded-xl hover:bg-red-50/30">
			<div className="List__Item__Icon flex rounded-full min-h-16 min-w-16 items-center justify-center bg-white border border-red-300 text-red-500">
				{icon}
			</div>
			<div className="List__Item__Content">
				<p className="text-md md:text-lg">{title}</p>
				<p className="text-lg md:text-xl font-semibold">{description}</p>
			</div>
		</div>
	);
}
