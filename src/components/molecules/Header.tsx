import { Separator } from "../ui/separator";

const menuItems = [
	{ title: "Home", href: "/" },
	{ title: "About", href: "/about" },
	{ title: "Resume", href: "/resume" },
	{ title: "Portfolio", href: "/portfolio" },
	{ title: "Blog", href: "/blog" },
	{ title: "Contact", href: "/contact" },
];

const Header = ({ title }: { title: React.ReactNode }) => {
	return (
		<header className="relative py-4">
			<div className="bg-slate-600 rounded-sm p-6 absolute top-0 right-0 lg:w-max lg:rounded-tl-none lg:rounded-bl-3xl lg:py-6 lg:px-8 lg:shadow-none">
				<nav className="flex space-x-6">
					{menuItems.map((item) => (
						<a
							key={item.title}
							href={item.href}
							className="text-sm font-semibold hover:text-gray-400"
						>
							{item.title}
						</a>
					))}
				</nav>
			</div>
			<div className="container mx-auto py-4">
				<div className="flex justify-start">
					<h1 className="text-4xl font-bold ">{title}</h1>
				</div>
				<Separator className="mt-4 w-16 h-2 rounded-md" />
			</div>
		</header>
	);
};

export default Header;
