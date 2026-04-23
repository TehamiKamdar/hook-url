import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  XCircle,
  CheckCircle,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Check for success message from registration
  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      // Clear the state after showing
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email address";
        return "";
      case "password":
        if (!value) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (successMessage) setSuccessMessage("");
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(form).forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ email: true, password: true });
      return;
    }

    setLoading(true);

    try {
      // Simulate API call - replace with your actual API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Demo credentials check (remove in production)
      if (form.email === "demo@hookurl.com" && form.password === "demo123") {
        console.log("Login successful:", { email: form.email, rememberMe });
        // Store auth token in localStorage if remember me is checked
        if (rememberMe) {
          localStorage.setItem("userEmail", form.email);
        }
        navigate("/dashboard");
      } else {
        setErrors({ submit: "Invalid email or password. Try demo@hookurl.com / demo123" });
      }
    } catch (error) {
      setErrors({ submit: error.message || "Login failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic here
    // For demo purposes
    alert(`${provider} login would be implemented here`);
  };

  const LoginForm = () => (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 flex items-center gap-2 animate-slideDown">
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          <p className="text-sm text-green-400">{successMessage}</p>
        </div>
      )}

      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Email Address
        </label>
        <div className="relative group">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
          <input
            type="email"
            name="email"
            placeholder="hello@hookurl.com"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="email"
            className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border ${
              touched.email && errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-gray-700 focus:border-blue-500"
            } text-white outline-none transition-all focus:ring-2 focus:ring-blue-500/20`}
          />
        </div>
        {touched.email && errors.email && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1 animate-slideDown">
            <XCircle className="w-4 h-4" /> {errors.email}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Password
        </label>
        <div className="relative group">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="current-password"
            className={`w-full pl-10 pr-12 py-3 rounded-lg bg-gray-800 border ${
              touched.password && errors.password
                ? "border-red-500 focus:border-red-500"
                : "border-gray-700 focus:border-blue-500"
            } text-white outline-none transition-all focus:ring-2 focus:ring-blue-500/20`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {touched.password && errors.password && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1 animate-slideDown">
            <XCircle className="w-4 h-4" /> {errors.password}
          </p>
        )}
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="peer sr-only"
            />
            <div className="w-4 h-4 rounded border border-gray-600 bg-gray-800 peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all"></div>
            <CheckCircle className="absolute top-0 left-0 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
          </div>
          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            Remember me
          </span>
        </label>
        <Link
          to="/forgot-password"
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 relative overflow-hidden group"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Signing in...
          </>
        ) : (
          <>
            Sign In
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-800"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-gray-900/50 text-gray-500">Or continue with</span>
        </div>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-1 gap-3">
        <button
          type="button"
          onClick={() => handleSocialLogin("google")}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition-all text-gray-300 hover:text-white"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EB4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </button>
      </div>

      {/* Sign Up Link */}
      <p className="text-sm text-gray-400 text-center mt-6">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-400 hover:text-blue-300 font-medium transition-colors hover:underline inline-flex items-center gap-1"
        >
          Create free account
          <ArrowRight className="w-3 h-3" />
        </Link>
      </p>

      {/* Submit Error */}
      {errors.submit && (
        <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 animate-slideDown">
          <p className="text-center text-sm text-red-400 flex items-center justify-center gap-2">
            <XCircle className="w-4 h-4" />
            {errors.submit}
          </p>
        </div>
      )}

      {/* Demo Credentials Hint */}
      <div className="mt-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
        <p className="text-xs text-blue-400 text-center">
          Demo credentials: demo@hookurl.com / demo123
        </p>
      </div>
    </form>
  );

  return (
    <LoginForm />
  );
};

export default Login;