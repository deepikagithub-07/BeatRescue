// src/components/Header.jsx
import { useState, useEffect } from "react";
import LogoImg from "../assets/images/logo.png";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#product", label: "Product" },
  { href: "#team", label: "Team" },
  { href: "#achievements", label: "Achievements" },
];

function Header() {
  const [open, setOpen] = useState(false);

  // close on ESC / outside click
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function handleClick(e) {
      const header = document.querySelector("header");
      if (open && header && !header.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", handleKey);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("click", handleClick);
    };
  }, [open]);

  // smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/40 border-b border-white/10 backdrop-blur-md">
      {/* full-width bar, logo locked to the left */}
      <div className="px-4 h-16 flex items-center text-white">
        {/* Logo + brand, hard-left */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2"
        >
          <img
            src={LogoImg}
            alt="BeatRescue logo"
            className="w-10 h-10 rounded-xl shadow-lg shadow-emerald-500/30 ring-1 ring-white/10"
          />
          <span className="font-heading font-extrabold text-lg tracking-tight leading-none">
            BeatRescue
          </span>
        </a>

        {/* Desktop nav - pushed to the right */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium ml-auto">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="
                relative px-2.5 py-1.5 rounded-full
                text-[13px] font-medium text-slate-100/80
                hover:text-white
                hover:bg-white/5
                transition
                after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-[2px]
                after:h-[2px] after:scale-x-0 after:origin-left
                after:bg-[linear-gradient(to_right,#f97316,#22c55e,#38bdf8,#a855f7)]
                after:transition-transform after:duration-300
                hover:after:scale-x-100
              "
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="
              ml-2 inline-flex items-center justify-center
              px-4 py-2 rounded-full
              bg-[radial-gradient(circle_at_top_left,_#22c55e,_#0f766e)]
              text-white text-sm font-semibold
              shadow-lg shadow-emerald-500/40
              border border-emerald-400/60
              hover:brightness-110 hover:shadow-emerald-400/60
              transition
            "
          >
            Contact us
          </a>
        </nav>

        {/* Mobile button - right side */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-auto inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 bg-slate-900/70 shadow-sm shadow-black/40"
        >
          <i className="fa-solid fa-bars text-white text-base" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/98">
          <nav className="px-4 py-3 flex flex-col gap-1.5 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="
                  py-2 px-2 rounded-lg
                  text-slate-100
                  hover:bg-white/5
                  relative
                  after:content-[''] after:absolute after:left-2 after:right-2 after:bottom-1
                  after:h-[2px] after:scale-x-0 after:origin-left
                  after:bg-[linear-gradient(to_right,#f97316,#22c55e,#38bdf8,#a855f7)]
                  after:transition-transform after:duration-300
                  hover:after:scale-x-100
                "
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="
                mt-2 px-4 py-2 rounded-full
                bg-[radial-gradient(circle_at_top_left,_#22c55e,_#0f766e)]
                text-white font-semibold text-center
                shadow-lg shadow-emerald-500/40
                border border-emerald-400/60
                hover:brightness-110 hover:shadow-emerald-400/60
                transition
              "
            >
              Contact us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
