import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "../components/templates/Layout";
import { Brush, Code } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const testimonials = [
	{
		name: "John Doe",
		feedback: "This is an amazing service! Highly recommend.",
	},
	{
		name: "Jane Smith",
		feedback: "Very professional and great quality.",
	},
	{
		name: "Michael Johnson",
		feedback: "Exceeded my expectations in every way.",
	},
];

const clients = [
	{ name: "Client 1", logo: "/path/to/logo1.png" },
	{ name: "Client 2", logo: "/path/to/logo2.png" },
	{ name: "Client 3", logo: "/path/to/logo3.png" },
];

const About = () => {
	return (
		<Layout title="About Me">
			<div >
				<div>
					<p>
						I'm Creative Director and UI/UX Designer from Sydney, Australia,
						working in web development and print media. I enjoy turning complex
						problems into simple, beautiful and intuitive designs. My job is to
						build your website so that it is functional and user-friendly but at
						the same time attractive. Moreover, I add personal touch to your
						product and make sure that is eye-catching and easy to use. My aim
						is to bring across your message and identity in the most creative
						way. I created web design for many famous brand companies.
					</p>
				</div>
				<div className="mt-8">
					<h2 className="text-2xl font-bold mb-4">What I'm Doing</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<Card className="bg-gray-700">
							<CardHeader className="flex items-center space-x-4">
								<Brush className="w-6 h-6 text-gray-400" />
								<CardTitle>Web Design</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-center ">
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
								<p>
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
								<p>
									High-quality development of sites at the professional level.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Testimonials Section */}
				<div className="mt-8">
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
				</div>

				{/* Clients Section */}
				<div className="mt-8">
					<h2 className="text-2xl font-bold mb-4">Clients</h2>
					<ScrollArea className="w-full">
						<div className="flex w-max space-x-4 p-4">
							{clients.map((client, index) => (
								<div
									key={index}
									className="bg-gray-700 p-4 rounded-lg w-80 shrink-0 flex items-center justify-center"
								>
									<img src={client.logo} alt={client.name} className="h-16" />
								</div>
							))}
						</div>
						<ScrollBar orientation="horizontal" />
					</ScrollArea>
				</div>
			</div>
		</Layout>
	);
};

export default About;
