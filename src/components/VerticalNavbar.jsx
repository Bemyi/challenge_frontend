import { NavLink } from "react-router-dom";
import DropdownNavLink from "./Task/DropdownNavLink";

const VerticalNavbar = () => {
  const navLinks = [
    { title: "Presupuesto", subtitles: ["Configuracion", "Formulacion"] },
    { title: "CAS" },
    { title: "Planificación" },
    { title: "Contrataciones" },
    { title: "Portal" },
    { title: "Contabilidad" },
    { title: "Tesorería" },
    { title: "Bienes Físicos" },
    { title: "Inversión Pública" },
    { title: "Crédito Público" },
    { title: "Ingresos Públicos" },
    { title: "Recursos Humanos" },
  ];
  return (
    <div className="page-container">
      <nav
        className="navbar navbar-expand-lg navbar-light bs-side-navbar"
        style={{ backgroundColor: "#12416F" }}
      >
        <p className="text-left" style={{ color: "white" }}>
          Desarrollado por RAFAM 2021
        </p>
        <p className="text-left" style={{ color: "white" }}>
          v4.12.3
        </p>
        <hr style={{ color: "white" }} />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto flex-column">
            <li className="nav-item ">
              <NavLink className="nav-link" href="#" style={{ color: "white" }}>
                Inicio
              </NavLink>
            </li>
            {navLinks.map((link, index) => (
              <li className="nav-item dropdown">
                <DropdownNavLink
                  title={link.title}
                  subtitles={link.subtitles}
                />
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <p style={{ color: "white" }}>(0221) 429-448/4509</p>
        <p style={{ color: "white" }}>pa@es.gov.ar</p>
      </nav>
    </div>
  );
};

export default VerticalNavbar;
