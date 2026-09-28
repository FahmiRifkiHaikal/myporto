'use client'

import React from 'react'
import {
  Mail,
  Code2,
  BrainCircuit,
  LayoutDashboard,
  Sparkles,
  ArrowUpRight,
  FolderGit2,
  GraduationCap,
  Briefcase,
  Network
} from 'lucide-react'

// --- SVGs Komponen untuk Ikon Social ---
const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    className={className}
    fill='currentColor'
    viewBox='0 0 24 24'
    aria-hidden='true'
  >
    <path
      fillRule='evenodd'
      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
      clipRule='evenodd'
    />
  </svg>
)

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    className={className}
    fill='currentColor'
    viewBox='0 0 24 24'
    aria-hidden='true'
  >
    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
  </svg>
)

const PROFILE = {
  name: 'Fahmi Rifki Haikal',
  title: 'Full-Stack Developer & AI Enthusiast',
  subtitle: 'Membangun Arsitektur Web Modern dan Solusi Machine Learning',
  bio: 'Lulusan Sarjana Teknik Informatika dari ITN Malang berfokus pada pengembangan platform web scalable, sistem dashboard analitik, dan integrasi Computer Vision.',
  about:
    'Saya memiliki pengalaman teknis dalam mengembangkan aplikasi web berbasis Laravel dan Next.js, merancang arsitektur database, serta menerapkan pengawasan berbasis AI. Terbiasa mengelola sistem jaringan komputer serta berpengalaman dalam digitalisasi layanan publik.',
  status: 'Terbuka untuk Freelance & Full-Time',
  email: 'fahmirifki412@gmail.com',
  skills: [
    'Laravel / PHP',
    'Next.js / React',
    'Vue.js / Inertia.js',
    'Tailwind CSS',
    'Python / CNN',
    'REST API',
    'MySQL / PostgreSQL',
    'Computer Networking',
    'Web Security'
  ],
  socials: {
    linkedin: 'https://www.linkedin.com/in/fahmi-rifki-haikal-a9818532a/',
    github: 'https://github.com/FahmiRifkiHaikal'
  }
}

const PROJECTS = [
  {
    id: '01',
    title: 'TOEFL Online Proctoring & AI Test System',
    category: 'Full-Stack & Machine Learning',
    description:
      'Sistem ujian online TOEFL terintegrasi AI dengan fitur pengawasan otomatis berbasis Head-Tracking (CNN) dan proteksi browser untuk mencegah kecurangan ujian.',
    tech: ['Laravel', 'Vue.js', 'Python', 'CNN', 'Tailwind CSS'],
    icon: <BrainCircuit className='w-5 h-5 text-amber-400' />,
    link: '#'
  },
  {
    id: '02',
    title: 'Web Dashboard SaaS Platform',
    category: 'Web Development & Management',
    description:
      'Platform dashboard SaaS serbaguna untuk manajemen data, visualisasi analitik real-time, pengontrol sistem, dan manajemen multi-role user.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'REST API', 'MySQL'],
    icon: <LayoutDashboard className='w-5 h-5 text-amber-400' />,
    link: '#'
  },
  {
    id: '03',
    title: 'Sistem Informasi Absensi Pegawai',
    category: 'Enterprise System',
    description:
      'Sistem absensi pegawai terstruktur yang mendukung rekap data otomatis, pemantauan kehadiran, serta pelaporan aktivitas kerja harian.',
    tech: ['Laravel', 'Bootstrap/Tailwind', 'MySQL', 'PHP'],
    icon: <Code2 className='w-5 h-5 text-amber-400' />,
    link: '#'
  }
]

const EXPERIENCES = [
  {
    period: '2022 — 2026',
    role: 'Lulusan Sarjana Teknik Informatika (S.Kom)',
    company: 'Institut Teknologi Nasional (ITN) Malang',
    icon: <GraduationCap className='w-4 h-4 text-amber-400' />,
    description:
      'Fokus pada pengembangan perangkat lunak, arsitektur database, sistem jaringan komputer, serta riset Machine Learning untuk pengawasan ujian berbasis Computer Vision.'
  },
  {
    period: 'JUL 2025 — AGU 2025',
    role: 'Web Developer Intern',
    company: 'Dinas Sosial Kabupaten Kediri',
    icon: <Briefcase className='w-4 h-4 text-amber-400' />,
    description:
      'Mengembangkan dan mengoptimalkan sistem web portal layanan publik, membantu otomatisasi alur pemrosesan data, serta merapikan struktur antarmuka sistem digital instansi.'
  },
  {
    period: '2023 — 2025',
    role: 'Asisten Laboratorium Jaringan Komputer',
    company: 'ITN Malang',
    icon: <Network className='w-4 h-4 text-amber-400' />,
    description:
      'Membimbing praktikum mahasiswa dalam topologi jaringan, konfigurasi perangkat router/switch, pemecahan masalah jaringan, serta perawatan infrastruktur lab.'
  }
]

export default function Home() {
  // Fungsi Smooth Scroll ke Section
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Fungsi Action Tombol Hire Me
  const handleHireMe = () => {
    const subject = encodeURIComponent('Peluang Kerja / Proyek Web Development')
    const body = encodeURIComponent(
      'Halo Fahmi,\n\nSaya tertarik dengan portofolio Anda dan ingin berdiskusi mengenai proyek / peluang kerja.'
    )
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className='min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-amber-500/30 selection:text-amber-200 scroll-smooth'>
      {/* NAVBAR */}
      <header className='fixed top-0 left-0 right-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800/60'>
        <div className='max-w-6xl mx-auto px-6 h-20 flex items-center justify-between'>
          <a
            href='#'
            onClick={e => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='font-serif text-xl tracking-wider text-amber-100 hover:text-amber-400 transition-colors'
          >
            FAHMI<span className='text-amber-500'>.</span>
          </a>
          <nav className='hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-stone-400'>
            <a
              href='#about'
              onClick={e => scrollToSection(e, 'about')}
              className='hover:text-amber-400 transition-colors'
            >
              Tentang
            </a>
            <a
              href='#projects'
              onClick={e => scrollToSection(e, 'projects')}
              className='hover:text-amber-400 transition-colors'
            >
              Proyek
            </a>
            <a
              href='#experience'
              onClick={e => scrollToSection(e, 'experience')}
              className='hover:text-amber-400 transition-colors'
            >
              Pengalaman
            </a>
            <a
              href='#contact'
              onClick={e => scrollToSection(e, 'contact')}
              className='hover:text-amber-400 transition-colors'
            >
              Kontak
            </a>
          </nav>
          <button
            onClick={handleHireMe}
            className='text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-stone-950 transition-all cursor-pointer'
          >
            Hire Me
          </button>
        </div>
      </header>

      <main className='pt-20'>
        {/* HERO SECTION */}
        <section className='max-w-6xl mx-auto px-6 py-28 flex flex-col justify-center min-h-[85vh] border-b border-stone-800/60'>
          <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-8 w-fit'>
            <Sparkles className='w-3.5 h-3.5' />
            <span>{PROFILE.status}</span>
          </div>

          <h1 className='font-serif text-5xl sm:text-7xl lg:text-8xl text-stone-100 font-normal leading-[1.08] tracking-tight mb-8'>
            Designing systems <br />
            <span className='italic font-light text-amber-200'>
              with precision
            </span>{' '}
            & AI.
          </h1>

          <p className='text-lg sm:text-xl text-stone-400 max-w-2xl font-light leading-relaxed mb-10'>
            Halo, saya{' '}
            <strong className='text-stone-200 font-semibold'>
              {PROFILE.name}
            </strong>{' '}
            — {PROFILE.subtitle}. Berfokus pada performa tinggi, struktur kode
            bersih, dan antarmuka intuitif.
          </p>

          <div className='flex flex-wrap items-center gap-5 pt-2'>
            <a
              href='#projects'
              onClick={e => scrollToSection(e, 'projects')}
              className='inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold px-6 py-3.5 rounded text-sm transition-all'
            >
              Lihat Proyek <FolderGit2 className='w-4 h-4' />
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 bg-stone-900 border border-stone-800 hover:border-stone-700 text-stone-300 font-medium px-6 py-3.5 rounded text-sm transition-all'
            >
              LinkedIn <ArrowUpRight className='w-4 h-4 text-stone-500' />
            </a>
            <a
              href={PROFILE.socials.github}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 bg-stone-900 border border-stone-800 hover:border-stone-700 text-stone-300 font-medium px-6 py-3.5 rounded text-sm transition-all'
            >
              GitHub <GithubIcon className='w-4 h-4 text-stone-500' />
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id='about'
          className='max-w-6xl mx-auto px-6 py-24 border-b border-stone-800/60'
        >
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='lg:col-span-4'>
              <span className='text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2'>
                // ABOUT ME
              </span>
              <h2 className='font-serif text-3xl sm:text-4xl text-stone-100 font-normal'>
                Profil & Orientasi Kerja
              </h2>
            </div>

            <div className='lg:col-span-8 space-y-8'>
              <p className='text-stone-300 text-base sm:text-lg leading-relaxed font-light'>
                {PROFILE.about}
              </p>

              <div>
                <h3 className='text-sm font-mono uppercase tracking-wider text-stone-400 mb-4'>
                  Tech Stack & Spesialisasi
                </h3>
                <div className='flex flex-wrap gap-2.5'>
                  {PROFILE.skills.map((skill, index) => (
                    <span
                      key={index}
                      className='bg-stone-900/80 border border-stone-800 text-stone-300 text-xs font-mono px-3.5 py-2 rounded hover:border-amber-500/40 transition-colors'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id='projects'
          className='max-w-6xl mx-auto px-6 py-24 border-b border-stone-800/60'
        >
          <div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4'>
            <div>
              <span className='text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2'>
                // PORTFOLIO
              </span>
              <h2 className='font-serif text-3xl sm:text-4xl text-stone-100 font-normal'>
                Proyek Pilihan
              </h2>
            </div>
            <p className='text-stone-400 text-sm max-w-md'>
              Kumpulan aplikasi web dan integrasi sistem yang dikembangkan
              secara profesional.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {PROJECTS.map(project => (
              <div
                key={project.id}
                className='group relative bg-stone-900/40 border border-stone-800/80 hover:border-amber-500/40 p-8 rounded-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1'
              >
                <div>
                  <div className='flex items-center justify-between mb-6'>
                    <span className='font-serif text-2xl font-light text-stone-600 group-hover:text-amber-400 transition-colors'>
                      {project.id}
                    </span>
                    <div className='p-2.5 bg-stone-900 rounded border border-stone-800'>
                      {project.icon}
                    </div>
                  </div>

                  <span className='text-[11px] font-mono uppercase tracking-wider text-amber-400/90 mb-2 block'>
                    {project.category}
                  </span>

                  <h3 className='font-serif text-xl text-stone-100 font-normal mb-3 group-hover:text-amber-200 transition-colors'>
                    {project.title}
                  </h3>

                  <p className='text-stone-400 text-sm leading-relaxed mb-8 font-light'>
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className='flex flex-wrap gap-1.5 mb-6'>
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className='text-[11px] font-mono text-stone-500 bg-stone-900 px-2 py-0.5 rounded'
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className='inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors'
                  >
                    Detail Proyek <ArrowUpRight className='w-3.5 h-3.5' />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section
          id='experience'
          className='max-w-6xl mx-auto px-6 py-24 border-b border-stone-800/60'
        >
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='lg:col-span-4'>
              <span className='text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2'>
                // EXPERIENCE
              </span>
              <h2 className='font-serif text-3xl sm:text-4xl text-stone-100 font-normal'>
                Jejak Perjalanan
              </h2>
            </div>

            <div className='lg:col-span-8 space-y-12'>
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className='relative pl-8 border-l border-stone-800 group hover:border-amber-500/50 transition-colors'
                >
                  <div className='absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-stone-700 group-hover:bg-amber-400 transition-colors' />

                  <div className='flex items-center gap-2 mb-1'>
                    {exp.icon}
                    <span className='text-xs font-mono text-amber-400'>
                      {exp.period}
                    </span>
                  </div>

                  <h3 className='text-lg font-serif text-stone-100 mb-1'>
                    {exp.role}{' '}
                    <span className='text-stone-500 font-sans text-sm font-light'>
                      at {exp.company}
                    </span>
                  </h3>

                  <p className='text-stone-400 text-sm font-light leading-relaxed'>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id='contact'
          className='max-w-6xl mx-auto px-6 py-28 text-center'
        >
          <span className='text-xs font-mono uppercase tracking-widest text-amber-400 block mb-4'>
            // GET IN TOUCH
          </span>

          <h2 className='font-serif text-4xl sm:text-6xl text-stone-100 font-normal mb-6'>
            Mari Bekerja Sama
          </h2>

          <p className='text-stone-400 text-base max-w-xl mx-auto font-light mb-10'>
            Tertarik membangun proyek bersama atau ingin berdiskusi mengenai
            peluang kerja sama? Silakan kirimkan pesan.
          </p>

          <div className='flex justify-center gap-4 mb-20'>
            <a
              href="mailto:fahmirifki412@gmail.com?subject=Peluang%20Kerja%20/%20Proyek%20Web%20Development"
              className='inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold px-8 py-4 rounded text-sm transition-all cursor-pointer'
            >
              <Mail className='w-4 h-4' /> Kirim Email Ke Saya
            </a>
          </div>

          <div className='pt-12 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500'>
            <p>
              © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js &
              Tailwind CSS.
            </p>
            <div className='flex gap-6'>
              <a
                href={PROFILE.socials.github}
                target='_blank'
                rel='noreferrer'
                className='hover:text-stone-300 flex items-center gap-1.5'
              >
                <GithubIcon className='w-3.5 h-3.5' /> GitHub
              </a>
              <a
                href={PROFILE.socials.linkedin}
                target='_blank'
                rel='noreferrer'
                className='hover:text-stone-300 flex items-center gap-1.5'
              >
                <LinkedinIcon className='w-3.5 h-3.5' /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
