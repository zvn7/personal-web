import ContactForm from "@/components/organisms/ContactForm";
import Layout from "@/components/templates/Layout";

const Contact = () => {
	return (
		<Layout title="Contact">
			<div className="container mx-auto p-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
					<div className="bg-gray-700 p-4 rounded-lg">
						<h2 className="text-xl font-bold mb-2">Get in touch</h2>
						<p className="text-gray-400">
							If you have any questions or comments, please don't hesitate to
							contact me. I'll do my best to get back to you as soon as
							possible.
						</p>
					</div>
					<div className="bg-gray-700 p-4 rounded-lg">
						<h2 className="text-xl font-bold mb-2">Contact Info</h2>
						<p className="text-gray-400">Email: 0K5Hg@example.com</p>
						<p className="text-gray-400">Phone: (123) 456-7890</p>
						<p className="text-gray-400">Address: 123 Main St, Anytown USA</p>
					</div>
				</div>

				<div className="mt-6">
					<div className="bg-gray-700 p-4 rounded-lg">
						<h2 className="text-2xl font-bold mb-4 text-center">Send Me a Message</h2>
						<ContactForm />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
