import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  CheckCircle,
  XCircle,
} from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Password strength criteria
  const passwordCriteria = [
    { regex: /.{8,}/, label: "8+ characters", met: false },
    { regex: /[A-Z]/, label: "Uppercase", met: false },
    { regex: /[a-z]/, label: "Lowercase", met: false },
    { regex: /[0-9]/, label: "Number", met: false },
    { regex: /[!@#$%^&*(),.?":{}|<>]/, label: "Special char", met: false },
  ];

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return "";
      case "email":
        if (!value) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email address";
        return "";
      case "password":
        if (!value) return "Password is required";
        if (value.length < 8) return "Password must be at least 8 characters";
        if (!/[A-Z]/.test(value)) return "Must contain an uppercase letter";
        if (!/[a-z]/.test(value)) return "Must contain a lowercase letter";
        if (!/[0-9]/.test(value)) return "Must contain a number";
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) return "Must contain a special character";
        return "";
      case "confirmPassword":
        if (!value) return "Please confirm your password";
        if (value !== form.password) return "Passwords do not match";
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

    const newErrors = {};
    Object.keys(form).forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, password: true, confirmPassword: true });
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Registration data:", {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      navigate("/login", { state: { message: "Registration successful! Please login." } });
    } catch (error) {
      setErrors({ submit: error.message || "Registration failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const checkPasswordStrength = () => {
    return passwordCriteria.map((criteria) => ({
      ...criteria,
      met: criteria.regex.test(form.password),
    }));
  };

  const passwordStrength = checkPasswordStrength();
  const strengthPercentage =
    (passwordStrength.filter((s) => s.met).length / passwordStrength.length) * 100;

  const getStrengthColor = () => {
    if (strengthPercentage <= 40) return "bg-red-500";
    if (strengthPercentage <= 80) return "bg-yellow-500";
    return "bg-green-500";
  };

  const RegisterForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border ${
              touched.name && errors.name ? "border-red-500" : "border-gray-700"
            } text-white outline-none focus:border-blue-500 transition-colors`}
          />
        </div>
        {touched.name && errors.name && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <XCircle className="w-4 h-4" /> {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="hello@example.com"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border ${
              touched.email && errors.email ? "border-red-500" : "border-gray-700"
            } text-white outline-none focus:border-blue-500 transition-colors`}
          />
        </div>
        {touched.email && errors.email && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <XCircle className="w-4 h-4" /> {errors.email}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create a strong password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full pl-10 pr-12 py-3 rounded-lg bg-gray-800 border ${
              touched.password && errors.password ? "border-red-500" : "border-gray-700"
            } text-white outline-none focus:border-blue-500 transition-colors`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        {/* Password Strength Indicator */}
        {form.password && (
          <div className="mt-2 space-y-2">
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${getStrengthColor()} transition-all duration-300`}
                style={{ width: `${strengthPercentage}%` }}
              />
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {passwordStrength.map((criteria, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  {criteria.met ? (
                    <CheckCircle className="w-3 h-3 text-green-500" />
                  ) : (
                    <XCircle className="w-3 h-3 text-gray-600" />
                  )}
                  <span className={criteria.met ? "text-gray-300" : "text-gray-600"}>
                    {criteria.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {touched.password && errors.password && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <XCircle className="w-4 h-4" /> {errors.password}
          </p>
        )}
      </div>

      {/* Confirm Password Field */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your password"
            value={form.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full pl-10 pr-12 py-3 rounded-lg bg-gray-800 border ${
              touched.confirmPassword && errors.confirmPassword ? "border-red-500" : "border-gray-700"
            } text-white outline-none focus:border-blue-500 transition-colors`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {touched.confirmPassword && errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <XCircle className="w-4 h-4" /> {errors.confirmPassword}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 mt-6"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Creating Account...
          </>
        ) : (
          <>
            Create Account
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      {/* Login Link */}
      <p className="text-sm text-gray-400 text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-400 hover:text-blue-300 hover:underline font-medium transition-colors">
          Sign in
        </Link>
      </p>

      {/* Submit Error */}
      {errors.submit && (
        <p className="text-center text-sm text-red-400 mt-2">{errors.submit}</p>
      )}
    </form>
  );

  return (
      <RegisterForm />
  );
};

export default Register;