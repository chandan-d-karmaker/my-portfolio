import burgerOpen from "../assets/burger-open.png";


export default function TopNav({ onMenuClick }) {
  return (
    <header className="relative w-full px-4 pt-6 md:pt-6">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-end gap-7 text-sm text-white/70">
        <nav className="flex items-center gap-7">
          <a
            href="#home"
            className="text-sm hover:text-white"
          >
            <span className="text-purple-400">#</span>home
          </a>
          <a href="#works" className="hover:text-white">
            <span className="text-purple-400">#</span>works
          </a>
          <a href="#about-me" className="hover:text-white">
            <span className="text-purple-400">#</span>about-me
          </a>
          <a href="#contacts" className="hover:text-white">
            <span className="text-purple-400">#</span>contacts
          </a>
        </nav>

      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between">
        <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          Chandan
        </div>

        <button
          onClick={onMenuClick}
          aria-label="Open menu"
          className="rounded-xl border border-white/10 bg-white/5 p-2"
        >
          <img src={burgerOpen} alt="" className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}

