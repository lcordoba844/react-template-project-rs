import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from '../assets/perfilFacebookPisaccoPropiedades.jpg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#112e3d] shadow-md fixed top-0 left-0 right-0 z-50">
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo + Nombre */}
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="logo" className="h-8 w-8 rounded-full" />
            <Link to="/" className="text-lg sm:text-xl font-semibold text-white">
              Pisacco Propiedades
            </Link>
          </div>

          {/* Mobile button */}
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-white/90 hover:text-white transition">
              Inicio
            </Link>
            <Link to="/about" className="text-white/90 hover:text-white transition">
              Sobre Nosotros
            </Link>
            <Link to="/contact" className="text-white/90 hover:text-white transition">
              Contacto
            </Link>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#112e3d] border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-3">
            <Link to="/" className="block text-white/90 hover:text-white">Inicio</Link>
            <Link to="/about" className="block text-white/90 hover:text-white">Sobre Nosotros</Link>
            <Link to="/contact" className="block text-white/90 hover:text-white">Contacto</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;