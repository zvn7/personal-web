import React from "react";
import { Facebook, Github, Instagram, Mail, Twitter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const Profile = () => {
	return (
		<div className="bg-gray-900 text-white p-8 flex flex-col items-center space-y-4 rounded-lg w-full h-full sticky top-0">
			<Avatar className="w-24 h-24">
				<AvatarImage src="https://github.com/shadcn.png" />
				<AvatarFallback>IM</AvatarFallback>
			</Avatar>
			<div className="text-xl font-semibold">Ilham Maulana</div>
			<div>
				<Badge variant="outline" className="text-white">
					Web developer || UI/UX Designer
				</Badge>
			</div>
			<div className="w-full border-b border-gray-700 my-4"></div>
			<div className="flex flex-col space-y-4">
				<div className="flex items-center">
					<div className="bg-gray-500 p-2 rounded-md">
						<Mail className="w-6 h-6" />
					</div>
					<div>
						<p className="text-gray-400 ml-2">Email</p>
						<span className="ml-2">ilham.maulana@id.web.id</span>
					</div>
				</div>
				<div className="flex items-center">
					<Github className="w-6 h-6" />
					<span className="ml-2">ilham.maulana</span>
				</div>
				<div className="flex items-center">
					<Twitter className="w-6 h-6" />
					<span className="ml-2">ilham.maulana</span>
				</div>
				<div className="flex items-center">
					<Instagram className="w-6 h-6" />
					<span className="ml-2">ilham.maulana</span>
				</div>
			</div>
			<div className="flex space-x-4 mt-4">
				<a href="#" className="text-gray-500 hover:text-white">
					<Facebook className="w-6 h-6" />
				</a>
				<a href="#" className="text-gray-500 hover:text-white">
					<Twitter className="w-6 h-6" />
				</a>
				<a href="#" className="text-gray-500 hover:text-white">
					<Instagram className="w-6 h-6" />
				</a>
			</div>
		</div>
	);
};

export default Profile;
