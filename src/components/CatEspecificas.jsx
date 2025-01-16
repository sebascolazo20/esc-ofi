import React, { useState, useEffect } from "react";
import cursosData from "../cursos.json";
import categoriasData from "../Categorias.json";
import "../Categorias.css";

const CatEspecificas = () => {
  const [cursos, setCursos] = useState([]);
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoriaId = parseInt(params.get("categoriaId"));

    // Filtrar cursos por categoría
    const cursosFiltrados = cursosData.cursos.filter((curso) =>
      curso.categoriaIds.includes(categoriaId)
    );
    setCursos(cursosFiltrados);

    // Obtener el nombre de la categoría
    const categoriaSeleccionada = categoriasData.categorias.find(
      (categoria) => categoria.id === categoriaId
    );
    if (categoriaSeleccionada) {
      setCategoria(categoriaSeleccionada.nombre);
    }
  }, []);

  return (
    <div className="categorias-container">
      <h1 className="categorias-title">{categoria} - Cursos Específicos</h1>
      <div className="categorias-gallery">
        {cursos.map((curso) => (
          <div key={curso.id} className="categoria-card">
            <img
              src={`/assets/${curso.imagen}`}
              alt={curso.nombre}
              className="categoria-image"
            />
            <div className="categoria-overlay">
              <h2 className="categoria-nombre">{curso.nombre}</h2>
              <p className="categoria-fecha">
                Fecha de inicio: {curso.fechaInicio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatEspecificas;
