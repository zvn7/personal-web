import { Book } from "lucide-react";
import TimelineItem from "../molecules/TimelineItem";

const EducationTimeline = () => (
	<div>
		<div className=" mx-auto">
			<h1 className="text-2xl font-bold flex items-center">
				<Book className="mr-2" /> Education
			</h1>
		</div>
		<div className="p-4">
			<div className="space-y-6 border-l-2 border-dashed border-gray-200">
				<TimelineItem
					title="SMK Negeri 7 Kendal"
					duration="Juli 2020 - Mei 2023"
					description="Meraih prestasi sebagai Juara 2 dalam Lomba Kompetensi Siswa (LKS) kategori Web Design di tingkat SMK Se-kabupaten Kendal pada bulan Maret 2023, menunjukkan kemampuan dan kreativitas dalam merancang web yang inovatif."
				/>
				<TimelineItem
					title="UT School (Fullstack IT Programmr)"
					duration="November 2023 - Juni 2024"
					description="ASP. Net: Menguasai pengembangan API yang efisien untuk mendukung interaksi atau perantara antar aplikasi. Firebase: Implementasi layanan Firebase untuk penyimpanan data dan manajemen pesan di aplikasi berbasis cloud. Git Versioning: Keahlian dalam manajemen kode yang efisien, terutama dalam proyek kolaboratif. Node JS, React JS, dan React Native: Penguasaan dalam pengembangan aplikasi web dan mobile dengan antarmuka pengguna responsif dan intuitif. PHP (Framework Laravel 9): Kemampuan membangun aplikasi web yang terstruktur dengan mengintegrasikan fitur-fitur yang dimiliki Laravel. Odoo ERP: Menguasai implementasi dan pengembangan sistem Odoo ERP, termasuk instalasi WSL Ubuntu, pgAdmin/PostgreSQL, inisialisasi proyek, pembuatan model, relasi tabel, kustomisasi tema dan ikon, serta pembuatan view dan wizard, serta pengaturan keamanan dan pelaporan."
				/>
			</div>
		</div>
	</div>
);

export default EducationTimeline;
