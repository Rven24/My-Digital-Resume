export default function TabAbout() {
  const skillsGroup = [
    {
      category: 'Languages',
      items: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'SQL', 'Dart', 'GDScript'],
    },
    {
      category: 'Frameworks & Web Ecosystem',
      items: ['React.js', 'Vite', 'Next.js', 'Tailwind CSS', 'Laravel', 'Flutter', 'Node.js', 'Alpine.js'],
    },
    {
      category: 'Game Engine & 3D Tools',
      items: ['Godot Engine', 'Blender (Low-Poly 3D)', 'GDScript Logic'],
    },
    {
      category: 'Databases & Infrastructure',
      items: ['MySQL', 'SQLite', 'PostgreSQL', 'Supabase', 'Git', 'GitHub', 'Vercel'],
    },
    {
      category: 'Development Environment & AI',
      items: ['VS Code', 'Antigravity IDE', 'Gemini AI', 'Claude AI', 'ChatGPT'],
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 text-left">
      <div className="space-y-3 font-sans max-w-xl">
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Full-Stack Web dan Game Developer yang berfokus pada pembangunan aplikasi web modern yang presisi serta pengembangan game 3D/2D berbasis Godot Engine. Menggabungkan arsitektur kode yang bersih dengan pengalaman pengguna yang intuitif.
        </p>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-mono text-[11px] sm:text-xs">
          // Spesialisasi: React, Tailwind CSS, Laravel, SQLite/MySQL, dan GDScript.
        </p>
      </div>

      <div className="space-y-5 sm:space-y-6 pt-2">
        {skillsGroup.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h2 className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              // {group.category}
            </h2>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200">
              {group.items.map((skill, index) => (
                <span
                  key={index}
                  className="after:content-['/'] after:ml-3 after:text-neutral-300 dark:after:text-neutral-700 last:after:content-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}