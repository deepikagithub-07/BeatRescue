// src/components/Footer.jsx

import LogoImg from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-14 text-slate-400">
        
        {/* top */}
        <div className="flex flex-col items-center text-center gap-4 mb-10">
          <div className="flex items-center gap-3">
            <img
              src={LogoImg}
              alt="BeatRescue logo"
              className="w-10 h-10 rounded-md border border-white/20"
            />
            <span className="text-base font-semibold text-white">
              BeatRescue
            </span>
          </div>

          <p className="text-sm max-w-xl leading-relaxed">
            BeatRescue is an early-stage disaster-response initiative
            focused on exploring reliable ways to support search and
            rescue operations during emergencies.
          </p>
        </div>

        {/* links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm mb-10">
          <a
            href="#product"
            className="hover:text-emerald-300 transition"
          >
            About
          </a>
          <a
            href="#impact"
            className="hover:text-emerald-300 transition"
          >
            Context
          </a>
          <a
            href="#team"
            className="hover:text-emerald-300 transition"
          >
            Team
          </a>
          <a
            href="#contact"
            className="hover:text-emerald-300 transition"
          >
            Contact
          </a>
        </div>

        {/* socials */}
        <div className="flex justify-center gap-5 text-base mb-8">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-300 transition"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
          <a
            href="mailto:beatrescuelife@gmail.com"
            className="hover:text-emerald-300 transition"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope" />
          </a>
        </div>

        {/* bottom */}
        <div className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} BeatRescue. Built as a learning
          and exploration initiative.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
