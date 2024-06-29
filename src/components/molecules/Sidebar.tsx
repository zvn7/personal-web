import {
	Home,
	User,
	Edit,
	Folder,
	Map,
	ClipboardList,
	MessageCircle,
	Phone,
	BarChart2,
} from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";

const Sidebar = () => {
	return (
		<div className="sidebar bg-white text-gray-900 h-full p-4 w-64 shadow-lg">
			<div className="flex flex-col items-center p-4 border-b border-gray-200">
				<div className="relative">
					<Avatar className="w-24 h-24">
						<AvatarFallback>IM</AvatarFallback>
					</Avatar>
				</div>
				<div className="mt-4 text-center">
					<h2 className="text-xl font-bold">Bayu Setiawan</h2>
					<p className="text-gray-600">@codebayu</p>
				</div>
			</div>
			<ul className="mt-4 space-y-2">
				<li>
					<a
						href="#"
						className="flex items-center p-2 rounded hover:bg-gray-200"
					>
						<Home className="icon" />
						<span className="ml-3">Home</span>
					</a>
				</li>
				<li>
					<a
						href="#"
						className="flex items-center p-2 rounded hover:bg-gray-200"
					>
						<User className="icon" />
						<span className="ml-3">About</span>
					</a>
				</li>
				<li>
					<a
						href="#"
						className="flex items-center p-2 rounded hover:bg-gray-200"
					>
						<Edit className="icon" />
						<span className="ml-3">Blog</span>
					</a>
				</li>
				<li>
					<a
						href="#"
						className="flex items-center p-2 rounded hover:bg-gray-200"
					>
						<Folder className="icon" />
						<span className="ml-3">Projects</span>
					</a>
				</li>
				<li>
					<a
						href="#"
						className="flex items-center p-2 rounded hover:bg-gray-200"
					>
						<Map className="icon" />
						<span className="ml-3">Roadmap</span>
					</a>
				</li>
				<li>
					<a
						href="#"
						className="flex items-center p-2 rounded hover:bg-gray-200"
					>
						<ClipboardList className="icon" />
						<span className="ml-3">Task Board</span>
					</a>
				</li>
				<li>
					<a
						href="#"
						className="flex items-center p-2 rounded hover:bg-gray-200"
					>
						<MessageCircle className="icon" />
						<span className="ml-3">Chat Room</span>
					</a>
				</li>
				<li>
					<a
						href="#"
						className="flex items-center p-2 rounded hover:bg-gray-200"
					>
						<Phone className="icon" />
						<span className="ml-3">Contact</span>
					</a>
				</li>
				<li>
					<a
						href="#"
						className="flex items-center p-2 rounded hover:bg-gray-200"
					>
						<BarChart2 className="icon" />
						<span className="ml-3">Dashboard</span>
					</a>
				</li>
			</ul>
			<div className="mt-auto p-4 border-t border-gray-200">
				<p className="text-gray-600">&copy; 2024 with ❤️ by codebayu</p>
			</div>
		</div>
	);
};

export default Sidebar;
