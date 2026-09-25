import { useState, useEffect } from 'react';
import ProfileHeader from './components/ProfileHeader';
import TabNavigation from './components/TabNavigation';
import TabAbout from './components/TabAbout';
import TabProjects from './components/TabProjects';
import TabContact from './components/TabContact';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-200 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        
        <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl mx-auto px-5 sm:px-8 py-10 sm:py-16 md:py-20 relative">
          
          <div className="flex justify-between items-center mb-8 sm:mb-12 pb-4 border-b border-neutral-200 dark:border-neutral-800">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-neutral-400">
              PORTFOLIO // 2026
            </span>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-[10px] sm:text-xs uppercase tracking-widest font-mono text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer py-1 px-2 -mr-2"
            >
              [{isDarkMode ? 'LIGHT' : 'DARK'}]
            </button>
          </div>

          <ProfileHeader />

          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

          <main className="min-h-[240px]">
            {activeTab === 'about' && <TabAbout />}
            {activeTab === 'projects' && <TabProjects />}
            {activeTab === 'contact' && <TabContact />}
          </main>

          <footer className="mt-16 sm:mt-24 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-left text-[10px] sm:text-xs font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-widest flex justify-between items-center">
            <span>FAVIAN LESVEVA</span>
            <span>REACT + TAILWIND</span>
          </footer>

        </div>

      </div>
    </div>
  );
}