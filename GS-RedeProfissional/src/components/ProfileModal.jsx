import React from "react";
import { motion } from "framer-motion";

export default function ProfileModal({ profile, dark, onClose }) {
  if (!profile) return null;

  const bg = dark ? "#0f172a" : "#ffffff";
  const text = dark ? "#f8fafc" : "#1e293b";
  const card = dark ? "#1e293b" : "#f8fafc";
  const tag = dark ? "#334155" : "#e2e8f0";
  const accent = "#6366f1";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.65)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          background: bg,
          color: text,
          width: "90%",
          maxWidth: "700px",
          borderRadius: "18px",
          padding: "28px",
          boxShadow: dark
            ? "0 0 20px rgba(255,255,255,0.1)"
            : "0 0 20px rgba(0,0,0,0.15)",
          overflowY: "auto",
          maxHeight: "85vh",
        }}
      >
        {/* Cabeçalho */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            <img
              src={profile.foto}
              alt={profile.nome}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div>
              <h2 style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                {profile.nome}
              </h2>
              <p style={{ fontSize: "1rem" }}>
                {profile.cargo} • {profile.localizacao}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: text,
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            ✖
          </button>
        </div>

        <p style={{ marginBottom: "20px" }}>{profile.resumo}</p>

        {/* Habilidades técnicas */}
        <section style={{ marginBottom: "18px" }}>
          <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>
            Habilidades Técnicas
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {profile.habilidadesTecnicas?.map((h, i) => (
              <span
                key={i}
                style={{
                  background: tag,
                  padding: "5px 12px",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                }}
              >
                {h}
              </span>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section style={{ marginBottom: "18px" }}>
          <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>Soft Skills</h3>
          <p>{profile.softSkills?.join(", ")}</p>
        </section>

        {/* Experiências */}
        <section style={{ marginBottom: "18px" }}>
          <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>Experiências</h3>
          {profile.experiencias?.map((exp, i) => (
            <div
              key={i}
              style={{
                background: card,
                padding: "10px 14px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              <strong>{exp.cargo}</strong> — {exp.empresa}
              <br />
              <small>
                {exp.inicio} → {exp.fim}
              </small>
              <p style={{ marginTop: "6px", fontSize: "0.9rem" }}>
                {exp.descricao}
              </p>
            </div>
          ))}
        </section>

        {/* Formação */}
        <section style={{ marginBottom: "18px" }}>
          <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>Formação</h3>
          {profile.formacao?.map((f, i) => (
            <p key={i}>
              🎓 {f.curso} — {f.instituicao} ({f.ano})
            </p>
          ))}
        </section>

        {/* Projetos */}
        {profile.projetos?.length > 0 && (
          <section style={{ marginBottom: "18px" }}>
            <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>Projetos</h3>
            {profile.projetos.map((p, i) => (
              <div key={i}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: accent,
                    fontWeight: "500",
                    textDecoration: "none",
                  }}
                >
                  {p.titulo}
                </a>
                <p style={{ fontSize: "0.9rem" }}>{p.descricao}</p>
              </div>
            ))}
          </section>
        )}

        {/* Recomendar e Enviar mensagem */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              background: accent,
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "8px 14px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            💬 Recomendar
          </button>
          <input
            placeholder="Escreva uma mensagem..."
            style={{
              flex: 1,
              padding: "8px 10px",
              borderRadius: "8px",
              border: `1px solid ${dark ? "#334155" : "#cbd5e1"}`,
              background: dark ? "#1e293b" : "#fff",
              color: text,
            }}
          />
          <button
            style={{
              background: dark ? "#334155" : "#e2e8f0",
              border: "none",
              borderRadius: "8px",
              padding: "8px 14px",
              cursor: "pointer",
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </motion.div>
  );
}
