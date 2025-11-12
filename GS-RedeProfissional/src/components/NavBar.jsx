// src/components/Navbar.jsx
import React from "react";

export default function Navbar({ dark }) {
  return (
    <nav
      style={{
        background: dark ? "#0f172a" : "#f8fafc",
        boxShadow: dark
          ? "0 1px 8px rgba(255,255,255,0.05)"
          : "0 1px 8px rgba(0,0,0,0.1)",
        color: dark ? "#f1f5f9" : "#1e293b",
        padding: "14px 8%",
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.1rem",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            background: dark ? "#6366f1" : "#4f46e5",
            color: "#fff",
            padding: "6px 10px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          RP
        </span>
        Rede Profissional
      </div>
    </nav>
  );
}
