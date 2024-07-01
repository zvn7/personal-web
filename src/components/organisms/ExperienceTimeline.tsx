import { BriefcaseBusiness } from "lucide-react";
import TimelineItem from "../molecules/TimelineItem";

const ExperienceTimeline = () => (
	<div>
		<div className="mx-auto">
			<h1 className="text-2xl font-bold flex items-center">
				<BriefcaseBusiness className="mr-2" /> Experience
			</h1>
		</div>
		<div className="p-4">
			<div className="space-y-6 border-l-2 border-dashed border-gray-200">
				<TimelineItem
					title="Web Developer Internship"
					duration="Februari 2024 - Mei 2024"
					description="PT United Tractors Tbk "
				/>
				<TimelineItem
					title="Web Developer Internship"
					duration="Januari 2022 - April 2022"
					description="Dinkominfo Kabupaten Temanggung"
				/>
			</div>
		</div>
	</div>
);

export default ExperienceTimeline;
