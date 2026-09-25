export default function TabNavigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'about', label: '01. ABOUT' },
    { id: 'projects', label: '02. PROJECTS' },
    { id: 'contact', label: '03. CONTACT' },
  ];

  return (
    <nav className="flex space-x-5 sm:space-x-8 border-b border-neutral-200 dark:border-neutral-800 mb-8 sm:mb-10 font-mono text-xs sm:text-sm overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`pb-3 text-xs sm:text-sm tracking-wider transition-all relative cursor-pointer whitespace-nowrap ${
            activeTab === tab.id
              ? 'text-black dark:text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-black dark:after:bg-white'
              : 'text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}