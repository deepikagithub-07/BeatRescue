// src/components/Footer.jsx
import Log from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="relative py-10 bg-slate-950 border-t border-white/10">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute  right-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center text-slate-300">
        {/* logo + brand */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div
            className="flex items-center justify-center rounded-full
                       h-14 w-14 bg-slate-900 border border-emerald-400/70
                       ring-2 ring-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.55)]
                       overflow-hidden"
          >
            <img
              src={Log}
              alt="BeatRescue logo"
              className="h-11 w-11 rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-heading text-xl md:text-2xl font-bold text-white">
              BeatRescue
            </span>
            <span className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-emerald-300/80">
              Geophone · TinyML · Rescue
            </span>
          </div>
        </div>

        {/* mini tagline */}
        <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto mb-6">
          Intelligent geophone-based survivor detection for disaster response,
          built for rugged conditions and offline edge inference.
        </p>

        {/* divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/40 to-transparent mb-5" />

        {/* links + legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-slate-400">
          <div className="flex gap-5">
            <a href="#" className="hover:text-emerald-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-300 transition-colors">
              Terms of Service
            </a>
          </div>

          <p className="text-[11px] md:text-xs">
            &copy; {new Date().getFullYear()} BeatRescue Systems. All rights reserved.
          </p>
        </div>

        {/* socials row */}
        <div className="mt-5 flex justify-center gap-4 text-slate-400 text-lg">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-300 transition-colors"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-300 transition-colors"
          >
            <i className="fa-brands fa-instagram" />
          </a>
          <a
            href="mailto:beatrescuelife@gmail.com"
            className="hover:text-emerald-300 transition-colors"
          >
            <i className="fa-solid fa-envelope" />
          </a>
        </div>

        {/* bottom line */}
        <div className="mt-4 text-[10px] md:text-[11px] text-slate-500">
          Built by the BeatRescue team for hackathons, field pilots, and real-world deployments.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
