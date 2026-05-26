export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 mt-16">
      <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400 flex flex-wrap gap-4 justify-between">
        <span>© {new Date().getFullYear()} Pablo Stanley</span>
        <div className="flex gap-4 flex-wrap">
          <a href="https://pablostanley.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100">Substack</a>
          <a href="https://x.com/pablostanley" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100">Twitter</a>
          <a href="https://linkedin.com/in/pablostanley1" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100">LinkedIn</a>
          <a href="https://github.com/pablostanley" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100">GitHub</a>
          <a href="mailto:pablostanley1@gmail.com" className="hover:text-zinc-900 dark:hover:text-zinc-100">Email</a>
        </div>
      </div>
    </footer>
  );
}
