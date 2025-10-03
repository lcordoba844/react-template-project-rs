import React from 'react';
import perfilImage from '../assets/perfilFacebookPisaccoPropiedades.jpg';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section id="sobre-nosotros" className= "flex-grow h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#112e3d] text-center py-8">
          Sobre Nosotros
        </h1>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-2xl font-semibold text-[#112e3d] mb-4">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 mb-4">
              Pisacco Propiedades, fundada por Alejo Pisacco, lleva años ayudando a
              clientes a encontrar su hogar ideal en Santa Fe y Buenos Aires. Con
              sucursales en Wheelwright, Hughes, y Colón, nuestro compromiso es ofrecer
              un servicio inmobiliario transparente y confiable.
            </p>
            <h2 className="text-2xl font-semibold text-[#112e3d] mb-4">
              Lo que nos distingue
            </h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Atención personalizada para cada cliente.</li>
              <li>Experiencia en el mercado inmobiliario local.</li>
              <li>Compromiso con la satisfacción y confianza.</li>
            </ul>
            <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block bg-[#db2754] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#b72045] transition"
            >
              Contáctanos
            </Link> 
            </div>
          </div>
          {/* Imagen y equipo */}
          <div className="text-center">
            <img
              src={perfilImage}
              alt="Alejo Pisacco"
              className="h-40 w-40 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-medium text-[#112e3d]">
              Alejo Pisacco
            </h3>
            <p className="text-gray-600">
              Matriculado N°1814 Santa Fe
            </p>
            <p className="text-gray-600">
              T I Fº83 Nº248 C.M.P. Bs.As
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;