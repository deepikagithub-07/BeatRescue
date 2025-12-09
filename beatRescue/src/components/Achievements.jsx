// src/components/Achievements.jsx
import { useState, useEffect } from "react";

import YuktiImg from "../assets/images/yukti.jpg";
import SihImg from "../assets/images/sih.jpg";
import BestImg from "../assets/images/best.jpg";

const achievements = [
  {
    title: "Yukthi Productization Fellowship",
    desc: "Shortlisted for Yukthi Productization Fellowship, recognizing innovative product development and commercialization potential.",
    img: YuktiImg,
  },
  {
    title: "SIH-2025 Finalist",
    desc: "Selected as finalist in Smart India Hackathon 2025, showcasing excellence in innovation and problem-solving.",
    img: SihImg,
  },
  {
    title: "Best Game Changer",
    desc: 'Awarded "Best Game Changer" tag by Gamablie Das, CEO of CodeHunters & SIH Official Jury, recognizing transformative impact.',
    img: BestImg,
  },
];

function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? achievements.length - 1 : prev - 1
    );
  };

  // auto-slide
  useEffect(() => {
    const id = setInterval(goToNext, 6000); // 6s per slide
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="achievements"
      className="relative py-16 md:py-20 bg-slate-950 border-top border-white/5"
    >
      {/* bottom fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 via-slate-950 to-transparent" />

      {/* subtle background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-10 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="reveal text-center mb-8 md:mb-10">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
            <span className="h-px w-6 bg-emerald-400/80" />
            Achievements
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
            Recognition & Milestones
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            A quick look at the external recognition BeatRescue has received so far.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative reveal max-w-4xl mx-auto">
          {/* side blobs to fill space nicely on wide screens */}
          <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

          {/* Slider window */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/80 shadow-xl shadow-black/40">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {achievements.map((a) => (
                <article
                  key={a.title}
                  className="min-w-full flex flex-col md:flex-row h-[420px] md:h-[360px] lg:h-[380px]"
                >
                  {/* Image side */}
                  <div className="relative md:w-[55%] h-56 md:h-full overflow-hidden">
                    <img
                      src={a.img}
                      alt={a.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent md:bg-gradient-to-r md:from-slate-950/90 md:via-slate-950/40 md:to-transparent" /> */}
                  </div>

                  {/* Text side */}
                  <div className="md:w-[45%] p-6 md:p-8 flex flex-col justify-center gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 border border-slate-600/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200 w-fit">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Highlight
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-white leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            {/* Arrows */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={goToPrev}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/90 text-slate-200 text-sm hover:border-emerald-400 hover:text-emerald-200 transition-colors"
              >
                <span className="-translate-x-[1px]">&larr;</span>
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/90 text-slate-200 text-sm hover:border-emerald-400 hover:text-emerald-200 transition-colors"
              >
                <span className="translate-x-[1px]">&rarr;</span>
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {achievements.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx
                      ? "w-6 bg-emerald-400"
                      : "w-2 bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
