import React, { useEffect, useState } from "react";
import Layout from "@/components/templates/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { portfolioItems } from "@/lib/data";
import { SkeletonCard } from "@/components/molecules/SkeletonCard";

const tabData = [
	{ value: "all", label: "All" },
	{ value: "Web Design", label: "Web Design" },
	{ value: "Web Development", label: "Web Development" },
	{ value: "Application", label: "Application" },
];

const Portfolio = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate data fetching
		const fetchData = () => {
			setTimeout(() => {
				setIsLoading(false);
			}, 2000); // Simulate a 2 seconds loading time
		};
		fetchData();
	}, []);

	return (
		<Layout title="Projects">
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

					<TabsContent value="all" className="mt-6">
						<div className="">
							{isLoading ? (
								<SkeletonCard />
							) : (
								<HoverEffect items={portfolioItems} />
							)}
						</div>
					</TabsContent>

					{tabData.map((tab) => (
						<TabsContent key={tab.value} value={tab.value} className="mt-6">
							{isLoading ? (
								<SkeletonCard />
							) : (
								<HoverEffect
									items={portfolioItems.filter(
										(item) => item.category === tab.value
									)}
								/>
							)}
						</TabsContent>
					))}
				</Tabs>
			</div>
		</Layout>
	);
};

export default Portfolio;
