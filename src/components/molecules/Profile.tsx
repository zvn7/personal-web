import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Profile = () => {
	return (
		<div className="bg-gray-900 text-white p-8 flex flex-col items-center space-y-4 rounded-lg w-full h-full sticky top-0">
			<Avatar className="w-24 h-24">
				<AvatarImage src="https://github.com/shadcn.png" />
				<AvatarFallback>IM</AvatarFallback>
			</Avatar>
			<div className="text-xl font-semibold">Ilham Maulana</div>
			<div className="text-sm text-gray-400">
				Web developer || UI/UX Designer
			</div>
			<div className="w-full border-b border-gray-700 my-4"></div>
			<div className="flex flex-col space-y-4">
				<p>Ilham</p>
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
