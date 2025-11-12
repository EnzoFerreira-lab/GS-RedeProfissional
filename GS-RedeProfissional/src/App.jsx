import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import ProfileModal from "./components/ProfileModal";
import profilesData from "./data/profissionais.json";

const STORAGE_KEY = "rp_counts_v1";

export default function App() {
  const [dark, setDark] = useState(true);
  const [busca, setBusca] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("All");
  const [perfilSelecionado, setPerfilSelecionado] = useState(null);
  const [counts, setCounts] = useState({});

  // Carregar contadores do localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setCounts(JSON.parse(saved));
  }, []);

  // Salvar contadores no localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));
  }, [counts]);

  // Função para busca
  function handleSearch(value) {
    setBusca(value);
  }

  // Função para filtro de área
  function handleFilter(category) {
    setCategoriaSelecionada(category);
  }

  // Abrir modal de perfil
  function handleOpenProfile(profile) {
    setPerfilSelecionado(profile);
  }

  // Fechar modal
  function handleCloseModal() {
    setPerfilSelecionado(null);
  }

  // Contadores fake (recomendações e mensagens)
  function getFakeCount(id) {
    if (!counts[id]) {
      const rec = Math.floor(Math.random() * 30);
      const msg = Math.floor(Math.random() * 50);
      setCounts((prev) => ({ ...prev, [id]: { rec, msg } }));
      return { rec, msg };
    }
    return counts[id];
  }

  // Aplicar busca e filtro
  const perfisFiltrados = profilesData.filter((p) => {
    const termo = busca.toLowerCase();
    const matchSearch =
      p.nome.toLowerCase().includes(termo) ||
      p.cargo.toLowerCase().includes(termo) ||
      p.habilidadesTecnicas.some((h) => h.toLowerCase().includes(termo));

    const matchCategory =
      categoriaSelecionada === "All" || p.area === categoriaSelecionada;

    return matchSearch && matchCategory;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: dark ? "#0f172a" : "#f1f5f9",
        color: dark ? "#f8fafc" : "#1e293b",
        transition: "all 0.3s ease",
      }}
    >
      <Navbar />

      <main style={{ padding: "40px 8%", maxWidth: "1400px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "8px" }}>
          Rede Profissional
        </h1>
        <p style={{ marginBottom: "30px" }}>
          Conectando pessoas e propósito — versão final
        </p>

        {/* Barra de busca e filtro */}
        <SearchBar
          dark={dark}
          onSearch={handleSearch}
          onFilter={handleFilter}
          onToggleTheme={() => setDark(!dark)}
        />

        {/* Quantidade de perfis */}
        <p style={{ marginBottom: "20px" }}>
          Mostrando <b>{perfisFiltrados.length}</b> de {profilesData.length} perfis
        </p>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {perfisFiltrados.map((p) => {
            const { rec, msg } = getFakeCount(p.id);
            return (
              <ProfileCard
                key={p.id}
                profile={p}
                rec={rec}
                msg={msg}
                dark={dark}
                onOpen={() => handleOpenProfile(p)}
              />
            );
          })}
        </div>
      </main>

      {/* Modal de Perfil */}
      <AnimatePresence>
        {perfilSelecionado && (
          <ProfileModal
            profile={perfilSelecionado}
            dark={dark}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
