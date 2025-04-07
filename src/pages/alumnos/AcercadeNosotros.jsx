import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import educacion_digital_2 from "../../assets/img/educacion_digital_2.webp";
import Logo_EduSpark2 from "../../assets/img/Logo_EduSpark2.png"; // Asegúrate de que la ruta sea correcta
import educacion_digital_3 from "../../assets/img/educacion_digital_3.webp";
import objetivos_eduspark from "../../assets/img/objetivos_eduspark.webp";
import beneficios_eduspark from "../../assets/img/beneficios_eduspark.webp";

function AcercadeNosotros() {
  const [acercaTref, acercaTInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [acerca1ref, acerca1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [acerca2ref, acerca2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [acerca3ref, acerca3InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [acerca4ref, acerca4InView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="container mx-auto p-6">
      {/* Sección principal */}
      <h1
        ref={acercaTref}
        className={`text-6xl font-bold text-center mb-28 text-negroPersonalizado transition-opacity duration-1000 ${
          acercaTInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Acerca de nosotros
      </h1>

      {/* Contenedores de las cards */}
      <div className="grid md:grid-cols-2 gap-20 place-items-center">
        
        {/* Misión (Imagen a la derecha) */}
        <div className="md:col-span-2 flex flex-col md:flex-row items-center gap-20">
          <div
            ref={acerca1ref}
            className={`bg-blancoPersonalizado p-6 text-center md:w-1/2 transition-opacity duration-1000 ${
              acerca1InView ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-semibold mb-10 text-negroPersonalizado">Misión</h2>
            <p className="text-lg text-negroPersonalizado">
              Brindar a niños de preescolar y primaria una plataforma educativa accesible, interactiva y
              divertida, combinando aprendizaje con tecnología para mejorar su desarrollo académico y 
              creatividad.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={educacion_digital_2} alt="Educación digital" className="w-3/4 h-auto object-cover rounded-lg"/>
          </div>
        </div>

        {/* Visión (Imagen a la izquierda) */}
        <div className="md:col-span-2 flex flex-col md:flex-row-reverse items-center gap-20">
          <div
            ref={acerca2ref}
            className={`bg-blancoPersonalizado p-6 text-center md:w-1/2 transition-opacity duration-1000 ${
              acerca2InView ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-semibold mb-10 text-negroPersonalizado">Visión</h2>
            <p className="text-lg text-negroPersonalizado">
              Ser la plataforma líder en educación digital para niños, 
              revolucionando la manera en que aprenden a través de clases 
              dinámicas, juegos interactivos y tutorías en línea accesibles para todos.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={educacion_digital_3} alt="Educación digital creativa" className="w-3/4 h-auto object-cover rounded-lg"/>
          </div>
        </div>

        {/* Beneficios y Objetivos con diseño alineado correctamente */}
        <div className="flex flex-col items-center w-full mt-12 space-y-16 px-6">

          {/* Beneficios de EduSpark (Imagen Izquierda - Texto Derecha) */}
          <div className="md:col-span-2 flex flex-col md:flex-row items-center gap-20">
            {/* Imagen */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={beneficios_eduspark} className="w-3/4 h-auto object-cover rounded-lg"/>
            </div>
            
            {/* Contenido */}
            <div className="bg-blancoPersonalizado p-8 rounded-lg text-center md:w-1/2 shadow-md">
              <h3 className="text-3xl font-bold mb-6 text-negroPersonalizado">
                Beneficios de EduSpark
              </h3>
              <ul className="text-left text-lg space-y-3">
                <li>✅ Aprendizaje Divertido</li>
                <li>🔓 Acceso sin Registro</li>
                <li>🎥 Tutorías Grupales</li>
              </ul>
            </div>
          </div>

          {/* Objetivos de EduSpark (Imagen Derecha - Texto Izquierda) */}
          <div className="md:col-span-2 flex flex-col md:flex-row-reverse items-center gap-20">
            {/* Imagen */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={objetivos_eduspark} className="w-3/4 h-auto object-cover rounded-lg"/>
            </div>
            
            {/* Contenido */}
            <div className="bg-blancoPersonalizado p-8 rounded-lg text-center md:w-1/2 shadow-md">
              <h3 className="text-3xl font-bold mb-6 text-negroPersonalizado">
                Objetivos de EduSpark
              </h3>
              <ul className="text-left text-lg space-y-3">
                <li>🎯 Facilitar el acceso</li>
                <li>🚀 Integrar tecnología</li>
                <li>🎨 Fomentar la creatividad</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AcercadeNosotros;
