import type { PersonalInfo, Experience, Project, Education } from './types.ts';

export const personalInfo: PersonalInfo = {
  name: "Wawan Irwansyah",
  title: "Guru Informatika",
  email: "wawan.irwansyah@email.com",
  phone: "081252975943",
  location: "Indonesia",
  github: "https://github.com/wawanirwansyah",
  linkedin: "https://linkedin.com/in/wawanirwansyah",
  summary: "Seorang Guru Informatika yang berdedikasi dengan pengalaman dalam mengajar dan mengembangkan kurikulum teknologi. Bersemangat dalam membimbing siswa untuk memahami dunia digital, pemrograman, dan keamanan siber. Terampil dalam menggunakan berbagai platform dan perangkat lunak pendidikan untuk menciptakan lingkungan belajar yang interaktif dan efektif.",
  avatar: "https://i.ibb.co/hJhDwBkq/mfi.png"
};

export const experiences: Experience[] = [
  {
    role: "Guru Informatika",
    company: "SMA Negeri 1 Cemerlang",
    period: "Jul 2018 - Sekarang",
    description: [
      "Mengajar mata pelajaran Informatika untuk kelas X-XII dengan Kurikulum Merdeka.",
      "Mengembangkan materi ajar interaktif dan modul praktikum berbasis proyek.",
      "Membimbing siswa dalam persiapan Olimpiade Sains Nasional (OSN) bidang Komputer.",
      "Bertindak sebagai administrator untuk laboratorium komputer dan jaringan sekolah."
    ]
  },
  {
    role: "Asisten Laboratorium",
    company: "Universitas Pendidikan Nasional",
    period: "Agu 2016 - Mei 2018",
    description: [
      "Membantu dosen dalam mempersiapkan dan melaksanakan sesi praktikum.",
      "Memberikan bimbingan kepada mahasiswa dalam pengerjaan tugas pemrograman.",
      "Bertanggung jawab atas pemeliharaan perangkat keras dan lunak di laboratorium."
    ]
  }
];

export const skills: string[] = [
  "Struktur Data & Algoritma", "Java", "Python", "Dasar Jaringan", "HTML & CSS", "JavaScript", "SQL & Database", 
  "Microsoft Office Suite", "Google Workspace for Education", "Manajemen Kelas", "Pengembangan Kurikulum", "Scratch", "Canva", "Figma"
];

export const projects: Project[] = [
  {
    title: "Sistem Informasi Perpustakaan Sekolah",
    description: "Membangun aplikasi desktop sederhana untuk manajemen peminjaman dan pengembalian buku di perpustakaan sekolah.",
    tags: ["Java", "Swing GUI", "MySQL"],
    repoUrl: "https://github.com/wawanirwansyah/sistem-perpus",
  },
  {
    title: "Website Profil Sekolah",
    description: "Merancang dan mengembangkan website statis sebagai profil sekolah menggunakan HTML, CSS, dan JavaScript untuk tugas siswa.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    repoUrl: "https://github.com/wawanirwansyah/web-sekolah",
  }
];

export const education: Education[] = [
    {
        degree: "S.Pd. Pendidikan Teknik Informatika",
        institution: "Universitas Pendidikan Nasional",
        period: "2014 - 2018"
    }
];