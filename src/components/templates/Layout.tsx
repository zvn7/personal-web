import React from "react";
import Profile from "../molecules/Profile";
import Header from "../molecules/Header";
import Sidebar from "../molecules/Sidebar";
// import { Sidebar } from "lucide-react";

const Layout = ({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) => {
	return (
		<div className="flex min-h-screen bg-gray-800 text-white p-8">
			<div className="bg-gray-900 rounded-lg w-full pb-4">
				<Header title={title} />
				<main className="p-4 container px-8">{children}</main>
			</div>
		</div>
	);
};

export default Layout;
