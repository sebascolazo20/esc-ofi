import React, { useState, useEffect } from "react";
import detallesCursosData from "../detalles_cursos.json"; // Asegúrate de tener este archivo con los detalles
import "../Categorias.css";

const DetallesCurso = () => {
  const [curso, setCurso] = useState(null);

  useEffect(() => {
    // Obtener el id del curso desde los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const cursoId = parseInt(params.get("cursoId"));

    // Filtrar el curso por ID
    const cursoSeleccionado = detallesCursosData.Cursos.find(curso => curso.id === cursoId);
    setCurso(cursoSeleccionado);
  }, []);

  if (!curso) {
    return <p>Cargando detalles del curso...</p>;
  }

  return (
    <div className="detalles-curso-container">
      <h1 className="detalles-curso-title">Curso de {curso.nombre}</h1>
      <div className="detalles-curso-content">
        <div className="detalles-curso-image">
          <img src={`/assets/${curso.imagen}`} alt={curso.nombre} />
        </div>
        <div className="detalles-curso-info">
          <p><strong>Duración:</strong> {curso.duracion}</p>
          <p><strong>Carga horaria total:</strong> {curso.cargaHoraria}</p>
          <p><strong>Días y horarios:</strong> {curso.diasHorarios}</p>
          <p><strong>Inicio:</strong> {curso.inicio}</p>
          <p><strong>Lugar:</strong> {curso.lugar}</p>
        </div>
      </div>
      <h2 className="detalles-curso-subtitle">Sobre el curso</h2>
      <p>{curso.sobre}</p>
      <h3>Al finalizar el curso:</h3>
      <ul>
        {curso.alFinalizar.map((logro, index) => (
          <li key={index}>{logro}</li>
        ))}
      </ul>
      <h3>Requisitos:</h3>
      <ul>
        {curso.requisitos.map((requisito, index) => (
          <li key={index}>{requisito}</li>
        ))}
      </ul>
      <button className="inscribirse-btn">Inscribirse</button>
    </div>
  );
};

export default DetallesCurso;
