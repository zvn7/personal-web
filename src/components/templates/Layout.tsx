import React from "react";
import Profile from "../molecules/Profile";
import Header from "../molecules/Header";
// import Sidebar from "../molecules/Sidebar";

const Layout = ({
	children,
	title,
}: {
	children: React.ReactNode;
	title: React.ReactNode;
}) => {
	return (
		<div className="flex min-h-screen bg-gray-800 text-white p-8">
			<div className="flex w-full mx-auto p-6">
				<div className="w-1/4 bg-gray-800 p-4">
					<div className="sticky top-6 space-y-6">
						<Profile />
					</div>
				</div>
				<div className="w-3/4 p-4">
					<main className="bg-gray-900 rounded-lg">
						<Header title={title} />
						<div className="p-4">{children}</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default Layout;
