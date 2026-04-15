import perfilImage from '../assets/perfilFacebookPisaccoPropiedades.jpg';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/UI/HeroCarousel';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
          
          {/* Hero */}
          <HeroCarousel />
    
          {/* SAME gradient transition as Home */}
          <div className="h-16 bg-gradient-to-b from-transparent to-slate-100 -mt-16 relative z-10" />

        <section className="bg-slate-100 py-16">
          
          <div className="max-w-6xl mx-auto px-6">

            {/* Título */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#112e3d]">
                Sobre Nosotros
              </h1>
            </div>

            {/* Contenido */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Texto */}
              <div>
                <h2 className="text-2xl font-semibold text-[#112e3d] mb-4">
                  Nuestra Historia
                </h2>
                <p className="text-gray-600 mb-6">
                  Pisacco Propiedades, fundada por Alejo Pisacco, lleva años ayudando a
                  clientes a encontrar su hogar ideal en Santa Fe y Buenos Aires...
                </p>

                <h2 className="text-2xl font-semibold text-[#112e3d] mb-4">
                  Lo que nos distingue
                </h2>

                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Atención personalizada para cada cliente.</li>
                  <li>Experiencia en el mercado inmobiliario local.</li>
                  <li>Compromiso con la satisfacción y confianza.</li>
                </ul>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-block bg-[#db2754] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#b72045] transition"
                  >
                    Contactanos
                  </Link>
                </div>
              </div>

              {/* Imagen */}
              <div className="text-center">
                <img
                  src={perfilImage}
                  alt="Alejo Pisacco"
                  className="h-44 w-44 rounded-full mx-auto mb-4 object-cover shadow-md"
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
      </div>
      );
    };

export default AboutUs;