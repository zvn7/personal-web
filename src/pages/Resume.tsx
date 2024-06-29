import Layout from "@/components/templates/Layout";
import EducationTimeline from "@/components/organisms/EducationTimeline";
import ExperienceTimeline from "@/components/organisms/ExperienceTimeline";

const Resume = () => {
	return (
		<Layout title="Resume">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
				<ExperienceTimeline />
				<EducationTimeline />
			</div>
		</Layout>
	);
};

export default Resume;
