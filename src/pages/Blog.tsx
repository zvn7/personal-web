import Layout from "@/components/templates/Layout";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { blogPosts } from "@/lib/data";
import { motion } from "framer-motion";

const truncateText = (text : string, wordLimit : number) => {
	const words = text.split(" ");
	if (words.length > wordLimit) {
		return words.slice(0, wordLimit).join(" ") + "...";
	}
	return text;
};

const Blog = () => {
	return (
		<Layout title="Blog">
			<BentoGrid className=" mx-auto md:auto-rows-[20rem]">
				{blogPosts.map((post, index) => (
					<BentoGridItem
						key={post.id}
						title={truncateText(post.title, 5)}
						description={truncateText(post.content, 6)}
						header={
							<motion.div
								initial="initial"
								whileHover="animate"
								className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-gray-200 hover:shadow-xl border border-zinc-100"
							>
								<a href={post.link} target="_blank" rel="noopener noreferrer">
									<div className="w-full h-full  aspect-w-16 aspect-h-10 bg-gray-200 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
										<img
											src={post.image}
											alt={post.title}
											className="group-hover:scale-95 group-hover:rounded-2xl h-full transform object-cover transition duration-200"
										/>
									</div>
								</a>
							</motion.div>
						}
						icon={<span className="text-sm text-white">{post.date}</span>}
						className={
							index === 3
								? "md:col-span-2"
								: index === 4
								? "md:col-span-1"
								: "md:col-span-1"
						}
					/>
				))}
			</BentoGrid>
		</Layout>
	);
};

export default Blog;
