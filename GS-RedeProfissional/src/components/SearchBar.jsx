import React, { useState } from "react";

export default function SearchBar({ onSearch, onFilter, onToggleTheme, dark }) {
  const [term, setTerm] = useState("");
  const categorias = [
    "All",
    "Tecnologia",
    "Design",
    "Finanças",
    "Saúde",
    "Educação",
    "Sustentabilidade",
  ];

  function handleSearch(e) {
    const value = e.target.value;
    setTerm(value);
    if (onSearch) onSearch(value);
  }

  function handleFilter(e) {
    if (onFilter) onFilter(e.target.value);
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      {/* Campo de busca */}
      <div
        style={{
          flex: "1 1 300px",
          maxWidth: "400px",
          background: dark
            ? "rgba(255,255,255,0.08)"
            : "rgba(0,0,0,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          padding: "8px 12px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "18px", height: "18px", color: "#94a3b8" }}
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          value={term}
          onChange={handleSearch}
          placeholder="Pesquisar por nome, cargo ou skill..."
          style={{
            flex: 1,
            border: "none",
            background: "transparent",
            color: dark ? "#f8fafc" : "#1e293b",
            outline: "none",
            marginLeft: "8px",
            fontSize: "0.9rem",
          }}
        />
      </div>

      {/* Filtro de categorias */}
      <select
        onChange={handleFilter}
        style={{
          padding: "8px 12px",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.1)",
          background: dark
            ? "rgba(255,255,255,0.08)"
            : "rgba(0,0,0,0.05)",
          color: dark ? "#f8fafc" : "#1e293b",
          fontSize: "0.9rem",
        }}
      >
        {categorias.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Botão modo claro/escuro */}
      <button
        onClick={onToggleTheme}
        style={{
          padding: "8px 12px",
          borderRadius: "8px",
          border: "none",
          background: dark
            ? "linear-gradient(90deg, #4f46e5, #6366f1)"
            : "linear-gradient(90deg, #818cf8, #a5b4fc)",
          color: "#fff",
          cursor: "pointer",
          fontWeight: 500,
          transition: "0.3s",
        }}
      >
        {dark ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
      </button>
    </div>
  );
}
