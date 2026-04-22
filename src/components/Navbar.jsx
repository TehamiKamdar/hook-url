import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/10 bg-[#0a0a0b]/80 backdrop-blur-lg">
      <a href="#" className="flex items-center gap-3">
        <img src={logo} alt="HookURL Logo" className='h-10 object-contain' />
      </a>

      <div className="hidden md:flex items-center gap-8">
        {["Features", "Pricing", "Docs", "Blog"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="text-zinc-400 hover:text-white text-sm transition">
            {l}
          </a>
        ))}

        <a href="#" className="px-4 py-2 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm hover:bg-blue-500/20 transition">
          Get Started
        </a>
      </div>
    </nav>
  )
}

export default Navbar;