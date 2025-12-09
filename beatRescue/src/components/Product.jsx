// src/components/Product.jsx
import {
  HiLightBulb,
  HiShieldCheck,
  HiCpuChip,
  HiSquares2X2,
  HiRocketLaunch,
  HiSparkles,
} from "react-icons/hi2";

import EarthquakeImg from "../assets/images/Earthquake.png";
import LandslideImg from "../assets/images/landslide.png";
import AftershockImg from "../assets/images/aftershock.png";
import StructuralCollapseImg from "../assets/images/structural-collapse.png";

const productCards = [
  {
    id: "p1",
    title: "Project Goal",
    desc: "BeatRescue detects buried survivors using geophone probes, TinyML models, and a deployable offline grid system.",
    icon: HiLightBulb,
  },
  {
    id: "p2",
    title: "Offline & Rugged",
    desc: "Works in fog, rain, night, landslides, and remote areas where drones, cameras, and GPS systems fail.",
    icon: HiShieldCheck,
  },
  {
    id: "p3",
    title: "TinyML Brain",
    desc: "Geophone + amplifier + filters + ADC + ESP32 classify heartbeat/tapping from noise using an optimized TinyML model.",
    icon: HiCpuChip,
  },
  {
    id: "p4",
    title: "Grid System",
    desc: "Multiple probes form a dynamic mesh; signals localize the survivor’s position through triangulation.",
    icon: HiSquares2X2,
  },
  {
    id: "p5",
    title: "Rapid Deployment",
    desc: "Lightweight probes deploy quickly and cover 0–4m survival depth in disaster zones.",
    icon: HiRocketLaunch,
  },
  {
    id: "p6",
    title: "Impact",
    desc: "Improves survival rates, lowers cost, and enables rural community volunteers to act as first responders.",
    icon: HiSparkles,
  },
];

const hazards = [
  { img: EarthquakeImg, label: "Earthquakes" },
  { img: LandslideImg, label: "Landslides" },
  { img: AftershockImg, label: "Aftershocks" },
  { img: StructuralCollapseImg, label: "Structural Collapse" },
];

function Product() {
  return (
    <section
      id="product"
      className="py-16 bg-slate-900/90 border-t border-white/5"
      aria-labelledby="product-heading"
    >
      <div className="max-w-6xl mx-auto px-4 text-white">
        <h2
          id="product-heading"
          className="text-center text-3xl md:text-4xl font-extrabold mb-3
                     bg-[radial-gradient(circle_at_top_left,_#22c55e,_#0f766e)]
                     bg-clip-text text-transparent"
        >
          PRODUCT
        </h2>

        <p className="text-center max-w-2xl mx-auto text-sm md:text-base text-slate-200 mb-10">
          Hardware + edge intelligence
          for rapid, rugged survivor detection — geophone probes, TinyML
          classification, and a deployable probe grid.
        </p>

        {/* Product Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {productCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.id}
                className="reveal bg-slate-900/80 border border-white/10 rounded-2xl p-5
                           shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-emerald-500/30
                           transition-transform hover:-translate-y-1"
              >
<a href="`"></a>                <div
                  className="w-12 h-12 rounded-xl border border-orange-400/50
                             bg-[radial-gradient(circle_at_top_left,_#f9731633,_#ea580c11)]
                             flex items-center justify-center mb-3"
                >
                  <Icon className="text-orange-300 text-2xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-emerald-100">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-100">{card.desc}</p>
              </article>
            );
          })}
        </div>

        {/* Hazards – horizontal infinite carousel */}
        <div
          className="py-4 px-3 rounded-xl border border-white/10 bg-slate-900/80 overflow-hidden"
          aria-label="Common hazards and scenarios"
        >
          <div className="flex gap-6 min-w-max animate-hazards-marquee">
            {[...hazards, ...hazards].map((h, i) => (
              <div
                key={i}
                className="w-72 shrink-0 bg-slate-900 rounded-2xl overflow-hidden border border-white/10
                           hover:-translate-y-1 transition-transform duration-300"
              >
                <img
                  src={h.img}
                  alt={h.label}
                  className="w-full h-44 object-cover"
                />
                <div className="px-4 py-3 text-center text-base font-semibold text-emerald-100">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Product;
