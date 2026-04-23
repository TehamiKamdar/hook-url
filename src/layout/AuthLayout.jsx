import { Link } from "react-router-dom";
import {
  TrendingUp,
  Target,
  BarChart3,
  Shield,
  Link2,
  Sparkles,
} from "lucide-react";
import logo from '../assets/images/logo.png';

const AuthLayout = ({ children, title, subtitle }) => {
  const perks = [
    {
      icon: <Link2 className="w-5 h-5" />,
      title: "Smart URL Shortening",
      description: "Create clean, memorable short links instantly",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Advanced Analytics",
      description: "Track clicks, locations, devices, and referrers",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Link Optimization",
      description: "Improve engagement with smart link suggestions",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Conversion Tracking",
      description: "Measure ROI and optimize your campaigns",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Security First",
      description: "Enterprise-grade protection for all your links",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="flex min-h-screen">
        {/* Left Section - Brand & Perks */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-r border-gray-800">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
          
          {/* Animated Orbs */}
          <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          
          <div className="relative z-10 flex flex-col justify-between p-12 w-full">
            {/* Logo & Brand */}
            <div>
              <Link to="/" className="inline-flex items-center gap-3 group">
                <img src={logo} alt="HookURL Logo" className='h-10 object-contain' />
              </Link>
            </div>

            {/* Perks Section */}
            <div className="my-auto py-12">
              <div className="max-w-md mx-auto">
                {/* Hero Tagline */}
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Join the Future of Link Management
                  </h2>
                  <p className="text-gray-400 text-lg">
                    Everything you need to create, track, and optimize your links in one powerful platform
                  </p>
                </div>

                {/* Perks List */}
                <div className="space-y-6">
                  {perks.map((perk, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                        {perk.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {perk.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {perk.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">50M+</div>
                      <div className="text-xs text-gray-500">Links Tracking</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">99.9%</div>
                      <div className="text-xs text-gray-500">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">2ms</div>
                      <div className="text-xs text-gray-500">Redirect Speed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Text */}
            <div className="text-xs text-gray-600">
              © 2026 HookURL. All rights reserved.
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            {/* Mobile Logo (visible only on mobile) */}
            <div className="lg:hidden text-center mb-8">
              <div className="inline-flex items-center justify-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">HookURL</span>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <p className="text-gray-400 text-sm mt-2">{subtitle}</p>
              </div>

              {children}

              {/* Mobile Perks (visible only on mobile) */}
              <div className="lg:hidden mt-8 pt-6 border-t border-gray-800">
                <div className="grid grid-cols-2 gap-3">
                  {perks.slice(0, 4).map((perk, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="text-blue-400">{perk.icon}</div>
                      <span>{perk.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;