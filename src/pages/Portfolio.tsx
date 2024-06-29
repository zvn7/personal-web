import React from "react";
import Layout from "@/components/templates/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const portfolioItems = [
	{
		category: "Web Design",
		image: "/path/to/web-design1.png",
		title: "Web Design Project 1",
		description: "Description of Web Design Project 1",
	},
	{
		category: "Web Development",
		image: "/path/to/web-development1.png",
		title: "Web Development Project 1",
		description: "Description of Web Development Project 1",
	},
	{
		category: "Application",
		image: "/path/to/application1.png",
		title: "Application Project 1",
		description: "Description of Application Project 1",
	},
	{
		category: "Web Design",
		image: "/path/to/web-design1.png",
		title: "Web Design Project 1",
		description: "Description of Web Design Project 1",
	},
	{
		category: "Web Development",
		image: "/path/to/web-development1.png",
		title: "Web Development Project 1",
		description: "Description of Web Development Project 1",
	},
	{
		category: "Application",
		image: "/path/to/application1.png",
		title: "Application Project 1",
		description: "Description of Application Project 1",
	},
	{
		category: "Web Design",
		image: "/path/to/web-design1.png",
		title: "Web Design Project 1",
		description: "Description of Web Design Project 1",
	},
	{
		category: "Web Development",
		image: "/path/to/web-development1.png",
		title: "Web Development Project 1",
		description: "Description of Web Development Project 1",
	},
	{
		category: "Application",
		image: "/path/to/application1.png",
		title: "Application Project 1",
		description: "Description of Application Project 1",
	},
	{
		category: "Web Design",
		image: "/path/to/web-design1.png",
		title: "Web Design Project 1",
		description: "Description of Web Design Project 1",
	},
	{
		category: "Web Development",
		image: "/path/to/web-development1.png",
		title: "Web Development Project 1",
		description: "Description of Web Development Project 1",
	},
	{
		category: "Application",
		image: "/path/to/application1.png",
		title: "Application Project 1",
		description: "Description of Application Project 1",
	},
	{
		category: "Web Design",
		image: "/path/to/web-design1.png",
		title: "Web Design Project 1",
		description: "Description of Web Design Project 1",
	},
	{
		category: "Web Development",
		image: "/path/to/web-development1.png",
		title: "Web Development Project 1",
		description: "Description of Web Development Project 1",
	},
	{
		category: "Application",
		image: "/path/to/application1.png",
		title: "Application Project 1",
		description: "Description of Application Project 1",
	},
	// Add more portfolio items here
];

const tabData = [
	{ value: "all", label: "All" },
	{ value: "Web Design", label: "Web Design" },
	{ value: "Web Development", label: "Web Development" },
	{ value: "Application", label: "Application" },
];

const Portfolio = () => {
	return (
		<Layout title="Portfolio">
			<div className="">
				<Tabs defaultValue="all" className="w-full justify-items-start">
					<TabsList className="flex space-x-4 bg-gray-800">
						{tabData.map((tab) => (
							<TabsTrigger
								key={tab.value}
								value={tab.value}
								className="text-gray-400 hover:text-gray-700 focus:outline-none"
							>
								{tab.label}
							</TabsTrigger>
						))}
					</TabsList>

					<TabsContent value="all">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{portfolioItems.map((item, index) => (
								<Card key={index} className="bg-gray-700 p-4 rounded-lg">
									<img
										src={item.image}
										alt={item.title}
										className="mb-4 rounded"
									/>
									<CardHeader>
										<CardTitle className="text-xl font-bold mb-2">
											{item.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-gray-400">{item.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</TabsContent>

					{tabData.map((tab) => (
						<TabsContent key={tab.value} value={tab.value}>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
								{portfolioItems
									.filter((item) => item.category === tab.value)
									.map((item, index) => (
										<Card key={index} className="bg-gray-700 p-4 rounded-lg">
											<img
												src={item.image}
												alt={item.title}
												className="mb-4 rounded"
											/>
											<CardHeader>
												<CardTitle className="text-xl font-bold mb-2">
													{item.title}
												</CardTitle>
											</CardHeader>
											<CardContent>
												<p className="text-gray-400">{item.description}</p>
											</CardContent>
										</Card>
									))}
							</div>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</Layout>
	);
};

export default Portfolio;
