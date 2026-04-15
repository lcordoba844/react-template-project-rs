import type { FC } from "react";
import { FaBath, FaBed, FaRulerCombined } from "react-icons/fa";

interface CardProps {
  id: string;
  direccion: string;
  titulo: string;
  ciudad: string;
  tipo: string;
  imagen: string;
  banos: string;
  dormitorios: string;
  metros2: string;
}

const Card: FC<CardProps> = ({ id, direccion, titulo, ciudad, tipo, imagen, banos, dormitorios, metros2 }) => {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">
      
      <div className="relative">
        <img src={imagen} alt={direccion} className="w-full h-48 object-cover" />

        <span className="absolute top-3 left-3 bg-[#db2754] text-white text-xs px-2 py-1 rounded-md shadow">
          {tipo}
        </span>
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-400">
          PN_000{id}
        </p>

        <h2 className="text-lg font-semibold text-gray-800 mt-1 line-clamp-2">
          {titulo}
        </h2>

        <p className="text-sm text-gray-500">
          {ciudad}
        </p>

        <div className="border-t mt-4 pt-3">
          <div className="flex justify-between text-gray-600 text-sm">
            <div className="flex items-center gap-1">
              <FaBath />
              <span>{banos}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaBed />
              <span>{dormitorios}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaRulerCombined />
              <span>{metros2} m²</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;