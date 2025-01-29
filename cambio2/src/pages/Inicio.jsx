import '/public/styles/index.css'

function Inicio(){
    return(
        <>
            <div className="content">
                <div className="hero-image">
                    <div className="imagen-fondo"></div>
                    <div className="texto">
                    <h1>Accede a formacion practica y gratuita para desarrollar tu futuro profesional.</h1>
                    <h3>Ofrecemos cursos prácticos en diversas areas, diseñados para brindarte las habilidades necesarias para ingresar al mundo laboral. Accede a una formación de calidad, gratis, y potencia tu futuro</h3>
                    <a href="/cursos"><button>Ver Cursos Disponibles</button></a>
                    </div>
                </div>
                <div className="cursos-section">
                    <div className="content">
                        <div className="texto">
                            <h4>INSCRIBITE AHORA</h4>
                            <h2>Transforma tus metas en logros</h2>
                        </div>
                        <div className="cards">
                            <div className="card-curso" onClick="location.href='/curso-detalle'">
                                <img src='/public/assets/cursos/categorias/construccion.jpeg' alt='Curso de carpinteria'/>
                                <div className="contenido">
                                    <div className="nombre">Introducción a la Construccion</div>
                                    <div className="fecha">
                                        <span>8 semanas</span> - <span>15 de febrero, 2025</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-curso" onClick="location.href='/curso-detalle'">
                                <img src='/public/assets/inicio/carpinteria.jpg' alt='Curso de carpinteria'/>
                                <div className="contenido">
                                    <div className="nombre">Introducción a la Carpinteria</div>
                                    <div className="fecha">
                                        <span>8 semanas</span> - <span>15 de febrero, 2025</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-curso" onClick="location.href='/curso-detalle'">
                                <img src='/public/assets/cursos/categorias/Herreria.jpeg' alt='Curso de carpinteria'/>
                                <div className="contenido">
                                    <div className="nombre">Introducción a la Herreria</div>
                                    <div className="fecha">
                                        <span>8 semanas</span> - <span>15 de febrero, 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="/cursos"><button>Ver Mas Cursos</button></a>
                    </div>
                </div>


                

                <div className="empresas-section">
                    <div className="content">
                        <div className="texto">
                            <h2>Espacios de Coworking para Empresas</h2>
                            <h4>Descubrí el lugar ideal para conectar, crear y crecer. Ofrecemos ambientes modernos y flexibles en el corazón de la ciudad, diseñados para potenciar la productividad y la colaboración entre profesionales.</h4>
                            <button><a href="/coworking">Descubre soluciones empresariales</a></button>
                        </div>
                        <div className="imagen">
                            <img src="/public/assets/inicio/coworking.jpg" alt="Coworking image" />
                        </div>
                    </div>
                </div>
                
                <div className="info-section">
                    <div className="content">
                        <div className="logos">
                            <img src="/public/assets/inicio/vc.png" alt="" />
                            <img src="/public/assets/inicio/unr.png" alt="" />
                        </div>
                        <div className="titulo">
                            <h2>Un Acuerdo para Impulsar el Desarrollo Local</h2>
                        </div>
                        <div className="separacion"></div>
                        <div className="descripcion">
                            <p>La <strong>Universidad Nacional de Rosario</strong> y la <strong>Municipalidad de Villa Constitución</strong> se unen en un acuerdo estratégico para promover la innovación, el conocimiento y el crecimiento sostenible en la región. Este acuerdo fortalece la colaboración, generando oportunidades para toda la comunidad. <br /> A través de este convenio, se busca fomentar la creación de proyectos colaborativos, impulsar el desarrollo económico y mejorar la calidad de vida de los habitantes mediante el intercambio de recursos y conocimientos. Además, se brindarán espacios y herramientas para que los empresarios locales puedan acceder a un entorno de trabajo ideal para el crecimiento de sus iniciativas. <a href="/institucion">Ver más...</a></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Inicio