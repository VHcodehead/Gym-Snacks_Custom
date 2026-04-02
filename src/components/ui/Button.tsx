"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants = {
  primary: "bg-brand-pink text-white hover:bg-brand-pink-dark",
  secondary: "bg-brand-yellow text-brand-black hover:bg-brand-yellow-dark",
  dark: "bg-brand-black text-brand-yellow hover:bg-brand-black-soft",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-8 py-3 text-base",
  lg: "px-10 py-4 text-xl",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-display uppercase tracking-wide
    rounded-pill border-[3px] border-brand-black
    shadow-comic cursor-pointer select-none
    transition-colors duration-200
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;

  if (href) {
    // Use native <a> for hash links (cross-page scroll) and external URLs
    const isHashOrExternal = href.includes("#") || href.startsWith("http");
    const LinkComponent = isHashOrExternal ? "a" : Link;

    return (
      <motion.div
        whileHover={disabled ? {} : { scale: 1.05, y: -3 }}
        whileTap={disabled ? {} : { scale: 0.97 }}
      >
        <LinkComponent href={href} className={baseClasses}>
          {children}
        </LinkComponent>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.05, y: -3 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
}
