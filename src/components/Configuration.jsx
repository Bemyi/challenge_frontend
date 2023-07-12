import React from "react";
import Box from "./Task/Box";

const Configuration = () => {
  const info = [
    {
      title: "Nuevo Ejercicio",
      description:
        "Generar el nuevo Ejercicio fiscal para formular el Presupuesto",
      subtitles: [],
    },
    {
      title: "Anteproyecto",
      description: "Administrar la información de anteproyectos",
      subtitles: [],
    },
    {
      title: "Clasificadores Primarios",
      description: "Administrar la información de los clasificadores primarios",
      subtitles: [
        "Clasificador Institucional",
        "Estructura Programática",
        "Recursos por Rubro",
        "Gastos por Objeto",
        "Fuentes de Financiamiento",
      ],
    },
    {
      title: "Clasificadores Agregador",
      description: "Administrar la información de los clasificadores Agregados",
      subtitles: [
        "Recursos por Origen y Procedencia",
        "Recursos por Carácter Económico",
        "Gastos por Finalidad y Función",
        "Gastos por Carácter Económico",
      ],
    },
    {
      title: "Reglas Presupuestarias",
      description: "Administrar la información de Reglas Presupuestarias",
      subtitles: [],
    },
  ];

  const info2 = [
    {
      title: "Categorías Programáticas",
      description: "Administra la información de Categorías Programáticas",
      subtitles: [],
    },
    {
      title: "Causas de Desvíos",
      description: "Administrar la información de Unidades Ejecutoras",
      subtitles: [],
    },
    {
      title: "Clasificadores Primarios",
      description:
        "Administrar la información de las Causas Operativas, Financieras y conclusiones",
      subtitles: ["Financieras", "Operativas", "Conclusiones"],
    },
    {
      title: "Tablas Referenciales",
      description:
        "Administrar la información de las Tablas Referenciales del Módulo Presupuesto",
      subtitles: [
        "Unidades de Medida",
        "Gastos Prioritarios",
        "Motivos Reglas Presupuestarias",
      ],
    },
    {
      title: "Reglas Presupuestarias",
      description: "Administrar la información de Reglas Presupuestarias",
      subtitles: [],
    },
  ];
  return (
    <>
      <div className="content">
        <div className="container">
          <h1 style={{ color: "#3D3E40", fontSize: "32px" }}>Configuración</h1>
          <div className="row">
            <div className="col-md-6">
              {info.map((link, index) => (
                <Box
                  title={link.title}
                  description={link.description}
                  subtitles={link.subtitles}
                />
              ))}
            </div>
            <div className="col-md-6">
              {info2.map((link, index) => (
                <Box
                  title={link.title}
                  description={link.description}
                  subtitles={link.subtitles}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Configuration;
