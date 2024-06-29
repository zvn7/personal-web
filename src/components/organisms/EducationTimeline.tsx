import { Book } from "lucide-react";
import TimelineItem from "../molecules/TimelineItem";

const EducationTimeline = () => (
	<div >
		<div className=" mx-auto">
			<h1 className="text-2xl font-bold flex items-center">
				<Book className="mr-2" /> Education
			</h1>
		</div>
		<div className="p-4">
			<div className="space-y-6 border-l-2 border-dashed border-gray-200">
				<TimelineItem
					title="University School Of The Arts"
					duration="2007 — 2008"
					description="Nemo enim ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
				/>
				<TimelineItem
					title="New York Academy Of Art"
					duration="2006 — 2007"
					description="Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis."
				/>
				<TimelineItem
					title="High School Of Art And Design"
					duration="2002 — 2004"
					description="Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos."
				/>
				<TimelineItem
					title="Lead Ui/Ux Designer"
					duration="2007"
					description="Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor."
				/>
			</div>
		</div>
	</div>
);

export default EducationTimeline;