import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from '../assets/perfilFacebookPisaccoPropiedades.jpg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#112e3d] shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Nombre */}
          <div className="flex items-center">
            <img src={logoImage} alt="img" className="h-8 w-8 mr-2 rounded-full" />
            <Link to="/" className="text-xl font-semibold text-white">Pisacco Propiedades</Link>
          </div>

          {/* Botón Hamburguesa en mobile */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-blue-600 transition">Inicio</Link>
            <Link to="/about" className="text-white hover:text-blue-600 transition">Sobre Nosotros</Link>
            <Link to="/contact" className="text-white hover:text-blue-600 transition">Contacto</Link>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#112e3d] px-4 pb-4 space-y-2 shadow-md">
          <Link to="/" className="block text-white hover:text-blue-600">Inicio</Link>
          <Link to="/contact" className="block text-white hover:text-blue-600">Contacto</Link>
          <Link to="/about" className="block text-white hover:text-blue-600">Sobre Nosotros</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;