// src/components/Team.jsx

import SanjeevImg from "../assets/images/sanjeev.png";
import DeepikaImg from "../assets/images/deepika.png";
import MathavImg from "../assets/images/mathav.png";
import NaveethImg from "../assets/images/naveeth.png";
import SanjayImg from "../assets/images/sanjay.png";
import TamilImg from "../assets/images/tamil.png";

const teamMembers = [
  { name: "Sanjeev", role: "Initiative Lead", img: SanjeevImg },
  { name: "Deepika", role: "Design & Frontend", img: DeepikaImg },
  { name: "Mathavan", role: "Design & Frontend", img: MathavImg },
  { name: "Naveeth", role: "Prototyping & Visual Exploration", img: NaveethImg },
  { name: "Sanjay", role: "Systems Exploration", img: SanjayImg },
  { name: "Tamilarasan", role: "Research Support", img: TamilImg },
];

function Team() {
  return (
    <section
      id="team"
      className="relative py-20 bg-slate-950 border-t border-white/5"
    >
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-10 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* header */}
        <div className="reveal text-center mb-14">
          <p className="inline-flex items-center gap-2
                        text-[11px] font-semibold uppercase
                        tracking-[0.25em] text-emerald-300/80">
            <span className="h-px w-6 bg-emerald-400/80" />
            Team
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
            People involved in BeatRescue
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            BeatRescue is shaped by a small group contributing across
            design, systems thinking, prototyping, and research support.
          </p>
        </div>

        {/* grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((m) => (
            <div
              key={m.name}
              className="reveal rounded-xl border border-white/10
                         bg-slate-900/60 px-6 py-7
                         flex flex-col items-center text-center
                         hover:border-emerald-400/40 transition"
            >
              <div className="w-24 h-24 rounded-md overflow-hidden
                              border border-white/20 mb-4">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-base font-semibold text-white">
                {m.name}
              </h3>

              <p className="mt-1 text-sm text-slate-300">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
