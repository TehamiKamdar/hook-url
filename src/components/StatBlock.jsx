import { useEffect, useRef, useState } from "react";

function useCountUp(target, duration = 1200, start = false) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const step = (t) => {
      if (!startTime) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);

      setVal(Math.floor(progress * target));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return val;
}

export default function StatBlock({ num, suffix, desc }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const count = useCountUp(num, 1400, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">

      {/* Number */}
      <div className="font-syne text-3xl md:text-5xl font-extrabold tracking-tight leading-none">
        {count}
        {suffix && (
          <span className="text-blue-500">
            {suffix}
          </span>
        )}
      </div>

      {/* Description */}
      <div className="mt-2 text-sm text-zinc-400 font-light">
        {desc}
      </div>

    </div>
  );
}