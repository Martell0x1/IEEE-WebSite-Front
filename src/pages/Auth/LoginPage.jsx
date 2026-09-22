import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";

import AuthShell from "../../components/Auth/AuthShell";
import AuthField from "../../components/Auth/AuthField";
import ieeeLogo from "../../assets/images/IEEE-Logo.webp";

const loginSchema = z.object({
  email: z.email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean().optional(),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

   const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:8080/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        },
      );
 const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      const token = result.token;

      if (!token) {
        throw new Error("No authentication token was returned.");
      }

      localStorage.setItem("token", token);

      const redirectTo = location.state?.from || "/";

      navigate(redirectTo, {
        replace: true,
      });
    } catch (error) {
      setError("root", {
        type: "server",
        message: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <AuthShell
      eyebrow="IEEE EXCOM"
      title="Welcome"
      accent="Back."
      description="Sign in to keep building production-inspired systems across software, cyber security, AI, and IoT."
      quotes={[
        "Students don't watch tutorials.",
        "Students learn by building.",
      ]}
    >
      <div className="w-full max-w-md bg-black/80 border border-amber-500/30 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <img
            src={ieeeLogo}
            alt="IEEE Logo"
            className="w-10 h-10 object-contain"
          />
          <div>
            <p className="text-[10px] tracking-widest text-[#FF8C00] font-bold">
              SIGN IN
            </p>
            <h2 className="text-xl font-bold text-white leading-tight">
              IEEE <span className="text-[#FF8C00]">Excom</span>
            </h2>
          </div>
        </div>
        
        {errors.root?.message && (
          <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {errors.root.message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <AuthField
            id="login-email"
            label="Email"
            type="email"
            icon={Mail}
            placeholder="you@ieee.org"
            autoComplete="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <AuthField
            id="login-password"
            label="Password"
            type="password"
            icon={Lock}
            placeholder="Enter your password"
            autoComplete="current-password"
            error={errors.password?.message}
            {...register("password")}
          />

          <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer select-none">
            <input
              type="checkbox"
              className="size-4 rounded border-white/20 bg-black/40 accent-[#FF8C00]"
              {...register("remember")}
            />
            Remember me
          </label>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#FF8C00] hover:bg-orange-600 disabled:opacity-70 text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-orange-500/30 transition"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </motion.button>
        </form>

        <p className="mt-6 text-sm text-gray-400 text-center">
          New to the community?{" "}
          <Link
            to="/register"
            className="text-[#FF8C00] hover:text-orange-400 font-semibold transition-colors"
          >
            Join Community
          </Link>
        </p>
      </div>
    </AuthShell>
  );
};

export default LoginPage;
