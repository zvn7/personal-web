import ContactForm from "@/components/organisms/ContactForm";
import Layout from "@/components/templates/Layout";
import { Button } from "@/components/ui/button";
import {
	ArrowUpRight,
	Github,
	Instagram,
	Linkedin,
	Twitter,
} from "lucide-react";

const Contact = () => {
	return (
		<Layout title="Contact">
			<div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
					<div className="">
						<h2 className="text-xl font-bold mb-2">Get in touch</h2>
						<p className="text-gray-400">
							If you have any questions or comments, please don't hesitate to
							contact me. I'll do my best to get back to you as soon as
							possible.
						</p>
					</div>
				</div>

				<div className="space-y-4">
					<p className="text-2xl font-bold mt-6">Find me on</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
						{/* GitHub */}
						<a
							href="https://github.com/zvn7"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="bg-slate-300 p-6 rounded-lg w-full h-40 shadow-md flex items-center justify-between">
								<div>
									<h3 className="text-xl font-bold text-black">
										Discover My Code
									</h3>
									<p className="text-sm text-black">
										Dive into the source code of my projects and see what I'm
										building on GitHub.
									</p>
									<Button className="mt-4 bg-black">
										Go to GitHub <ArrowUpRight className="ml-2" />
									</Button>
								</div>
								<div className="text-4xl bg-black rounded-full p-4">
									<Github className="w-12 h-12 text-white" />{" "}
								</div>
							</div>
						</a>

						{/* LinkedIn */}
						<a
							href="https://www.linkedin.com/in/ilham-maul"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="bg-blue-200 p-6 w-full h-40 rounded-lg shadow-md flex items-center justify-between">
								<div>
									<h3 className="text-xl font-bold text-blue-600">
										Connect Professionally
									</h3>
									<p className="text-sm text-blue-600">
										Join my network on LinkedIn to collaborate and explore my
										professional journey.
									</p>
									<Button className="mt-4 bg-blue-600 hover:bg-blue-500">
										Go to LinkedIn <ArrowUpRight className="ml-2" />
									</Button>
								</div>
								<div className="text-4xl bg-blue-600 rounded-full p-4">
									<Linkedin className="w-12 h-12 text-white" />{" "}
								</div>
							</div>
						</a>

						{/* Twitter */}
						<a
							href="https://twitter.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="bg-blue-300 p-6 w-full h-40 rounded-lg shadow-md flex items-center justify-between">
								<div>
									<h3 className="text-xl font-bold text-blue-700">
										Follow Me on Twitter
									</h3>
									<p className="text-sm text-blue-700">
										Stay updated with my latest projects and thoughts by
										following me on Twitter.
									</p>
									<Button className="mt-4 bg-blue-700 hover:bg-blue-600">
										Go to Twitter <ArrowUpRight className="ml-2" />
									</Button>
								</div>
								<div className="text-4xl bg-blue-700 rounded-full p-4">
									<Twitter className="w-12 h-12 text-white" />{" "}
								</div>
							</div>
						</a>

						{/* Instagram */}
						<a
							href="https://www.instagram.com/ilhammaul7"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="bg-pink-200 p-6 w-full h-40 rounded-lg shadow-md flex items-center justify-between">
								<div>
									<h3 className="text-xl font-bold text-pink-600">
										Follow My Journey
									</h3>
									<p className="text-sm text-pink-600">
										Follow me on Instagram for behind-the-scenes looks and
										updates on my latest projects.
									</p>
									<Button className="mt-4 bg-pink-600 hover:bg-pink-500">
										Go to Instagram <ArrowUpRight className="ml-2" />
									</Button>
								</div>
								<div className="text-4xl bg-pink-600 rounded-full p-4">
									<Instagram className="w-12 h-12 text-white" />{" "}
								</div>
							</div>
						</a>
					</div>
				</div>

				<div className="mt-6">
					<div className="bg-gray-700 p-4 rounded-lg">
						<h2 className="text-2xl font-bold mb-4 text-center">
							Send Me a Message
						</h2>
						<ContactForm />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
