import { useState } from 'react';

export default function TabContact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    { 
      label: 'GitHub', 
      value: 'github.com/Rven24', 
      link: 'https://github.com/Rven24',
      type: 'link'
    },
    { 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/favianlesveva', 
      link: 'https://www.linkedin.com/in/favianlesveva/',
      type: 'link'
    },
    { 
      label: 'Email', 
      value: 'favianlesveva@gmail.com', 
      link: 'mailto:favianlesveva@gmail.com',
      type: 'email'
    },
  ];

  return (
    <div className="space-y-4 text-left font-mono text-xs sm:text-sm max-w-xl">
      {contacts.map((c, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-2.5 border-b border-neutral-100 dark:border-neutral-900 group"
        >
          <span className="text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
            {c.label}
          </span>
          
          <div className="flex items-center space-x-3">
            <a
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-800 dark:text-neutral-200 group-hover:underline text-right"
            >
              {c.value}
            </a>

            {c.type === 'email' && (
              <button
                onClick={() => handleCopyEmail(c.value)}
                className="text-[10px] text-neutral-400 hover:text-black dark:hover:text-white transition-colors border border-neutral-200 dark:border-neutral-800 px-1.5 py-0.5 rounded-none"
                title="Copy Email"
              >
                {copied ? '[copied]' : '[copy]'}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}