import '/public/styles/coworking.css'

function Coworking(){
    return(
        <>
            <div className="coworking-container">
                <div className="description">
                    <div className="h2-container">
                        <h2>Espacio Coworking</h2>
                    </div>
                    <p>Ponemos a tu disposición un servicio exclusivo de reserva de sala de coworking, diseñado especialmente para empresarios de la zona que necesitan un espacio profesional, cómodo y funcional para llevar adelante sus actividades.</p>
                </div>
                <div className="chars">
                    <div className="item">
                        <i className="fa-solid fa-wifi"></i>
                        <h4>Espacio completamente equipado</h4>
                        <p>La sala cuenta con mobiliario ergonómico, conexión Wi-Fi de alta velocidad y equipos audiovisuales ideales para presentaciones o videoconferencias.</p>
                    </div>
                    <div className="item">
                        <i className="fa-solid fa-user-tie"></i>
                        <h4>Ambiente profesional</h4>
                        <p>Un entorno tranquilo, privado y diseñado específicamente para reuniones, trabajo individual o colaboración en equipo.</p>
                    </div>
                    <div className="item">
                        <i className="fa-solid fa-clock"></i>
                        <h4>Flexibilidad horaria</h4>
                        <p>Reserva por hora para adaptarse a las necesidades específicas de cada empresario de la comunidad.</p>
                    </div>
                    <div className="item">
                        <i className="fa-solid fa-lock"></i>
                        <h4>Acceso exclusivo</h4>
                        <p>Servicio pensado únicamente para empresarios locales, fomentando el desarrollo y la conexión empresarial en la zona.</p>
                    </div>
                </div>
                <div className="reserve">
                    <button>Reservar</button>
                </div>
            </div>
        </>
    )
}
export default Coworking