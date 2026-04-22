const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center py-36 px-6 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs uppercase tracking-widest mb-8 z-10">
        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        Link Intelligence Platform
      </div>

      {/* Heading */}
      <h1 className="font-sans font-extrabold text-4xl md:text-6xl leading-tight tracking-tight max-w-3xl z-10">
        Every Link.<br />
        Every <span className="text-blue-500">Click.</span><br />
        Every Insight.
      </h1>

      {/* Description */}
      <p className="mt-6 text-zinc-400 max-w-xl text-base leading-relaxed z-10">
        HookURL turns long messy links into branded short URLs with analytics, conversions, and growth insights.
      </p>

      {/* URL Shortener Form */}
      <div className="mt-10 w-full max-w-3xl bg-[#111114] border border-white/10 rounded-2xl p-5 md:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] z-10">

        <div className="grid md:grid-cols-12 gap-3">

          {/* Long URL */}
          <div className="md:col-span-7">
            <input
              type="text"
              placeholder="Paste your long URL here..."
              className="w-full h-12 px-4 rounded-xl bg-[#0a0a0b] border border-white/10 text-white placeholder:text-zinc-500 outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Alias */}
          <div className="md:col-span-3">
            <input
              type="text"
              placeholder="Custom alias"
              className="w-full h-12 px-4 rounded-xl bg-[#0a0a0b] border border-white/10 text-white placeholder:text-zinc-500 outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button className="w-full h-12 rounded-xl bg-blue-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition">
              Shorten
            </button>
          </div>

        </div>

        {/* Example Output */}
        <div className="mt-4 p-4 rounded-xl bg-[#0a0a0b] border border-white/10 text-left">

          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
            Your Short Link
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <span className="text-blue-400 font-medium break-all">
              hookurl.io/launch2026
            </span>

            <button className="px-4 py-2 text-sm rounded-lg border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 transition">
              Copy Link
            </button>
          </div>

        </div>

      </div>

      {/* Stats Card */}
      {/* <div className="mt-10 w-full max-w-3xl bg-[#111114] border border-white/10 rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_80px_rgba(0,0,0,0.5)] z-10">

        Browser Bar
        <div className="flex items-center gap-2 px-4 py-3 bg-[#18181d] border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />

          <div className="ml-3 flex-1 bg-[#0a0a0b] border border-white/10 rounded-md px-3 py-1 text-xs text-zinc-500">
            Live Analytics Dashboard
          </div>
        </div>

        Stats
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

      </div> */}

    </section>
  )
}

export default Hero;