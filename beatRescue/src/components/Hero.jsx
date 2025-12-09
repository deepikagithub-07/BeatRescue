// src/components/Hero.jsx

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 min-h-screen flex items-center"
    >
      {/* Heartbeat background line */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1600 400"
          preserveAspectRatio="none"
        >
          {/* FAINT wave behind main line */}
          <path
            d="
              M0 200 
              L150 200 
              L200 150 
              L240 300 
              L300 200 
              L420 200 
              L470 120 
              L540 320 
              L620 200 
              L780 200 
              L830 160
              L895 260
              L970 200
              L1120 200 
              L1180 140 
              L1240 300 
              L1320 200 
              L1600 200
            "
            stroke="rgba(0,255,200,0.25)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            style={{
              animation: "faintWave 4s ease-in-out infinite",
            }}
          />

          {/* MAIN glowing heartbeat line */}
          <path
            d="
              M0 200 
              L150 200 
              L200 150 
              L240 300 
              L300 200 
              L420 200 
              L470 120 
              L540 320 
              L620 200 
              L780 200 
              L830 160
              L895 260
              L970 200
              L1120 200 
              L1180 140 
              L1240 300 
              L1320 200 
              L1600 200
            "
            stroke="rgb(0,255,200)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: 1600,
              animation:
                "heartbeatPulse 4s linear infinite, pulseGlow 2.8s ease-in-out infinite",
            }}
          />
        </svg>
      </div>

      {/* Background glow layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-orange-500/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.7),transparent_55%)]" />
      </div>

      {/* Main content container */}
      <div className="relative w-full">
        <div className="max-w-6xl mx-auto px-4 py-24 lg:py-28 flex flex-col lg:flex-row items-center gap-10">
          {/* Left: text */}
          <div className="max-w-xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Offline rescue intelligence
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-50">
              Geophone-based{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-orange-300 bg-clip-text text-transparent">
                survivor detection
              </span>{" "}
              for real disasters.
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              BeatRescue turns vibration signals into life signals — using
              geophones, TinyML on ESP32, and a deployable probe grid that
              works fully offline in landslides, earthquakes, and collapsed
              structures.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/40 hover:bg-orange-400 hover:translate-y-[1px] transition"
              >
                Explore product
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-50 hover:bg-white/10 hover:border-white/40 transition"
              >
                Contact us
              </a>
            </div>

            {/* Small stats row */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div>
                <div className="font-semibold text-slate-50">0-4 m depth</div>
                <div className="text-slate-400">Optimized for survival zone</div>
              </div>
              <div>
                <div className="font-semibold text-slate-50">Offline ready</div>
                <div className="text-slate-400">No network dependency</div>
              </div>
              <div>
                <div className="font-semibold text-slate-50">
                  TinyML on ESP32
                </div>
                <div className="text-slate-400">On-device classification</div>
              </div>
            </div>
          </div>

          {/* Right: device / signal card */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-emerald-500/40 via-cyan-400/40 to-orange-500/40 blur-xl opacity-70" />
              <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-6 shadow-2xl shadow-black/50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      Probe status
                    </p>
                    <p className="text-sm font-semibold text-slate-50">
                      Grid Alpha · Live
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-medium text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Heartbeat detected
                  </span>
                </div>

                {/* Fake waveform */}
                <div className="h-32 rounded-2xl bg-slate-900/80 border border-slate-700/70 overflow-hidden flex items-center px-1">
                  <div className="w-full h-[2px] bg-slate-700/70 relative">
                    <div className="absolute inset-0 flex gap-[3px]">
                      {Array.from({ length: 70 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-[3px] rounded-full bg-emerald-400/80"
                          style={{
                            height: `${8 + (Math.sin(i * 0.35) + 1) * 12}px`,
                            alignSelf:
                              i % 4 === 0
                                ? "flex-start"
                                : i % 3 === 0
                                ? "center"
                                : "flex-end",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom chips */}
                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                  <span className="rounded-full bg-slate-800/80 px-2.5 py-1 text-slate-300 border border-slate-600/70">
                    Geophone · 4.5 Hz
                  </span>
                  <span className="rounded-full bg-slate-800/80 px-2.5 py-1 text-slate-300 border border-slate-600/70">
                    ESP-NOW mesh
                  </span>
                  <span className="rounded-full bg-slate-800/80 px-2.5 py-1 text-slate-300 border border-slate-600/70">
                    Band-pass 1-10 Hz
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
