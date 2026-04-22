import StatBlock from "../components/StatBlock";

const Stats = () => {
  return (
    <section className="bg-[#111114] border-y border-white/10 py-20 text-center">
      <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        <StatBlock num={50} suffix="M+" desc="Links tracked every month" />
        <StatBlock num={99} suffix=".9%" desc="Uptime guaranteed" />
        <StatBlock num={2} suffix="ms" desc="Average redirect speed" />
      </div>
    </section>
  )
}

export default Stats;