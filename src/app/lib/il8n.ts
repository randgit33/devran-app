// This file will store all your website's text in English and Indonesian.

// --- 1. DEFINE TYPES FOR TRANSLATABLE DATA ---

export interface NavLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface NavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: NavLink[];
}

export interface CareerEntry {
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  tags: string[];
  liveUrl: string;
  imageUrl: string;
}

// --- 2. THE TRANSLATIONS OBJECT ---

export const translations = {
  // --- ENGLISH ---
  en: {
    // Original CardNav items
    navItems: [
      {
        label: "About",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
          { label: "My Story", href: "#about", ariaLabel: "Navigate to About section" },
          { label: "Experience", href: "#career", ariaLabel: "Navigate to Career section" }
        ]
      },
      {
        label: "Projects",
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
          { label: "Featured Work", href: "#projects", ariaLabel: "Navigate to Projects section" },
        ]
      },
      {
        label: "Contact",
        bgColor: "#271E37",
        textColor: "#fff",
        links: [
          { label: "Get in Touch", href: "#contact", ariaLabel: "Navigate to Contact section" },
        ]
      }
    ] as NavItem[],

    hero: {
      greeting: "Hi, I'm",
      designation: "Full-Stack Developer",
      bio: "I create beautiful, functional, and user-centric web applications. My passion lies in elegant problem-solving and pushing the boundaries of what's possible on the web.",
      button: "View My Work"
    },

    about: {
      title: "About Me",
      p1: "Hello, I'm currently a college student studying in Universitas Muslim Indonesia, Faculty of Computer Science and my major is Informatics Engineering",
      p2: "I'm a passionate Full-Stack Developer creating beautiful, functional, and user-centric web applications. My tech journey began with a fascination for how things work, evolving into a passion for coding and elegant problem-solving.",
      p3: "I thrive in collaborative environments, always eager to learn new technologies and push the boundaries of what's possible on the web.",
      skillsTitle: "Core Skills",
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Laravel', 'Firebase']
    },

    career: {
      title: "My Experience",
      subtitle: "My professional path and key experiences.",
      history: [
        {
          role: 'Full-Stack Developer',
          company: 'PT. Fortitude Genius Indonesia',
          duration: 'Present',
          description: [
            'Engineered and integrated a robust full-stack solution using Next.js, React, TypeScript, and Laravel.',
            'Developed and maintained scalable applications by leveraging Laravel for a RESTful API and Firebase for real-time data.',
            'Spearheaded the design and implementation of a high-performance web application using Next.js for SSR.',
          ],
          technologies: ['React', 'TypeScript', 'Laravel', 'NextJS', 'MySQL', 'Firestore', 'RESTful API']
        }
      ] as CareerEntry[]
    },

    projects: {
      title: "My Projects",
      subtitle: "A selection of my work. Hover over any project to see the details.",
      // --- THIS IS THE FIXED SECTION ---
      projectData: [
        {
          title: "PT. Fortitude Genius Indonesia Landing Page",
          tags: ["NextJS", "TypeScript", "React"],
          liveUrl: "https://fortitudegenius.com",
          imageUrl: "/assets/lpfgi.png"
        },
        {
          title: "Genius Fish Landing Page",
          tags: ["NextJS", "TypeScript", "React"],
          liveUrl: "https://fortitudegenius.com/gfish",
          imageUrl: "/assets/lpgfish.png"
        },
        {
          title: "Global Exposure Community Landing Page",
          tags: ["NextJS", "TypeScript", "React"],
          liveUrl: "https://fortitudegenius.com/global-xpo",
          imageUrl: "/assets/lpgxc.png"
        },
        {
          title: "GeniusLMS (Learning Management System",
          tags: ["Vite", "TypeScript", "React"],
          liveUrl: "https://fortitudegenius.com/geniusLMS",
          imageUrl: "/assets/lms.png"
        },
        {
          title: "Genius Fish Event Pre-registration",
          tags: ["Laravel", "Firebase", "Tailwind"],
          liveUrl: "#",
          imageUrl: "/assets/preregist.png"
        },
        {
          title: "Genius Fish Web Verificator",
          tags: ["NextJS", "Typescript", "React","Firebase"],
          liveUrl: "#",
          imageUrl: "/assets/webverif.png"
        }
      ] as Project[],
      viewProject: "View Project"
    },

    contact: {
      title: "Get In Touch",
      p1: "I'm currently open to new opportunities. If you have a project in mind or just want to connect, my inbox is always open.",
      button: "Say Hello",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email"
    },

    footer: {
      rights: "All Rights Reserved.",
      design: "Designed & Built with Passion",
      nav_about: "About",
      nav_projects: "Projects",
      nav_contact: "Contact"
    }
  },

  // --- INDONESIAN ---
  id: {
    navItems: [
      {
        label: "Tentang",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
          { label: "Kisah Saya", href: "#about", ariaLabel: "Navigasi ke bagian Tentang" },
          { label: "Pengalaman", href: "#career", ariaLabel: "Navigasi ke bagian Karir" }
        ]
      },
      {
        label: "Proyek",
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
          { label: "Karya Unggulan", href: "#projects", ariaLabel: "Navigasi ke bagian Proyek" },
        ]
      },
      {
        label: "Kontak",
        bgColor: "#271E37",
        textColor: "#fff",
        links: [
          { label: "Hubungi Saya", href: "#contact", ariaLabel: "Navigasi ke bagian Kontak" },
        ]
      }
    ] as NavItem[],

    hero: {
      greeting: "Halo, saya",
      designation: "Full-Stack Developer",
      bio: "Saya menciptakan aplikasi web yang indah, fungsional, dan berpusat pada pengguna. Minat saya terletak pada pemecahan masalah yang elegan dan mendorong batas-batas dari apa yang mungkin di web.",
      button: "Lihat Karya Saya"
    },

    about: {
      title: "Tentang Saya",
      p1: "Halo, saya seorang mahasiswa aktif di Universitas Muslim Indonesia, Fakultas Ilmu Komputer, jurusan Teknik Informatika.",
      p2: "Saya seorang Full-Stack Developer yang bersemangat dalam menciptakan aplikasi web yang indah, fungsional, dan berpusat pada pengguna. Perjalanan teknologi saya dimulai dengan ketertarikan pada cara kerja sesuatu, yang berkembang menjadi hasrat untuk coding dan pemecahan masalah yang elegan.",
      p3: "Saya berkembang dalam lingkungan kolaboratif, selalu bersemangat untuk mempelajari teknologi baru dan mendorong batas-batas dari apa yang mungkin di web.",
      skillsTitle: "Keterampilan Inti",
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Laravel', 'Firebase']
    },

    career: {
      title: "Pengalaman Saya",
      subtitle: "Jalur profesional dan pengalaman utama saya.",
      history: [
        {
          role: 'Full-Stack Developer',
          company: 'PT. Fortitude Genius Indonesia',
          duration: 'Saat ini',
          description: [
            'Merancang dan mengintegrasikan solusi full-stack yang tangguh menggunakan Next.js, React, TypeScript, dan Laravel.',
            'Mengembangkan dan memelihara aplikasi yang dapat diskalakan dengan memanfaatkan Laravel untuk RESTful API dan Firebase untuk data real-time.',
            'Memelopori desain dan implementasi aplikasi web berkinerja tinggi menggunakan Next.js for SSR.',
          ],
          technologies: ['React', 'TypeScript', 'Laravel', 'NextJS', 'MySQL', 'Firestore', 'RESTful API']
        }
      ] as CareerEntry[]
    },

    projects: {
      title: "Proyek Saya",
      subtitle: "Pilihan karya saya. Arahkan kursor ke proyek untuk melihat detailnya.",
      // --- THIS IS THE FIXED SECTION ---
      projectData: [
         {
          title: "Halaman Utama PT. Fortitude Genius Indonesia",
          tags: ["NextJS", "TypeScript", "React"],
          liveUrl: "https://fortitudegenius.com",
          imageUrl: "/assets/lpfgi.png"
        },
        {
          title: "Halaman Utama Genius Fish",
          tags: ["NextJS", "TypeScript", "React"],
          liveUrl: "https://fortitudegenius.com/gfish",
          imageUrl: "/assets/lpgfish.png"
        },
        {
          title: "Halaman Utama Global Exposure Community",
          tags: ["NextJS", "TypeScript", "React"],
          liveUrl: "https://fortitudegenius.com/global-xpo",
          imageUrl: "/assets/lpgxc.png"
        },
        {
          title: "GeniusLMS (Sistem Manajemen Pembelajaran)",
          tags: ["Vite", "TypeScript", "React"],
          liveUrl: "https://fortitudegenius.com/geniusLMS",
          imageUrl: "/assets/lms.png"
        },
        {
          title: "Pra-Registrasi Acara Genius Fish",
          tags: ["Laravel", "Firebase", "Tailwind"],
          liveUrl: "#",
          imageUrl: "/assets/preregist.png"
        },
        {
          title: "Verifikator Web Genius Fish",
          tags: ["NextJS", "Typescript", "React","Firebase"],
          liveUrl: "#",
          imageUrl: "/assets/webverif.png"
        }
      ] as Project[],
      viewProject: "Lihat Proyek"
    },

    contact: {
      title: "Hubungi Saya",
      p1: "Saya saat ini terbuka untuk peluang baru. Jika Anda memiliki proyek atau hanya ingin terhubung, kotak masuk saya selalu terbuka.",
      button: "Kirim Sapa",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email"
    },

    footer: {
      rights: "Hak Cipta Dilindungi.",
      design: "Dirancang & Dibangun oleh Randey",
      nav_about: "Tentang",
      nav_projects: "Proyek",
      nav_contact: "Kontak"
    }
  }
};

// Define the available languages
export type Language = 'en' | 'id';

// Define the shape of our translation object
export type Translation = typeof translations.en;