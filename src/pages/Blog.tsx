import React from "react";
import Layout from "@/components/templates/Layout";
import { Card } from "@/components/ui/card";

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

const Blog = () => {
	return (
		<Layout title="Blog">
			<div >
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
					{blogPosts.map((post, index) => (
						<Card key={index} className="bg-gray-700 p-4 rounded-lg">
							<img
								src={post.image}
								alt={post.title}
								className="mb-4 rounded-lg"
							/>
							<div className="text-sm text-gray-400 mb-2">{post.category}</div>
							<div className="text-xs text-gray-500 mb-2">{post.date}</div>
							<h2 className="text-xl font-bold mb-2">{post.title}</h2>
							<p className="text-gray-400">{post.content}</p>
						</Card>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Blog;
