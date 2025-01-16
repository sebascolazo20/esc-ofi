import React, { useState } from 'react';
import categoriasData from '../Categorias.json';
import cursosData from '../cursos.json';
import '../Categorias.css';
import Footer from './Footer';

const Categorias = () => {
  const [categorias] = useState(categoriasData.Categorias);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [cursos, setCursos] = useState([]);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  const handleClickCategoria = (categoriaId) => {
    if (categoriaId === 8) {
      setCategoriaSeleccionada({ nombre: "Todos" });
      setCursos(cursosData.Cursos);
    } else {
      const categoria = categorias.find((cat) => cat.id === categoriaId);
      if (categoria) {
        setCategoriaSeleccionada(categoria);
        const cursosFiltrados = cursosData.Cursos.filter((curso) =>
          Array.isArray(curso.categoriaIds) && curso.categoriaIds.includes(categoriaId)
        );
        setCursos(cursosFiltrados);
      }
    }
  };

  const handleClickCurso = (cursoId) => {
    const curso = cursos.find((curso) => curso.id === cursoId);  // Verificar si el curso existe
    if (curso) {
      setCursoSeleccionado(curso);  // Establecer el curso seleccionado
    } else {
      console.error('Curso no encontrado');  // En caso de no encontrar el curso, muestra un error en consola
    }
  };

  const handleVolverCategorias = () => {
    setCategoriaSeleccionada(null);  // Volver a la vista de categorías
    setCursos([]);
    setCursoSeleccionado(null);
  };

  const handleVolverCursos = () => {
    if (categoriaSeleccionada) {
      const categoriaId = categoriaSeleccionada.id;
      const cursosFiltrados = cursosData.Cursos.filter((curso) =>
        Array.isArray(curso.categoriaIds) && curso.categoriaIds.includes(categoriaId)
      );
      setCursos(cursosFiltrados);
      setCursoSeleccionado(null);  // Limpiar la selección del curso
    }
  };

  return (
    <div id="root">
      <div className="categorias-container">
        {cursoSeleccionado ? (
          <>
            <button className="volver-btn" onClick={handleVolverCursos}>Volver a los cursos de la categoría</button>
            <h1 className="categorias-title">{cursoSeleccionado.nombre}</h1>
            <div className="curso-detalle">
              <img
                src={`/assets/${cursoSeleccionado.imagen}`}
                alt={cursoSeleccionado.nombre}
                className="curso-imagen"
              />
              <div className="curso-info">
                <h2>Detalles del curso</h2>
                <p><strong>Duración:</strong> {cursoSeleccionado.duracion}</p>
                <p><strong>Carga horaria total:</strong> {cursoSeleccionado.cargaHoraria}</p>
                <p><strong>Días y horarios:</strong> {cursoSeleccionado.diasHorarios}</p>
                <p><strong>Inicio:</strong> {cursoSeleccionado.inicio}</p>
                <p><strong>Lugar:</strong> {cursoSeleccionado.lugar}</p>
                <h3>Sobre el curso:</h3>
                <p>{cursoSeleccionado.descripcion}</p>
                <h3>Al finalizar el curso:</h3>
                <ul>
                  {cursoSeleccionado.logros && cursoSeleccionado.logros.length > 0 ? (
                    cursoSeleccionado.logros.map((logro, index) => (
                      <li key={index}>{logro}</li>
                    ))
                  ) : (
                    <li>No hay logros listados.</li>
                  )}
                </ul>
                <h3>Requisitos:</h3>
                <ul>
                  {cursoSeleccionado.requisitos && cursoSeleccionado.requisitos.length > 0 ? (
                    cursoSeleccionado.requisitos.map((requisito, index) => (
                      <li key={index}>{requisito}</li>
                    ))
                  ) : (
                    <li>No hay requisitos listados.</li>
                  )}
                </ul>
                <button className="inscribirse-btn">Inscribirse</button>
              </div>
            </div>
          </>
        ) : categoriaSeleccionada ? (
          <>
            <button className="volver-btn" onClick={handleVolverCategorias}>Volver a las categorías</button>
            <h1 className="categorias-title">{categoriaSeleccionada.nombre} - Cursos</h1>
            <div className="categorias-gallery">
              {cursos.length > 0 ? (
                cursos.map((curso) => (
                  <div key={curso.id} className="categoria-card" onClick={() => handleClickCurso(curso.id)}>
                    <img
                      src={`/assets/${curso.imagen}`}
                      alt={curso.nombre}
                      className="categoria-image"
                    />
                    <div className="categoria-overlay">
                      <h2 className="categoria-nombre">{curso.nombre}</h2>
                      <p className="categoria-fecha">Fecha de inicio: {curso.inicio}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No hay cursos disponibles para esta categoría.</p>
              )}
            </div>
          </>
        ) : (
          <>
            <h1 className="categorias-title">Categorías</h1>
            <div className="categorias-gallery">
              {categorias.map((categoria) => (
                <div key={categoria.id} className="categoria-card" onClick={() => handleClickCategoria(categoria.id)}>
                  <img
                    src={`/assets/${categoria.imagen}`}
                    alt={categoria.nombre}
                    className="categoria-image"
                  />
                  <div className="categoria-overlay">
                    <h2 className="categoria-nombre">{categoria.nombre}</h2>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Categorias;
