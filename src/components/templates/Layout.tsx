import React from "react";
import Header from "../molecules/Header";
import { BorderBeam } from "../ui/border-beam";
import ShineBorder from "../ui/shine-border";
import Particles from "../ui/particles";
import Footer from "../molecules/Footer";

const Layout = ({
	children,
	title,
}: {
	children: React.ReactNode;
	title: React.ReactNode;
}) => {
	return (
		<div className="relative flex flex-col min-h-screen bg-gray-800 text-white">
			<Particles
				className="absolute inset-0"
				quantity={500}
				ease={80}
				refresh
			/>
			<div className="flex-grow flex items-center justify-center w-[80] py-20">
				<ShineBorder
					borderWidth={2}
					color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
					className="bg-gray-900 rounded-lg text-white max-w-6xl  mx-4"
				>
					<div className="">
						<Header title={title} />
						<main className=" container mx-auto  pb-10">{children}</main>
					</div>
				</ShineBorder>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
