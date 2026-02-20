// src/components/Achievements.jsx

function Achievements() {
  return (
    <section
      id="impact"
      className="relative py-20 bg-slate-950 border-t border-white/5"
    >
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-10 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">

        {/* WHY CONTEXT MATTERS */}
        <div className="reveal text-center mb-14">
          <p className="inline-flex items-center gap-2
                        text-[11px] font-semibold uppercase
                        tracking-[0.25em] text-emerald-300/80">
            <span className="h-px w-6 bg-emerald-400/80" />
            Why Context Matters
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
            Time, access, and uncertainty define outcomes
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            During large-scale disasters, outcomes are shaped less by intent
            and more by how quickly responders can interpret incomplete,
            noisy, and time-sensitive information.
          </p>
        </div>

        {/* CONTEXT BLOCKS */}
        <div className="grid gap-6 md:grid-cols-3 mb-20">
          
          <div className="reveal rounded-xl border border-white/10
                          bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Narrow decision windows
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              The initial hours following a disaster often determine
              rescue effectiveness, while information availability
              remains fragmented and unreliable.
            </p>
          </div>

          <div className="reveal rounded-xl border border-white/10
                          bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Operational constraints
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Limited equipment, difficult terrain, and restricted access
              frequently constrain how and where search efforts can be
              deployed, regardless of urgency.
            </p>
          </div>

          <div className="reveal rounded-xl border border-white/10
                          bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Risk-aware prioritization
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Improving situational understanding can help teams
              allocate effort more safely, reducing unnecessary exposure
              while focusing on higher-probability locations.
            </p>
          </div>

        </div>

        {/* CURRENT MATURITY */}
        <div className="reveal text-center mb-16">
          <p className="inline-flex items-center gap-2
                        text-[11px] font-semibold uppercase
                        tracking-[0.25em] text-emerald-300/80">
            <span className="h-px w-6 bg-emerald-400/80" />
            Current Maturity
          </p>

          <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">
            Early-stage exploration
          </h3>

          <p className="mt-4 text-sm text-slate-300 max-w-xl mx-auto">
            BeatRescue is currently focused on understanding problem
            boundaries, validating assumptions, and learning from
            real-world rescue contexts before formalizing solutions.
          </p>
        </div>

        {/* TRANSPARENCY NOTE */}
        <div className="reveal text-center">
          <p className="inline-flex items-center gap-2
                        text-[11px] font-semibold uppercase
                        tracking-[0.25em] text-emerald-300/80">
            <span className="h-px w-6 bg-emerald-400/80" />
            Transparency
          </p>

          <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">
            Progress shared as learning, not claims
          </h3>

          <p className="mt-4 text-sm text-slate-300 max-w-xl mx-auto">
            Updates will focus on insights, limitations, and validated
            learnings as the initiative evolves. This section will
            change as understanding deepens.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Achievements;
