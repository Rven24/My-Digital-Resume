export default function TabProjects() {
  const projectList = [
    // {
    //   title: 'Digital Resume Card',
    //   desc: 'Minimalist interactive personal resume built with React and Tailwind CSS.',
    //   tech: 'React, Tailwind',
    //   link: 'https://github.com',
    // },
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
          </span>
        </div>
      ))}
    </div>
  );
}