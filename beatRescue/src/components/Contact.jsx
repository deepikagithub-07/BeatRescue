// src/components/Contact.jsx
function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-slate-900/90 border-t border-white/5"
    >
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-6 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-24 right-4 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        <div className="contact-wrapper reveal">
          {/* heading */}
          <div className="text-center mb-10">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
              <span className="h-px w-6 bg-emerald-400/80" />
              Contact
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
              Let&apos;s talk BeatRescue
            </h2>
            <p className="mt-3 text-slate-300 max-w-xl mx-auto text-sm md:text-base">
              Reach out for demos, pilots, research collaboration, or on-ground
              deployments in disaster-prone regions.
            </p>

            <div className="mt-4 flex items-center justify-center gap-3 text-[11px] text-slate-300">
              <span className="rounded-full border border-emerald-400/40 bg-slate-900/80 px-3 py-1">
                Typical response: <span className="font-semibold text-emerald-300">24–48 hours</span>
              </span>
              <span className="hidden sm:inline text-slate-500">
                • Academic & NGO partnerships welcome
              </span>
            </div>
          </div>

          {/* cards layout */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Email */}
            <a
              href="mailto:beatrescuelife@gmail.com"
              className="group flex gap-3 items-start rounded-2xl border border-white/10 bg-slate-950/70 p-4
                         shadow-md shadow-black/40 hover:shadow-xl hover:border-emerald-400/70
                         transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border border-emerald-400/60">
                <i className="fa-solid fa-envelope text-emerald-300 text-sm" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-400">
                  Email
                </div>
                <div className="mt-1 text-sm text-slate-50">
                  beatrescuelife@gmail.com
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Best for detailed queries, pilots & proposals.
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sanjeev-s-t/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-3 items-start rounded-2xl border border-white/10 bg-slate-950/70 p-4
                         shadow-md shadow-black/40 hover:shadow-xl hover:border-sky-400/70
                         transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border border-sky-400/60">
                <i className="fa-brands fa-linkedin text-sky-400 text-sm" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-400">
                  LinkedIn
                </div>
                <div className="mt-1 text-sm text-slate-50">
                  Connect with us
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Follow project updates, milestones, and team activity.
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-3 items-start rounded-2xl border border-white/10 bg-slate-950/70 p-4
                         shadow-md shadow-black/40 hover:shadow-xl hover:border-pink-400/70
                         transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border border-pink-400/60">
                <i className="fa-brands fa-instagram text-pink-400 text-sm" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-400">
                  Instagram
                </div>
                <div className="mt-1 text-sm text-slate-50">
                  Follow us
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Behind-the-scenes, builds, and field stories.
                </p>
              </div>
            </a>

            {/* Location */}
            <div
              className="group flex gap-3 items-start rounded-2xl border border-white/10 bg-slate-950/70 p-4
                         shadow-md shadow-black/40 hover:shadow-xl hover:border-emerald-400/70
                         transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border border-emerald-400/60">
                <i className="fa-solid fa-location-dot text-emerald-300 text-sm" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-400">
                  Location
                </div>
                <p className="mt-1 text-sm text-slate-50">
                  Tiruchirappalli, India
                </p>
                <p className="mt-1 text-xs text-slate-400 italic">
                  Available for remote collaboration and on-site pilots with partners.
                </p>
              </div>
            </div>
          </div>

          {/* simple CTA line */}
          <div className="mt-8 text-center text-xs md:text-sm text-slate-400">
            Have a use case in mind?{" "}
            <a
              href="mailto:beatrescuelife@gmail.com"
              className="text-emerald-300 hover:underline"
            >
              Share a short brief
            </a>{" "}
            and we&apos;ll get back with next steps.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
