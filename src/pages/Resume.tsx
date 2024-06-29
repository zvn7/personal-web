import Layout from "@/components/templates/Layout";
import EducationTimeline from "@/components/organisms/EducationTimeline";
import ExperienceTimeline from "@/components/organisms/ExperienceTimeline";

const Resume = () => {
	return (
		<Layout title="Resume">
			<div className="container mx-auto p-4 space-y-4">
				<ExperienceTimeline />
				<EducationTimeline />
			</div>
		</Layout>
	);
};

export default Resume;
