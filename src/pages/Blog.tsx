import Layout from "@/components/templates/Layout";
import { blogPosts } from "@/lib/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const truncateText = (text: string, wordLimit: number) => {
	const words = text.split(" ");
	if (words.length > wordLimit) {
		return words.slice(0, wordLimit).join(" ") + "...";
	}
	return text;
};

const Blog = () => {
	const postVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0 },
	};

	const containerVariants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	return (
		<Layout title="Blog">
			<motion.div
				className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				{blogPosts.map((post, index) => (
					<motion.div
						className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100"
						key={index}
						variants={postVariants}
						transition={{
							duration: 0.6,
							ease: [0.42, 0, 0.58, 1],
						}}
						whileHover={{ scale: 1.03 }}
					>
						<div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
							<img
								src={post.image}
								alt="thumbnail"
								className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 h-36"
							/>
						</div>
						<div className="p-4">
							<h2 className="font-bold text-lg text-zinc-700">
								{truncateText(post.title, 4)}
							</h2>
							<h2 className="font-normal text-sm text-zinc-500">
								{truncateText(post.content, 10)}
							</h2>
							<div className="flex flex-row justify-between items-center mt-2">
								<span className="text-sm text-gray-500">{post.date}</span>
								<Link to={post.link} target="_blank">
									<span className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs cursor-pointer">
										Read More
									</span>
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</Layout>
	);
};

export default Blog;
