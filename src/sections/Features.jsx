import { features } from "../constants/features";

const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">

          <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-500 uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-blue-500" />
            Features
          </div>

          <h2 className="font-syne font-bold text-3xl md:text-5xl leading-tight tracking-tight">
            Not just short links.<br />
            Full link intelligence.
          </h2>

          <p className="text-zinc-400 text-base font-light max-w-md mt-3 leading-relaxed">
            Everything you need to understand, optimize, and grow — built into every link you create.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid md:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 rounded-xl overflow-hidden">

          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#111114] p-8 hover:bg-[#18181d] transition"
            >

              {/* Icon box */}
              <div className="w-11 h-11 mb-5 flex items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="font-syne font-semibold text-base mb-2">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                {f.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Features;