import { useState } from "react";

const CTA = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="text-center py-24 px-6">
      <div className="max-w-xl mx-auto">

        {/* Label */}
        <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-500 uppercase tracking-widest mb-4">
          <span className="w-5 h-px bg-blue-500" />
          Get Started
        </div>

        {/* Heading */}
        <h2 className="font-syne font-bold text-3xl md:text-5xl tracking-tight leading-tight mb-4">
          Turn every link into intelligence
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-base font-light mb-9 leading-relaxed">
          Join thousands of marketers and teams who track, optimize, and grow with HookURL.
        </p>

        {/* Form */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-[#111114] border border-white/10 text-white placeholder:text-zinc-500 outline-none focus:border-blue-500 transition"
          />

          <a
            href="#"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition"
          >
            Join waitlist
          </a>

        </div>

      </div>
    </section>
  )
}

export default CTA;