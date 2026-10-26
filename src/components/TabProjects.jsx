export default function TabProjects() {
  const projectList = [
    {
      title: 'EINusa',
      desc: 'Landing page modern, responsif, dan siap pakai untuk perusahaan jasa ekspor impor, freight forwarding, dan Pengusaha Pengurusan Jasa Kepabeanan (PPJK) resmi di Indonesia.',
      tech: 'HTML5, CSS3, JavaScript',
      link: 'https://einusa.iann.my.id',
    },
    {
      title: 'Digital Edupage',
      desc: 'frontend website profil resmi institusi pendidikan dengan desain modern, minimalis monokrom, serta siap diintegrasikan dengan backend CMS (seperti Supabase).',
      tech: 'React.js (vite), Tailwind CSS',
      link: 'https://github.com/VyannOrg/digital-edupage',
      soonfeature: '(In Production) Pengembangan saat ini berfokus pada penambahan sistem manajemen konten dinamis, fitur pencarian global, dan pengoptimalan Dark Mode.',
    },
    {
      title: 'Kotakin App',
      desc: 'Kotakin adalah sistem manajemen inventaris gudang berbasis Laravel 13 dan Filament v5 dengan antarmuka monokrom yang cepat, efisien, serta dilengkapi proteksi stok anti-minus otomatis, hak akses bertingkat, dasbor analitik real-time, dan generator QR Code SKU instan.',
      tech: 'Laravel, Alpine.js, Blade, Tailwind CSS, SQlite, Filament v5',
      link: 'https://github.com/Rven24/Kotakin-App',
    },

  ];

  return (
    <div className="space-y-6 sm:space-y-8 text-left">
      {projectList.map((project, index) => (
        <div
          key={index}
          className="pb-5 sm:pb-6 border-b border-neutral-100 dark:border-neutral-900 last:border-none"
        >
          <div className="flex justify-between items-baseline mb-1.5">
            <h3 className="text-xs sm:text-sm font-medium text-black dark:text-white">
              {project.title}
            </h3>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] sm:text-xs font-mono text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              [source]
            </a>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-2 font-sans max-w-xl">
            {project.desc}
          </p>
          <span className="text-[10px] sm:text-xs font-mono text-neutral-400 dark:text-neutral-500">
            {project.tech}
          </span> <br />
          <span className="text-[10px] sm:text-xs font-mono text-neutral-400 dark:text-neutral-500">
            {project.soonfeature}
          </span>
        </div>
      ))}
    </div>
  );
}