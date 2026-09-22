import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Lock, Mail, User } from "lucide-react";

import AuthShell from "../../components/Auth/AuthShell";
import AuthField from "../../components/Auth/AuthField";
import ieeeLogo from "../../assets/images/IEEE-Logo.webp";

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Confirm your password"),
    terms: z.boolean().refine((value) => value, {
      message: "You must accept the terms to join",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const RegisterationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

   const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }

      const token = result.token;

      if (!token) {
        throw new Error("No authentication token was returned.");
      }

      // Save authentication token
      localStorage.setItem("token", token);

      // Return to the page the user originally wanted to access
      const redirectTo = location.state?.from || "/";

      navigate(redirectTo, {
        replace: true,
      });
    } catch (error) {
      setError("root", {
        type: "server",
        message:
          error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <AuthShell
      eyebrow="IEEE EXCOM"
      title="Start Building"
      accent="Real Skills."
      description="Create your account and learn software engineering, cyber security, AI, and IoT by shipping real projects."
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
              JOIN COMMUNITY
            </p>
            <h2 className="text-xl font-bold text-white leading-tight">
              IEEE <span className="text-[#FF8C00]">Excom</span>
            </h2>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <AuthField
            id="register-name"
            label="Full name"
            type="text"
            icon={User}
            placeholder="Your name"
            autoComplete="name"
            error={errors.fullName?.message}
            {...register("fullName")}
          />
          <AuthField
            id="register-email"
            label="Email"
            type="email"
            icon={Mail}
            placeholder="you@ieee.org"
            autoComplete="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <AuthField
            id="register-password"
            label="Password"
            type="password"
            icon={Lock}
            placeholder="At least 8 characters"
            autoComplete="new-password"
            error={errors.password?.message}
            {...register("password")}
          />
          <AuthField
            id="register-confirm"
            label="Confirm password"
            type="password"
            icon={Lock}
            placeholder="Repeat your password"
            autoComplete="new-password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

          <div className="space-y-1.5">
            <label className="flex items-start gap-2 text-sm text-gray-300 cursor-pointer select-none">
              <input
                type="checkbox"
                className="mt-0.5 size-4 rounded border-white/20 bg-black/40 accent-[#FF8C00]"
                {...register("terms")}
              />
              <span>
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-[#FF8C00] hover:text-orange-400"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="text-[#FF8C00] hover:text-orange-400"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {errors.terms && (
              <p className="text-xs text-red-400">{errors.terms.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#FF8C00] hover:bg-orange-600 disabled:opacity-70 text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-orange-500/30 transition"
          >
            {isSubmitting ? "Creating account..." : "Join Community"}
          </motion.button>
        </form>

        <p className="mt-6 text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#FF8C00] hover:text-orange-400 font-semibold transition-colors"
          >
            Sign In
          </Link>
        </p>
      </div>
    </AuthShell>
  );
};

export default RegisterationPage;
