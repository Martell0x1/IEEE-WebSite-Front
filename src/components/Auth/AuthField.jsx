import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const AuthField = forwardRef(function AuthField(
  { id, label, type = "text", icon: Icon, error, autoComplete, ...props },
  ref,
) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="space-y-1.5 text-left">
      <label htmlFor={id} className="text-sm font-medium text-gray-300">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        )}
        <input
          id={id}
          ref={ref}
          autoComplete={autoComplete}
          className={`w-full bg-black/40 border rounded-xl py-3 text-sm text-white placeholder:text-gray-500 outline-none transition backdrop-blur-md ${
            Icon ? "pl-11" : "pl-4"
          } ${isPassword ? "pr-11" : "pr-4"} ${
            error
              ? "border-red-500/60 focus:border-red-400"
              : "border-white/20 focus:border-[#FF8C00]"
          }`}
          {...props}
          type={inputType}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#FF8C00] transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
});

export default AuthField;
