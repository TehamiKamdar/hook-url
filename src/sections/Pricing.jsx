import { useState } from "react";
import { getPlans } from "../constants/plans";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");
  const plans = getPlans(billing);

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Header */}
        <div className="mb-10">

          <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-500 uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-blue-500" />
            Pricing
          </div>

          <h2 className="font-syne font-bold text-3xl md:text-5xl tracking-tight leading-tight">
            Pay for what you need
          </h2>

          <p className="text-zinc-400 text-base font-light max-w-md mx-auto mt-3 leading-relaxed">
            Start free, scale as you grow. Every plan includes core analytics.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1 rounded-lg bg-white/5 border border-white/10">

            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-1.5 text-sm rounded-md transition ${billing === "monthly"
                  ? "bg-blue-500 text-white"
                  : "text-zinc-400 hover:text-white"
                }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("annually")}
              className={`px-4 py-1.5 text-sm rounded-md transition ${billing === "annually"
                  ? "bg-blue-500 text-white"
                  : "text-zinc-400 hover:text-white"
                }`}
            >
              Annually
            </button>

          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-4 text-left">

          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-xl border p-6 transition
              ${p.featured
                  ? "border-blue-500/40 bg-[#111114] shadow-[0_0_40px_rgba(74,143,255,0.08)]"
                  : "border-white/10 bg-[#111114] hover:border-white/20"
                }`}
            >

              {/* Badge */}
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                  {p.badge}
                </div>
              )}

              {/* Plan Name */}
              <h3 className="font-syne font-semibold text-lg mb-2">
                {p.name}
              </h3>

              {/* Price */}
              <div className="flex items-start gap-1 mb-1">
                <sup className="text-sm font-syne text-blue-500 font-medium mt-2">
                  $
                </sup>
                <span className="text-4xl font-sans font-extrabold tracking-tight">
                  {p.price}
                </span>
              </div>

              {/* Period */}
              <p className="text-zinc-400 text-xs mb-6">
                {p.period}
              </p>

              <div className="h-px bg-white/10 my-5" />

              {/* Features */}
              <ul className="min-h-56 space-y-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-zinc-400 font-light"
                  >
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M4 8l3 3 5-5"
                          stroke="#4a8fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`block mt-6 text-center px-4 py-2 rounded-lg text-sm font-medium transition
                ${p.featured
                    ? "bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/30"
                    : "border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                  }`}
              >
                {p.cta}
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing;