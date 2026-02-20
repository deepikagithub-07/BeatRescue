// src/components/Product.jsx

function Product() {
  return (
    <section
      id="product"
      className="bg-slate-900/90 border-t border-white/5 py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300/70">
            <span className="h-px w-6 bg-emerald-400/60" />
            Product direction
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
            What BeatRescue is working on
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            BeatRescue is an early-stage initiative examining sensing challenges
            in disaster environments. The work is exploratory and focused on
            understanding constraints before implementation.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">

          {/* Item 1 */}
          <div>
            <h3 className="text-lg font-medium text-white">
              The problem space
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Disaster scenarios degrade signals through noise, obstruction,
              and instability. Reliable sensing cannot be assumed and must be
              studied under imperfect conditions.
            </p>
            <div className="mt-4 h-px bg-white/10" />
          </div>

          {/* Item 2 */}
          <div>
            <h3 className="text-lg font-medium text-white">
              Current approach
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              The initiative is currently focused on research, signal behavior
              analysis, and feasibility exploration. No operational system or
              validated prototype is claimed at this stage.
            </p>
            <div className="mt-4 h-px bg-white/10" />
          </div>

          {/* Item 3 */}
          <div>
            <h3 className="text-lg font-medium text-white">
              Boundaries and restraint
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              BeatRescue avoids premature assumptions around detection,
              automation, or deployment readiness. Progress is defined by
              improved understanding, not feature completeness.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Product;
