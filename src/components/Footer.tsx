export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-tighter">
          T<span className="text-primary/50">.</span>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Built with React, Tailwind &
          FramerMotion.
        </p>

        <div className="flex gap-8"></div>
      </div>
    </footer>
  );
}
