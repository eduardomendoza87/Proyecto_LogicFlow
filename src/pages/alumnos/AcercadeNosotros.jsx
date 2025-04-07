import React from "react";
import { useInView } from "react-intersection-observer";
import mision from "../../assets/img/mision_ucla.webp";
import vision from "../../assets/img/vision_ucla.webp";
import objetivos_ucla from "../../assets/img/objetivos_ucla.webp";
import beneficios_ucla from "../../assets/img/beneficios_ucla.webp";

function AcercadeNosotros() {
  const [acercaTref, acercaTInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [acerca1ref, acerca1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [acerca2ref, acerca2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [acerca3ref, acerca3InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [acerca4ref, acerca4InView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="container mx-auto p-6">
      {/* Título principal */}
      <h1
        ref={acercaTref}
        className={`text-6xl font-bold text-center mb-28 text-negroPersonalizado transition-opacity duration-1000 ${
          acercaTInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Acerca de nosotros
      </h1>

      {/* Secciones en formato grid */}
      <div className="space-y-28">

        {/* Misión */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div
            ref={acerca1ref}
            className={`bg-blancoPersonalizado p-6 text-center md:w-1/2 transition-opacity duration-1000 ${
              acerca1InView ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-semibold mb-10 text-negroPersonalizado">Misión</h2>
            <p className="text-lg text-negroPersonalizado">
              Brindar educación superior de calidad mediante la innovación tecnológica, 
              promoviendo el aprendizaje accesible y flexible para estudiantes de todo el país.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={mision} alt="Misión UCLA" className="w-3/4 h-auto object-cover rounded-lg" />
          </div>
        </section>

        {/* Visión */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div
            ref={acerca2ref}
            className={`bg-blancoPersonalizado p-6 text-center md:w-1/2 transition-opacity duration-1000 ${
              acerca2InView ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-semibold mb-10 text-negroPersonalizado">Visión</h2>
            <p className="text-lg text-negroPersonalizado">
              Convertirse en una universidad reconocida a nivel nacional por su modelo de enseñanza virtual, 
              integrando metodologías innovadoras y una gestión académica eficiente que beneficie tanto a estudiantes como docentes.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={vision} alt="Visión UCLA" className="w-3/4 h-auto object-cover rounded-lg" />
          </div>
        </section>

         {/* Objetivos */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <img src={objetivos_ucla} alt="Objetivos UCLA" className="w-3/4 h-auto object-cover rounded-lg" />
          </div>
          <div
            ref={acerca4ref}
            className={`bg-blancoPersonalizado p-8 rounded-lg text-center md:w-1/2 shadow-md transition-opacity duration-1000 ${
              acerca4InView ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold mb-6 text-negroPersonalizado">
              Objetivos de la Universidad en su transición digital
            </h3>
            <ul className="text-left text-lg space-y-3">
              <li>🎯 Optimizar la gestión académica y administrativa</li>
              <li>💡 Mejorar la capacitación del personal docente</li>
              <li>🌐 Expandir su alcance a nivel nacional</li>
              <li>🛠 Implementar un sistema LMS eficiente y funcional</li>
            </ul>
          </div>
        </section>
        {/* Beneficios */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <img src={beneficios_ucla} alt="Beneficios UCLA" className="w-3/4 h-auto object-cover rounded-lg" />
          </div>
          <div
            ref={acerca3ref}
            className={`bg-blancoPersonalizado p-8 rounded-lg text-center md:w-1/2 shadow-md transition-opacity duration-1000 ${
              acerca3InView ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold mb-6 text-negroPersonalizado">
              Beneficios de la modalidad virtual en UCLA
            </h3>
            <ul className="text-left text-lg space-y-3">
              <li>✅ Clases accesibles desde cualquier lugar</li>
              <li>🧠 Plataforma intuitiva y segura</li>
              <li>👨‍🏫 Acompañamiento docente en todo momento</li>
              <li>📱 Compatible con dispositivos móviles</li>
            </ul>
          </div>
        </section>

       

      </div>
    </div>
  );
}

export default AcercadeNosotros;
