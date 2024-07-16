import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import StackIcon from "tech-stack-icons";
import { techStack } from "@/lib/data";

const firstRow = techStack.slice(0, techStack.length / 2);
const secondRow = techStack.slice(techStack.length / 2);

const TechStackCard = ({ icon, name }: { icon: string; name: string }) => {
	return (
		<figure
			className={cn(
				"flex items-center gap-2 p-2 px-6 m-2 cursor-pointer rounded-full border shadow-sm",
				// light styles
				"border-white bg-white hover:bg-gray-100",
				// dark styles
				"dark:border-white dark:bg-white dark:hover:bg-gray-100"
			)}
		>
			<StackIcon name={icon} className="w-6 h-6" />
			<figcaption className="text-sm font-medium text-black">{name}</figcaption>
		</figure>
	);
};

export function MarqueeTech() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			<Marquee pauseOnHover className="[--duration:20s]">
				{firstRow.map((tech) => (
					<TechStackCard key={tech.name} {...tech} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((tech) => (
					<TechStackCard key={tech.name} {...tech} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 from-white dark:from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 from-white dark:from-background"></div>
		</div>
	);
}
