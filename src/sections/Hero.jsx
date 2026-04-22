const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center py-24 px-6 relative">

      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs uppercase tracking-widest mb-8">
        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        Link Intelligence Platform
      </div>

      <h1 className="font-syne font-extrabold text-4xl md:text-6xl leading-tight tracking-tight max-w-3xl">
        Every Link.<br />
        Every <span className="text-blue-500">Click.</span><br />
        Every Insight.
      </h1>

      <p className="mt-6 text-zinc-400 max-w-xl text-base leading-relaxed">
        HookURL turns your links into a full analytics engine — track conversions, devices, traffic sources, and growth insights.
      </p>

      <div className="mt-10 flex flex-col md:flex-row gap-3">
        <a className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition">
          Start for free →
        </a>
        <a className="px-6 py-3 border border-white/10 text-zinc-400 rounded-lg hover:text-white transition">
          See features
        </a>
      </div>
      <div className="mt-16 w-full max-w-3xl bg-[#111114] border border-white/10 rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_80px_rgba(0,0,0,0.5)]">

        {/* Browser Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#18181d] border-b border-white/10">

          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />

          <div className="ml-3 flex-1 bg-[#0a0a0b] border border-white/10 rounded-md px-3 py-1 text-xs text-zinc-400">
            hookurl.io/campaign-launch
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 text-center">

          {[
            { val: "24K", label: "Total Clicks" },
            { val: "6.2%", label: "Conversion" },
            { val: "68%", label: "Mobile" },
            { val: "4 src", label: "Top Sources" },
          ].map(({ val, label }) => (
            <div key={label}>

              <div className="text-xl md:text-2xl font-bold font-syne text-white">
                {val.replace(/[KM%]|src/g, "")}
                <span className="text-blue-500">
                  {val.match(/[KM%]|src/)?.[0] ?? ""}
                </span>
              </div>

              <div className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-widest mt-1">
                {label}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Hero;