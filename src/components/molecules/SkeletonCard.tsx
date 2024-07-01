import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{Array.from({ length: 8 }).map((_, index) => (
				<div key={index} className="relative group block p-2 h-full w-[250px]">
					<div className="rounded-2xl h-full w-full overflow-hidden bg-black border border-white dark:border-white/[0.2] relative z-20">
						<div className="relative z-50">
							<Skeleton className="w-full h-44 object-cover" />
							<div className="p-4 space-y-4">
								<Skeleton className="h-6 w-3/4" />
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-5/6" />
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
