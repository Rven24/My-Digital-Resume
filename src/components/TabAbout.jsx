export default function TabAbout() {
  const skillsGroup = [
    {
      category: 'Languages',
      items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'Dart', 'GD Script', 'C#'],
    },
    {
      category: 'Frameworks & Libraries',
      items: ['React', 'Tailwind CSS', 'Laravel', 'Flutter'],
    },
    {
      category: 'Software & Tools',
      items: ['MySQL', 'SQLite', 'Git', 'GitHub', 'VS Code', 'Godot Engine', 'Blender'],
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 text-left">
      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans max-w-xl">
        Focused on learning web development and game development. Currently working on a portfolio to improve my skills and knowledge in the world of web and game development. Let's get to know each other better through my contact page.
      </p>

      <div className="space-y-5 sm:space-y-6">
        {skillsGroup.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h2 className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              {group.category}
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