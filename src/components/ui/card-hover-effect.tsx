import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({
	items,
	className,
}: {
	items: {
		category: string;
		title: string;
		description: string;
		link: string;
		image: string;
		technologies?: string[];
	}[];
	className?: string;
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ",
				className
			)}
		>
			{items.map((item, idx) => (
				<Link
					to={item?.link}
					key={item?.link}
					className="relative group block p-2 h-full w-full"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 h-full w-full bg-slate-400 bg-opacity-40 dark:bg-slate-800/[0.8] block rounded-3xl"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>
					<Card image={item.image} technologies={item.technologies || []}>
						<CardTitle>{item.title}</CardTitle>
						<CardDescription>{item.description}</CardDescription>
					</Card>
				</Link>
			))}
		</div>
	);
};

export const Card = ({
	className,
	children,
	image,
	technologies,
}: {
	className?: string;
	children: React.ReactNode;
	image: string;
	technologies: string[];
}) => {
	return (
		<div
			className={cn(
				"rounded-2xl h-full w-full overflow-hidden bg-black border border-white dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
				className
			)}
		>
			<div className="relative z-50">
				{image && (
					<img
						src={image}
						alt=""
						className="w-full h-40 object-cover"
					/>
				)}
				<div className="p-4">
					{children}
					{/* <div className="mt-4">
						<h5 className="text-zinc-100 font-semibold">Technologies:</h5>
						<ul className="list-disc list-inside text-zinc-400">
							{technologies.map((tech, index) => (
								<li key={index}>{tech}</li>
							))}
						</ul>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export const CardTitle = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>
			{children}
		</h4>
	);
};

export const CardDescription = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<p
			className={cn(
				"mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
				className
			)}
		>
			{children}
		</p>
	);
};
