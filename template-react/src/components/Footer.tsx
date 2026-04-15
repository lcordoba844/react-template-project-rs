import { FaFacebook, FaInstagram, FaWhatsapp, FaMapPin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#db2754] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
          {/* Sucursales */}
          <div>
            <h2 className="font-semibold text-lg mb-4">
              Nuestras Sucursales
            </h2>

            <div className="flex flex-col gap-3 text-white/90 text-sm leading-relaxed">
              <div className="flex items-start gap-2">
                <FaMapPin className="text-white/70 mt-[2px]" />
                <p>Moreno 519, Wheelwright, Santa Fe.</p>
              </div>
              <div className="flex items-start gap-2">
                <FaMapPin className="text-white/70 mt-[2px]" />
                <p>19 e 45 y 46, n570, Colón, Bs As.</p>
              </div>
              <div className="flex items-start gap-2">
                <FaMapPin className="text-white/70 mt-[2px]" />
                <p>Tte. Santi N°638, Hughes Santa Fe.</p>
              </div>
            </div>
          </div>

          {/* Redes */}
          <div className='text-center'>
            <h2 className="font-semibold text-lg mb-4">
              Seguinos en redes
            </h2>

            <div className="flex items-center justify-center gap-6 text-white/80">
              <a href="https://www.facebook.com/profile.php?id=100039814275974" target="_blank">
                <FaFacebook className="hover:text-white hover:scale-110 transition duration-200 size-9" />
              </a>
              <a href="https://www.instagram.com/pisaccopropiedades/" target="_blank">
                <FaInstagram className="hover:text-white hover:scale-110 transition duration-200 size-9" />
              </a>
              <a href="https://wa.me/542473455831" target="_blank">
                <FaWhatsapp className="hover:text-white hover:scale-110 transition duration-200 size-9" />
              </a>
            </div>
          </div>

          {/* Info */}
          <div className='text-right pr-1'>
            <h2 className="font-semibold text-lg mb-4">
              Pisacco Propiedades
            </h2>

            <div className="text-white/90 text-sm leading-relaxed">
              <p>Matriculado Alejo Pisacco</p>
              <p>Mat. N°1814 Santa Fe</p>
              <p>T I Fº83 Nº248 C.M.P. Bs.As</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Pisacco Propiedades — Todos los derechos reservados
        </div>

      </div>
    </footer>
  );
};

export default Footer
