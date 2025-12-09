// src/components/Team.jsx
import SanjeevImg from "../assets/images/sanjeev.png";
import DeepikaImg from "../assets/images/deepika.png";
import MathavImg from "../assets/images/mathav.png";
import NaveethImg from "../assets/images/naveeth.png";
import SanjayImg from "../assets/images/sanjay.png";
import TamilImg from "../assets/images/tamil.png";

const teamMembers = [
  {
    name: "Sanjeev",
    role: "Hardware Lead",
    badge: "Team Lead · Hardware",
    img: SanjeevImg,
  },
  {
    name: "Deepika",
    role: "Front-End",
    badge: "UI/UX · Frontend",
    img: DeepikaImg,
  },
  {
    name: "Mathavan",
    role: "Front-End",
    badge: "UI/UX · Frontend",
    img: MathavImg,
  },
  {
    name: "Naveeth",
    role: "3D Designing",
    badge: "3D · Visuals",
    img: NaveethImg,
  },
  {
    name: "Sanjay",
    role: "Developer",
    badge: "ML · System Design",
    img: SanjayImg,
  },
  {
    name: "Tamilarasan",
    role: "Developer",
    badge: "R&D · Support",
    img: TamilImg,
  },
];

function Team() {
  return (
    <section
      id="team"
      className="relative py-20 bg-slate-950 border-t border-white/5"
    >
      {/* subtle background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-10 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* header */}
        <div className="reveal text-center mb-12">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
            <span className="h-px w-6 bg-emerald-400/80" />
            BeatRescue Crew
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
            The team behind the heartbeat
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            Hardware, TinyML, 3D and web — a compact crew building a rescue system
            that works when everything else fails.
          </p>
        </div>

        {/* team grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((m, idx) => (
            <div
              key={m.name}
              className="card-heartbeat reveal group relative overflow-hidden rounded-2xl border border-white/10
                         bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950
                         px-5 py-6 flex flex-col items-center text-center
                         shadow-lg shadow-black/40
                         transition-all duration-300 ease-out
                         hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-400/20"
            >
              {/* top accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent opacity-70" />

              {/* Avatar + glow (no heartbeat here, whole card pulses instead) */}
              <div className="relative mt-2 mb-4">
                {/* thin neon outline */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-emerald-400/40 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* soft animated ring */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
                             transition-all duration-[1500ms]
                             bg-[conic-gradient(from_0deg,rgba(16,185,129,0.6),rgba(56,189,248,0.6),rgba(16,185,129,0.6))]
                             animate-spin-slow blur-[1px]"
                />

                {/* main avatar */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden border border-white/30 bg-slate-900/80">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Badge */}
              <span
                className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 
                           bg-slate-950/80 px-3 py-1 text-[11px] font-medium uppercase tracking-wide 
                           text-emerald-200 mb-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {m.badge}
              </span>

              {/* Name */}
              <h3 className="text-lg font-semibold text-white">{m.name}</h3>
              <p className="text-xs text-slate-300 mt-1">{m.role}</p>

              {/* bottom meta row */}
              <div className="mt-4 w-full flex items-center justify-between text-[11px] text-slate-400">
                <span className="uppercase tracking-[0.18em]">
                  Core Team 0{idx + 1}
                </span>
                <span
                  className="rounded-full bg-slate-900/80 border border-white/10 px-2 py-0.5 
                             group-hover:border-emerald-400/60 group-hover:text-emerald-200 transition-colors"
                >
                  BeatRescue
                </span>
              </div>

              {/* hover overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 
                           transition-opacity duration-300 
                           bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.10),transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.10),transparent_60%)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
