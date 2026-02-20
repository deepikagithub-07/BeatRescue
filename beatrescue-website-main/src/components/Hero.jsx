// src/components/Hero.jsx
import { useEffect } from "react";
import probeImg from "../assets/images/probe.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Probe presses into ground
    tl.to("#probe", {
      y: 160,
      ease: "none",
    });

    // First vibration wave
    tl.to(
      "#wave-1",
      {
        scale: 1.6,
        opacity: 0.18,
        ease: "none",
      },
      ">+=0.15"
    );

    // Second wave (deeper propagation)
    tl.to(
      "#wave-2",
      {
        scale: 2.2,
        opacity: 0.12,
        ease: "none",
      },
      "<+=0.1"
    );

    // Fade waves slowly
    tl.to(["#wave-1", "#wave-2"], {
      opacity: 0.05,
      ease: "none",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 overflow-hidden"
    >
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2
                     h-96 w-96 rounded-full
                     bg-emerald-400/10 blur-3xl"
        />
        <div
          className="absolute inset-0
                     bg-[radial-gradient(circle_at_top,_rgba(2,6,23,0.6),rgba(2,6,23,0.95))]"
        />
      </div>

      {/* Main layout */}
      <div
        className="relative max-w-7xl mx-auto
                   px-6 py-24
                   grid grid-cols-1 lg:grid-cols-2
                   gap-16 items-center"
      >
        {/* LEFT — TEXT */}
        <div className="space-y-8">
          <span
            className="inline-flex items-center
                       rounded-full border border-emerald-400/30
                       bg-emerald-400/10
                       px-4 py-1.5
                       text-[11px] font-medium uppercase
                       tracking-[0.22em] text-emerald-200"
          >
            Disaster response initiative
          </span>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl
                       font-extrabold tracking-tight
                       text-white leading-tight"
          >
            Ground-deployed sensing probes
            <br />
            <span className="text-emerald-300">
              for time-critical rescue operations
            </span>
          </h1>

          <div className="h-px w-24 bg-emerald-400/40" />

          <p
            className="max-w-xl
                       text-slate-300
                       text-sm md:text-base
                       leading-relaxed"
          >
            BeatRescue explores ground vibration sensing nodes
            designed to be deployed into debris or soil to
            assist rescue teams in identifying potential
            survivor-generated signals beneath collapsed
            structures.
          </p>

          <p className="text-xs text-slate-400">
            Prototype stage · Field validation pending
          </p>

          <a
            href="#product"
            className="inline-flex items-center justify-center
                       rounded-full border border-emerald-400/40
                       px-7 py-3.5
                       text-sm font-semibold text-emerald-200
                       hover:bg-emerald-400/10 transition"
          >
            Explore the system
          </a>
        </div>

        {/* RIGHT — PROBE + GROUND + WAVES */}
        <div className="relative h-[620px] w-full flex justify-center items-start">
          {/* Ground */}
          <div
            className="absolute bottom-0 w-full h-56
                       bg-gradient-to-t
                       from-[#2a2a2a] to-transparent
                       rounded-t-full"
          />

          {/* Vibration waves */}
          <div
            id="wave-1"
            className="absolute bottom-32
                       w-64 h-64
                       rounded-full
                       border border-emerald-400/30
                       opacity-0"
          />
          <div
            id="wave-2"
            className="absolute bottom-32
                       w-64 h-64
                       rounded-full
                       border border-emerald-400/20
                       opacity-0"
          />

          {/* Probe */}
          <img
            id="probe"
            src={probeImg}
            alt="BeatRescue ground vibration sensing probe"
            className="relative z-10 w-40 md:w-48
                       drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
            style={{ transform: "translateY(-140px)" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
