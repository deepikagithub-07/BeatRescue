// src/components/Hardware.jsx
const hardwareItems = [
  {
    title: "Compute",
    desc: "ESP32 microcontroller with on-device DSP and TinyML inference.",
  },
  {
    title: "Sensors",
    desc: "Geophone 4.5 Hz, AD623 instrumentation amplifier, and analog HPF/LPF filters.",
  },
  {
    title: "Signal Processing",
    desc: "ESP32 ADC sampling, digital band-pass filter (1–10 Hz), RMS & peak event detection.",
  },
  {
    title: "Communication",
    desc: "ESP-NOW wireless mesh for probe-to-receiver data transmission.",
  },
  {
    title: "Probe Structure",
    desc: "Cylindrical enclosure, vibration-isolation mount, environmental protection.",
  },
  {
    title: "Power",
    desc: "18650 Li-ion battery, buck converter, optional solar trickle charging.",
  },
];

function Hardware() {
  return (
    <section id="hardware" className="py-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="reveal text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            HARDWARE STACK
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hardwareItems.map((item) => (
            <article
              key={item.title}
              className="reveal bg-slate-900/70 border border-white/10 rounded-2xl p-5 shadow-lg shadow-black/40 hover:-translate-y-1 hover:shadow-xl transition-transform"
            >
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-white">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hardware;
