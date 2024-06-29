import React from "react";
import Layout from "@/components/templates/Layout";
import TypedText from "@/components/atoms/typed";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Computer, ComputerIcon, Smartphone } from "lucide-react";

const blogPosts = [
	{
		image: "/path/to/blog-image1.jpg",
		category: "Technology",
		date: "June 29, 2024",
		title: "Lorem Ipsum Dolor Sit Amet",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero id leo cursus, in tempor libero ultrices. Cras a purus et enim feugiat suscipit...",
	},
	{
		image: "/path/to/blog-image2.jpg",
		category: "Travel",
		date: "June 28, 2024",
		title: "Praesent Malesuada Feugiat Lacinia",
		content:
			"Praesent malesuada feugiat lacinia. Sed at sapien bibendum, tincidunt quam in, hendrerit lorem. Nulla facilisi...",
	},
	{
		image: "/path/to/blog-image1.jpg",
		category: "Technology",
		date: "June 29, 2024",
		title: "Lorem Ipsum Dolor Sit Amet",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero id leo cursus, in tempor libero ultrices. Cras a purus et enim feugiat suscipit...",
	},
	{
		image: "/path/to/blog-image2.jpg",
		category: "Travel",
		date: "June 28, 2024",
		title: "Praesent Malesuada Feugiat Lacinia",
		content:
			"Praesent malesuada feugiat lacinia. Sed at sapien bibendum, tincidunt quam in, hendrerit lorem. Nulla facilisi...",
	},
	{
		image: "/path/to/blog-image1.jpg",
		category: "Technology",
		date: "June 29, 2024",
		title: "Lorem Ipsum Dolor Sit Amet",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero id leo cursus, in tempor libero ultrices. Cras a purus et enim feugiat suscipit...",
	},
	{
		image: "/path/to/blog-image2.jpg",
		category: "Travel",
		date: "June 28, 2024",
		title: "Praesent Malesuada Feugiat Lacinia",
		content:
			"Praesent malesuada feugiat lacinia. Sed at sapien bibendum, tincidunt quam in, hendrerit lorem. Nulla facilisi...",
	},
];

const Home = () => {
	return (
		<Layout
			title={
				<TypedText
					strings={[
						"Welcome to my website!",
						"Hi, I'm Ilham Maulana",
						"I am a web developer.",
					]}
				/>
			}
		>
			<div>
				<section className="">
					<p className="mt-2 text-gray-600">
						• Remote worker • Based in Jakarta
					</p>
					<p className="mt-4">
						Passionate and seasoned Software Engineer with a strong focus on
						frontend development. Proficient in TypeScript and well-versed in
						all aspects of web technologies. Collaborative team player dedicated
						to delivering efficient, scalable, and visually appealing web
						applications.
					</p>
				</section>

				<section className="py-4">
					<h2 className="text-2xl font-bold">Latest Articles</h2>
					<p className="mt-2 text-gray-600">Latest articles from dev.to</p>
					<ScrollArea className="overflow-x-auto py-4">
						<div className="flex space-x-4">
							{blogPosts.map((post, index) => (
								<Card
									key={index}
									className="min-w-[300px] bg-white p-4 rounded-lg shadow-md"
								>
									<img
										src={post.image}
										alt={post.title}
										className="rounded-t-lg w-full"
									/>
									<div className="text-sm text-gray-400 mb-2">
										{post.category}
									</div>
									<h2 className="mt-2 font-bold">{post.title}</h2>
									<p className="mt-1 text-gray-600">{post.date}</p>
								</Card>
							))}
						</div>
						<ScrollBar orientation="horizontal" />
					</ScrollArea>
				</section>

				<section className="py-4">
					<h2 className="text-2xl font-bold">Services</h2>
					<p className="mt-2 text-gray-600">
						I can deliver the following services
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
						{/* Service cards */}
						<div className="bg-white p-4 rounded-lg shadow-md">
							<div className="flex items-center space-x-2">
								<Computer className="w-8 h-8 text-gray-950" />
								<h3 className=" font-semibold text-gray-950">
									Website Development
								</h3>
							</div>
							<p className="mt-2 text-gray-600">#Coding</p>
							<p className="mt-4 text-gray-600">
								Create stunning, user-friendly fullstack web applications using
								modern technologies.
							</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow-md">
							<div className="flex items-center space-x-2">
								<Smartphone className="w-8 h-8 text-gray-950" />
								<h3 className=" font-semibold text-gray-950">
									Mobile Development
								</h3>
							</div>
							<p className="mt-2 text-gray-600">#Coding</p>
							<p className="mt-4 text-gray-600">
								Create smooth and cross-platform mobile applications using React
								Native.
							</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow-md">
							<div className="flex items-center space-x-2">
								<Computer className="w-8 h-8 text-gray-950" />
								<h3 className=" font-semibold text-gray-950">
									Website Development
								</h3>
							</div>
							<p className="mt-2 text-gray-600">#Coding</p>
							<p className="mt-4 text-gray-600">
								Create stunning, user-friendly fullstack web applications using
								modern technologies.
							</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow-md">
							<div className="flex items-center space-x-2">
								<Smartphone className="w-8 h-8 text-gray-950" />
								<h3 className=" font-semibold text-gray-950">
									Mobile Development
								</h3>
							</div>
							<p className="mt-2 text-gray-600">#Coding</p>
							<p className="mt-4 text-gray-600">
								Create smooth and cross-platform mobile applications using React
								Native.
							</p>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default Home;
