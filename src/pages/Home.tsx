import Layout from "@/components/templates/Layout";
import TypedText from "@/components/atoms/typed";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Brush, CodeXml, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { blogPosts } from "@/lib/data";
import { SparklesCore } from "@/components/ui/sparkles";
import { useEffect, useState } from "react";
import { SkeletonLatestArticles } from "@/components/molecules/SkeletonLatestArticles";
import { Link } from "react-router-dom";

const truncateText = (text: string, wordLimit: number) => {
	const words = text.split(" ");
	if (words.length > wordLimit) {
		return words.slice(0, wordLimit).join(" ") + "...";
	}
	return text;
};

const Home = () => {
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
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
					<div className="space-y-6">

						<p className="text-justify">
							Passionate about frontend technologies and UI/UX design, I strive
							to create engaging web applications that marry functionality with
							aesthetic appeal. With a solid foundation in TypeScript, I am
							committed to continuous learning and collaborative teamwork,
							aiming to deliver efficient, user-friendly digital experiences.
						</p>
						<Link
							to="https://drive.google.com/file/d/1D4QTTRMtf8BJTe_jzQPLIdApvGtRAn1U/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant="secondary" className="mt-4">
								<File className="mr-2 h-4 w-4" />
								My Resume
							</Button>
						</Link>
					</div>
					<div className="h-[10rem] w-full bg-gray-900 flex flex-col items-center justify-center overflow-hidden rounded-md">
						<p className="md:text-sm text-sm lg:text-sm font-bold text-center text-white relative z-20">
							Web Developer || UI/UX Designer
						</p>
						<div className="w-[40rem] h-40 relative">
							{/* Gradients */}
							<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
							<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
							<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
							<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

							{/* Core component */}
							<SparklesCore
								background="transparent"
								minSize={0.4}
								maxSize={1}
								particleDensity={1200}
								className="w-full h-full"
								particleColor="#FFFFFF"
							/>

							{/* Radial Gradient to prevent sharp edges */}
							<div className="absolute inset-0 w-full h-full bg-gray-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
						</div>
					</div>
					{/* <div className="flex items-center justify-center">
						<Avatar className="h-56 w-56">
							<AvatarImage src="https://github.com/shadcn.png" />
						</Avatar>
					</div> */}
				</div>

				<div className="py-4 mt-4">
					<h2 className="text-2xl font-bold">Latest Articles</h2>
					<p className="mt-2 text-gray-600">Latest articles from my blog</p>
					<ScrollArea className="overflow-x-auto py-4">
						<div className="flex space-x-4">
							{isLoading
								? [1, 2, 3, 4, 5].map((_, index) => (
										<SkeletonLatestArticles key={index} />
								  ))
								: blogPosts.map((post, index) => (
										<div
											className="min-w-[300px] w-full group/card"
											key={index}
										>
											<a
												href={post.link}
												target="_blank"
												rel="noopener noreferrer"
											>
												<div
													className={cn(
														"cursor-pointer overflow-hidden relative card h-44 rounded-md shadow-xl mx-auto flex flex-col justify-between p-4"
													)}
													style={{
														backgroundImage: `url(${post.image})`,
														backgroundSize: "cover",
														backgroundPosition: "center",
													}}
												>
													<div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
													<div>{}</div>
													<div className=" ">
														<p className="font-bold text-sm md:text-sm text-justify text-gray-50 relative z-10">
															{truncateText(post.title, 6)}
														</p>
														<p className=" text-white font-normal text-sm">
															{post.date}
														</p>
													</div>
												</div>
											</a>
										</div>
								  ))}
						</div>

						<ScrollBar orientation="horizontal" />
					</ScrollArea>
				</div>

				<div className="py-4">
					<div className="text-center">
						<h2 className="text-2xl font-bold">Services</h2>
						<p className="mt-2 text-gray-600">
							I can deliver the following services
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-12">
						{/* <div className="bg-white p-4 rounded-lg shadow-md">
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
						</div> */}
						<div className="border border-white/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem]">
							<Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
							<Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
							<Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
							<Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

							<EvervaultCard
								text={<CodeXml className="w-12 h-12 text-gray-950" />}
							/>

							<div className="dark:text-white text-white mt-4 text-center">
								<h2 className="text-xl font-bold">Web Development</h2>
								<p className=" text-sm font-light text-gray-400">
									Create stunning, user-friendly fullstack web applications
									using modern technologies.
								</p>
							</div>
						</div>
						<div className="border border-white/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem]">
							<Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
							<Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
							<Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
							<Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

							<EvervaultCard
								text={<Brush className="w-12 h-12 text-gray-950" />}
							/>

							<div className="dark:text-white text-white mt-4 text-center">
								<h2 className="text-xl font-bold">Design UI/UX</h2>
								<p className=" text-sm font-light text-gray-400">
									Design beautiful user interfaces and user experiences using
									Figma.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="mt-8">
					<h2 className="text-2xl font-bold mb-4">Testimonials</h2>
					<ScrollArea className="w-full">
						<div className="flex w-max space-x-4 p-4">
							{testimonials.map((testimonial, index) => (
								<div
									key={index}
									className="bg-gray-700 p-4 rounded-lg w-80 shrink-0"
								>
									<p className="text-lg font-semibold">{testimonial.name}</p>
									<p className="mt-2">{testimonial.feedback}</p>
								</div>
							))}
						</div>
						<ScrollBar orientation="horizontal" />
					</ScrollArea>
				</div> */}

				{/* <div className="mt-8">
					<h2 className="text-2xl font-bold mb-4">Clients</h2>
					<ScrollArea className="w-full">
						<div className="flex w-max space-x-4 p-4">
							{clients.map((client, index) => (
								<div
									key={index}
									className="bg-gray-700 p-4 rounded-lg w-80 shrink-0 flex items-center justify-center"
								>
									<img src={client.logo} alt={client.name} className="h-16" />
									<p>{client.name}</p>
								</div>
							))}
						</div>
						<ScrollBar orientation="horizontal" />
					</ScrollArea>
				</div> */}
			</div>
		</Layout>
	);
};

export default Home;
