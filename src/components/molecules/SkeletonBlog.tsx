import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonBlog = ({ count = 1 }: { count?: number }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
			{Array.from({ length: count }).map((_, index) => (
				<div className="space-y-4" key={index}>
					<Skeleton className="h-44 w-full rounded-xl" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-3/4" />
					</div>
				</div>
			))}
		</div>
	);
};
