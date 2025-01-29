import '/public/styles/institucion.css'

function Institucion(){
    return(
        <>
        <div className="wave-container">
            <div className="content">
            <div className="wave-extension"></div>
                <header className="header">
                    <h2>Conocé nuestra Institución</h2>
                </header>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0076d6" fillOpacity="1" d="M0,96L80,128C160,160,320,224,480,234.7C640,245,800,203,960,176C1120,149,1280,139,1360,133.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                <div className="content-text">
                    <div className="nuestra-historia">
                        <h3>Nuestra Historia</h3>
                        <div className="nuestra-historia-p">
                            <p>
                                Fundada en el año 1990, nuestra institución ha sido un pilar en la educación comunitaria durante más de tres décadas. Desde sus humildes comienzos, con un pequeño equipo de docentes dedicados, hemos crecido para convertirnos en una de las organizaciones más respetadas de la región.  Fundada en el año 1990, nuestra institución ha sido un pilar en la educación comunitaria durante más de tres décadas. Desde sus humildes comienzos, con un pequeño equipo de docentes dedicados, hemos crecido para convertirnos en una de las organizaciones más respetadas de la región. 
                            </p>
                            <p>
                                Fundada en el año 1990, nuestra institución ha sido un pilar en la educación comunitaria durante más de tres décadas. Desde sus humildes comienzos, con un pequeño equipo de docentes dedicados, hemos crecido para convertirnos en una de las organizaciones más respetadas de la región. Fundada en el año 1990, nuestra institución ha sido un pilar en la educación comunitaria durante más de tres décadas. Desde sus humildes comienzos, con un pequeño equipo de docentes dedicados, hemos crecido para convertirnos en una de las organizaciones más respetadas de la región.
                            </p>
                            
                        </div>
                    </div>
                    <div className="mision-vision">
                        <div className="image">
                            <img src="/public/assets/oficios/carpinteria.jpg" alt="" />
                        </div>
                        <div className='text'>
                            <h3>Misión y Visión</h3>
                            <p>Nuestra misión es transformar vidas a través de la educación de calidad, proporcionando herramientas prácticas y conocimientos para el desarrollo personal y profesional. Nuestra visión es ser reconocidos como líderes en la formación educativa y el impacto social en la comunidad. <br /> En nuestra institución valoramos la integridad, el respeto, la inclusión y el compromiso con el aprendizaje continuo. Creemos en la importancia de fomentar un ambiente donde todos puedan prosperar y alcanzar su máximo potencial.</p>
                        </div>
                    </div>
                    <div className="album">
                        <h3>Galeria</h3>
                        <div className="responsive-container-block bg">
                            <div className="responsive-container-block img-cont">
                            <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.4.svg" />
                            <img className="img" src="/public/assets/oficios/carpinteria-2.jpg" />
                            <img className="img" src="/public/assets/oficios/cerrajeria.jpg" />
                            <img className="img img-last" src="/public/assets/oficios/carpinteria.jpg" />
                            </div>
                            <div className="responsive-container-block img-cont">
                            <img className="img img-big" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.11.svg" />
                            <img className="img " src="/public/assets/oficios/pintureria.jpg" />
                            <img className="img img-big img-last" src="/public/assets/oficios/electricista-2.webp" />
                            </div>
                            <div className="responsive-container-block img-cont">
                            <img className="img" src="/public/assets/oficios/electricista.jpg" />
                            <img className="img" src="/public/assets/oficios/panaderia.jpg" />
                            <img className="img" src="/public/assets/oficios/albañileria.webp" />
                            <img className="img" src="/public/assets/oficios/plomeria.png" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Institucion;