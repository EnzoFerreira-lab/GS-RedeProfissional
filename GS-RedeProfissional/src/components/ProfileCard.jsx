// src/components/ProfileCard.jsx
import React from "react";

export default function ProfileCard({ profile, rec, msg, dark, onOpen }) {
  return (
    <div
      style={{
        background: dark ? "#1e293b" : "#ffffff",
        color: dark ? "#f8fafc" : "#1e293b",
        borderRadius: "16px",
        padding: "16px",
        boxShadow: dark
          ? "0 2px 10px rgba(0,0,0,0.4)"
          : "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
        <img
          src={profile.foto}
          alt={profile.nome}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            marginRight: "12px",
          }}
        />
        <div>
          <h3 style={{ fontWeight: "bold" }}>{profile.nome}</h3>
          <p style={{ fontSize: "0.9rem" }}>
            {profile.cargo} • {profile.localizacao}
          </p>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right", fontSize: "0.85rem" }}>
          <div>Rec: {rec}</div>
          <div>Msg: {msg}</div>
        </div>
      </div>

      <p style={{ fontSize: "0.9rem", marginBottom: "10px" }}>{profile.resumo}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {profile.habilidadesTecnicas.map((h, i) => (
          <span
            key={i}
            style={{
              background: dark ? "#334155" : "#e2e8f0",
              padding: "4px 10px",
              borderRadius: "8px",
              fontSize: "0.8rem",
            }}
          >
            {h}
          </span>
        ))}
      </div>

      <button
        onClick={() => onOpen(profile)}
        style={{
          marginTop: "12px",
          background: dark ? "#6366f1" : "#4f46e5",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "6px 14px",
          cursor: "pointer",
          float: "right",
        }}
      >
        Ver perfil
      </button>
    </div>
  );
}
