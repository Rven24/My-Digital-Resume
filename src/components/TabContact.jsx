export default function TabContact() {
  const contacts = [
    { label: 'GitHub', value: 'github.com/Rven24', link: 'https://github.com/Rven24' },
    { label: 'LinkedIn', value: 'linkedin.com/in/Favian Muhammad Taufani Atha Lesveva', link: 'https://www.linkedin.com/in/favian-muhammad-taufani-atha-lesveva/' },
    { label: 'Email', value: 'favianlesveva@gmail.com', link: 'mailto:favianlesveva@gmail.com' },
  ];

  return (
    <div className="space-y-4 text-left font-mono text-xs sm:text-sm max-w-xl">
      {contacts.map((c, index) => (
        <a
          key={index}
          href={c.link}
          target="_blank"
          rel="noreferrer"
          className="flex justify-between items-center py-2 border-b border-neutral-100 dark:border-neutral-900 group"
        >
          <span className="text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
            {c.label}
          </span>
          <span className="text-neutral-800 dark:text-neutral-200 group-hover:underline text-right">
            {c.value}
          </span>
        </a>
      ))}
    </div>
  );
}