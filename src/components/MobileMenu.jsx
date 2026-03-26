import { useMemo } from "react";
import burgerClosed from "../assets/burger-closed.png";

export default function MobileMenu({ open, onClose }) {
  const nav = useMemo(
    () => [
      { href: "#home", label: "#home" },
      { href: "#works", label: "#works" },
      { href: "#about-me", label: "#about-me" },
      { href: "#contacts", label: "#contacts" },
    ],
    []
  );

  return (
    <div
      className={[
        "fixed inset-0 z-50 transition-opacity",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      aria-hidden={!open}>
      <div className="absolute inset-0 bg-[#252a33]" onClick={onClose} />

      <div className="relative h-full w-full">
        <div className="flex items-start justify-between px-5 pt-6">
          <div className="text-lg font-semibold tracking-tight text-white">
            Chandan
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-xl border border-white/10 bg-white/5 p-2"
          >

            <img src={burgerClosed} alt="" />
          </button>
        </div>

        <div className="mx-auto mt-10 max-w-md px-5">
          <nav className="flex flex-col gap-6 text-xl font-medium text-white">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="text-purple-400 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>


        </div>
      </div>
    </div>
  );
}

