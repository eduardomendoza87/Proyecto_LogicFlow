import React from "react";

function Footer() {
    return (
        <footer className="bg-cafe2Personalizado p-4 font-sans">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                
                {/* Derechos Reservados */}
                <div>
                    <p>{new Date().getFullYear()} UCLA. Todos los derechos reservados</p>
                </div>
                
                {/* Redes Sociales */}
                <div className="flex items-center space-x-4">
                    <a href="https://www.facebook.com/share/1AEaMfHDMB/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800"> Facebook </a>
                    <a href="https://x.com/Eduardo61914147?s=08" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800"> Twitter </a>
                    <a href="https://www.instagram.com/eduardomendoza960?igsh=MWhkNjl2eDAyY283" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800"> Instagram </a>
                </div>

                {/* Contacto */}
                <div className="flex items-center space-x-4">
                    <a href="mailto:eduardomendoza7473@gmail.com" aria-label="Enviar correo a EduSpark" className="hover:text-gray-800"> Correo </a>
                    <a href="tel:+1234567890" aria-label="Llamar a EduSpark" className="hover:text-gray-800"> Teléfono </a>
                </div>

                {/* Políticas */}
                <div className="flex space-x-4">
                    <a href="/politica-privacidad" className="hover:text-gray-800">Política de privacidad</a>
                    <a href="/terminos-condiciones" className="hover:text-gray-800">Términos y condiciones</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;