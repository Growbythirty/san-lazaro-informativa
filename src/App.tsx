import { useState, useCallback, type ReactNode } from "react";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Consejo from "./pages/Consejo";

type Page = "home" | "historia" | "consejo";

const tabs: { id: Page; label: string; icon: ReactNode }[] = [
  {
    id: "home",
    label: "Inicio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "historia",
    label: "Historia",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "consejo",
    label: "Consejo de Gobierno",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
];

export default function App() {
  const [activePage, setActivePage] = useState<Page>("home");

  const navigate = useCallback((page: string) => {
    setActivePage(page as Page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__brand">
            <img
              src="/PNG/ESCUDO_ORDEN_SAN_LAZARO.png"
              alt="Escudo"
              className="topbar__logo"
            />
            <span className="topbar__name">
              Orden Militar y Hospitalaria de San Lazaro
              <br />
              Capitulo Venezuela
            </span>
          </div>
          <span className="topbar__info">
            Informacion Institucional &middot; 2026
          </span>
        </div>
      </div>

      {/* NAV TABS */}
      <nav className="sitenav" role="tablist">
        <div className="container sitenav__inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`sitenav__tab${activePage === tab.id ? " is-active" : ""}`}
              role="tab"
              aria-selected={activePage === tab.id}
              onClick={() => navigate(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* PAGE CONTENT */}
      {activePage === "home" && <Home onNavigate={navigate} />}
      {activePage === "historia" && <Historia />}
      {activePage === "consejo" && <Consejo />}

      {/* FOOTER */}
      <footer className="sitefooter">
        <div className="container sitefooter__inner">
          <div className="sitefooter__brand">
            <img
              src="/PNG/ESCUDO_ORDEN_SAN_LAZARO.png"
              alt="Escudo"
              className="sitefooter__logo"
            />
            <span className="sitefooter__name">
              Orden Militar y Hospitalaria
              <br />
              de San Lazaro &middot; Venezuela
            </span>
          </div>
          <p className="sitefooter__copy">
            &copy; 2026 &middot; Capitulo Venezuela &middot; Todos los derechos
            reservados
          </p>
          <img
            src="/PNG/sello_de_la_orden.png"
            alt="Sello"
            className="sitefooter__seal"
          />
        </div>
      </footer>
    </>
  );
}
