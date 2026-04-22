import logo from '../assets/images/logo.png';
const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 px-6">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="HookURL Logo" className='h-10 object-contain' />
        </a>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-2">

          {["Features", "Pricing", "Privacy", "Terms", "Contact"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              {l}
            </a>
          ))}

        </div>

        {/* Copyright */}
        <div className="text-xs text-zinc-500">
          © 2026 HookURL
        </div>

      </div>

    </footer>
  )
}

export default Footer;