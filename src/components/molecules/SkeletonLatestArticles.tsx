import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonLatestArticles() {
	return (
		<div className="min-w-[300px] w-full group/card">
			<div className="cursor-pointer overflow-hidden relative card h-44 rounded-md shadow-xl mx-auto flex flex-col justify-between p-4">
				<Skeleton className="absolute w-full h-full top-0 left-0" />
				<div>{}</div>
				<div className="relative z-10 space-y-2">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-1/2" />
				</div>
			</div>
		</div>
	);
}
