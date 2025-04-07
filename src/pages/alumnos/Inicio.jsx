import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaGamepad, FaCalendarAlt } from "react-icons/fa";
import educacion_digital from "../../assets/img/educacion_digital.webp";
import { useInView } from "react-intersection-observer";

function Inicio() {
  const [tituloref, tituloInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [card1Ref, card1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [card2Ref, card2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [card3Ref, card3InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [card4Ref, card4InView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Título principal */}
      <h1
        ref={tituloref}
        className={`text-4xl md:text-6xl font-bold text-center mb-12 text-negroPersonalizado transition-opacity duration-1000 ${
          tituloInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Bienvenido a EduSpark
      </h1>

      {/* Sección introductoria con imagen y texto */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        {/* Texto y botones */}
        <div
          ref={card1Ref}
          className={`flex-1 transition-opacity duration-1000 ${
            card1InView ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-semibold mb-6 text-negroPersonalizado">
            Descubre una nueva forma de aprender
          </h2>
          <p className="text-lg text-gray-700">
            Clases interactivas, juegos educativos y videollamadas para niños en edad escolar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/registrarse">
              <button className="bg-verdePersonalizado hover:bg-opacity-80 text-black px-6 py-2 rounded-lg shadow">
                Empieza ahora
              </button>
            </Link>
            <Link to="/clases">
              <button className="bg-moradoPersonalizado hover:bg-opacity-80 text-black px-6 py-2 rounded-lg shadow">
                Ver clases gratuitas
              </button>
            </Link>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex-1">
          <img
            src={educacion_digital}
            alt="Niños aprendiendo en línea"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Sección de cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 2 */}
        <div
          ref={card2Ref}
          className={`bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000 ${
            card2InView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-5xl text-moradoPersonalizado mb-6">
            <FaBookOpen />
          </div>
          <p className="text-gray-700 mb-4">
            Aprende con videos educativos diseñados para niños. Acceso sin interrupciones.
          </p>
          <Link to="/clases">
            <button className="bg-moradoPersonalizado hover:bg-opacity-80 text-black px-4 py-2 rounded">
              Ver más
            </button>
          </Link>
        </div>

        {/* Card 3 */}
        <div
          ref={card3Ref}
          className={`bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000 ${
            card3InView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-5xl text-verdePersonalizado mb-6">
            <FaGamepad />
          </div>
          <p className="text-gray-700 mb-4">
            Explora actividades divertidas para reforzar conocimientos.
          </p>
          <Link to="/juegos">
            <button className="bg-verdePersonalizado hover:bg-opacity-80 text-black px-4 py-2 rounded">
              Ver más
            </button>
          </Link>
        </div>

        {/* Card 4 */}
        <div
          ref={card4Ref}
          className={`bg-blancoPersonalizado shadow p-6 rounded-lg text-center transition-opacity duration-1000 ${
            card4InView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-5xl text-moradoPersonalizado mb-6">
            <FaCalendarAlt />
          </div>
          <p className="text-gray-700 mb-4">
            Conéctate en tutorías grupales. Interactúa con otros estudiantes.
          </p>
          <Link to="/videollamadas">
            <button className="bg-moradoPersonalizado hover:bg-opacity-80 text-black px-4 py-2 rounded">
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
