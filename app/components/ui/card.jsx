"use client";
import React from "react";

export function Card({ children, className = "card" }) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "card" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
