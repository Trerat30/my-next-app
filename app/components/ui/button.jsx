"use client";
import React from "react";
import clsx from "clsx";

export function Button({ children, onClick, variant = "default", className = "button" }) {
  const baseStyles =
    "px-4 py-2 font-medium rounded-lg transition-all duration-200";

  const variants = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    outline:
      "border border-purple-600 text-purple-700 bg-white hover:bg-purple-100",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
}
