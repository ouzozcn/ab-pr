import { createFileRoute } from "@tanstack/react-router";
import BlogCard from "#/components/BlogCard";
import SectionTitle from "#/components/ui/SectionTitle";
import BlogImage from "../img/brand/image_placeholder_lg.png";
export const Route = createFileRoute("/blog")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex flex-col">
			{/* Page Header */}
			<SectionTitle
				className="px-4 md:px-16!"
				title="Blog"
				description="İletişim sektöründeki en güncel gelişmeleri takip edin."
			/>
			{/* Secondary Motto Section 
			<section className="flex flex-col items-center justify-center font-sans text-(--brand-text-primary) text-lg md:text-3xl font-semibold text-center p-4 md:px-16 md:pt-12 md:pb-0 md:mb-12">
				<p>İletişim sektöründeki en güncel gelişmeleri takip edin.</p>
			</section>
			*/}
			<div className="Blog__Cards grid grid-cols-1 md:grid-cols-2 w-full items-center justify-center p-4 md:p-16 gap-4 md:gap-12 ">
				<BlogCard
					title="Sosyal Medyanın Halkla İlişkilerdeki Rolü Sosyal Medyanın Halkla İlişkilerdeki Rolü"
					description="Sosyal medya, halkla ilişkilerdeki birçok alanda rol oynar. Bu yazıda, sosyal medyanın halkla ilişkilerdeki rolünü inceleyeceğiz."
					image={BlogImage}
					className="col-span-1"
				/>
				<BlogCard
					title="Sosyal Medyanın Halkla İlişkilerdeki Rolü"
					description="Sosyal medya, halkla ilişkilerdeki birçok alanda rol oynar. Bu yazıda, sosyal medyanın halkla ilişkilerdeki rolünü inceleyeceğiz."
					image={BlogImage}
					className="h-full"
				/>
			</div>
		</main>
	);
}
