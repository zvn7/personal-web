import Layout from "../components/templates/Layout";
import { Github, Linkedin, Twitter } from "lucide-react";
import ExperienceTimeline from "@/components/organisms/ExperienceTimeline";
import EducationTimeline from "@/components/organisms/EducationTimeline";

const About = () => {
	return (
		<Layout title="About Me">
			<div className="flex flex-col items-center text-center space-y-4">
				<div className="flex flex-col md:flex-row items-start md:items-center ">
					<div className="w-full md:w3/4 text-justify">
						<h1 className="text-2xl font-bold">
							Hello, I'm <span className="text-blue-500">Ilham Maulana</span>, a
							Web Developer and UI/UX Designer.
						</h1>
						<p className="mt-4 text-md">
							Technology has been my passion for as long as I can remember. From
							tinkering with gadgets to diving into coding, my journey has been
							driven by a relentless curiosity. Today, I channel that passion
							into creating elegant websites and user-friendly applications.
						</p>
						<p className="mt-4 text-md">
							When I'm not immersed in lines of code, you can find me exploring
							the latest in web design trends or enjoying my favorite hobbies:
							discovering new music and perfecting my latte art skills.
						</p>
						<p className="mt-4 text-md">
							Let me walk you through what I've been working on recently:
						</p>
					</div>

					<div className="w-full md:w-1/4 flex flex-col items-center">
						<img
							src="https://plchldr.co/i/150x150"
							alt="About Image"
							className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover mb-4 md:mb-0"
						/>
						<div className="flex space-x-4 mt-4">
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Twitter className="text-2xl text-gray-400 hover:text-blue-500" />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className="text-2xl text-gray-400 hover:text-blue-500" />
							</a>
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className="text-2xl text-gray-400 hover:text-blue-500" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
					<ExperienceTimeline />
					<EducationTimeline />
				</div>
			</div>

			{/* <div className="mt-8">
				<h2 className="text-2xl font-bold mb-4">What I'm Doing</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<Card className="bg-gray-700">
						<CardHeader className="flex items-center space-x-4">
							<Brush className="w-6 h-6 text-gray-400" />
							<CardTitle>Web Design</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-center">
								The most modern and high-quality design made at a professional
								level.
							</p>
						</CardContent>
					</Card>
					<Card className="bg-gray-700">
						<CardHeader className="flex items-center space-x-4">
							<Code className="w-6 h-6 text-gray-400" />
							<CardTitle>Web Development</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-center">
								High-quality development of sites at the professional level.
							</p>
						</CardContent>
					</Card>
					<Card className="bg-gray-700">
						<CardHeader className="flex items-center space-x-4">
							<Code className="w-6 h-6 text-gray-400" />
							<CardTitle>Web Development</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-center">
								High-quality development of sites at the professional level.
							</p>
						</CardContent>
					</Card>
				</div>
			</div> */}
		</Layout>
	);
};

export default About;
