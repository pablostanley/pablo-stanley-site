export function Footer() {
  return (
    <footer className="w-full mt-24">
      <div className="max-w-2xl mx-auto px-6 py-8 font-mono text-sm flex flex-wrap gap-4 justify-between">
        <span>© {new Date().getFullYear()} pablo stanley</span>
        <div className="flex gap-4 flex-wrap">
          <a href="https://pablostanley.substack.com" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">substack</a>
          <a href="https://x.com/pablostanley" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">twitter</a>
          <a href="https://linkedin.com/in/pablostanley1" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">linkedin</a>
          <a href="https://github.com/pablostanley" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">github</a>
          <a href="mailto:pablostanley1@gmail.com" className="hover:underline underline-offset-4">email</a>
        </div>
      </div>
    </footer>
  );
}
