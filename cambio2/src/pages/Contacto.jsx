import '/public/styles/contacto.css'

function Contacto(){
    return(
        <>
            <div className="contact-form">
                <h1 className="contact-form-title">Contactanos</h1>
                <form method="post" action="https://script.google.com/macros/s/AKfycbzCBWRiRyvorQil-Cmr0lU_OG67UYi_EGcmlQ8AcMHPfEjfa7-uHQBFdmJesMRxyrIGPg/exec">
                    <label htmlFor="nombre" className="label-nombre">
                        Nombre
                        <input type="text" id="nombre" required minLength="1" />
                    </label>
                    <label htmlFor="email" className="label-email">
                        Email
                        <input type="email" id="email" required minLength="1" />
                    </label>
                    <label htmlFor="telefono" className="label-telefono">
                        Telefono
                        <input type="tel" id="telefono" required minLength="1" />
                    </label>
                    <label htmlFor="mensaje" className="label-mensaje">
                        Mensaje
                        <textarea required minLength="1" name="" id="" cols="30" rows="10"></textarea>
                    </label>
                    <button>Enviar</button>
                </form>
            </div>
            
            <div className="separacion"></div>

            <div className="contact-info">
                <h3>Datos de Contacto</h3>
                <ul>
                <li><strong>Email:</strong> <a href="mailto:contacto@ejemplo.com">contacto@ejemplo.com</a></li>
                <li><strong>Dirección:</strong> Avenida siempreviva 123, Ciudad, País</li>
                <li><strong>Teléfono:</strong> <a href="tel:+123456789">+12 345 6789</a></li>
                </ul>
            </div>

            <div className="separacion"></div>

            <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.0620598625996!2d-60.32936531771675!3d-33.226888919195126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1737391317968!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>            
            </div>
        </>
    )
}
export default Contacto