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
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
      <img src={imagen} alt={direccion} className="w-full h-48 object-cover" />
      
      <div className="p-4">
        <p className="text-xs text-gray-500">PN_000{id} | {tipo}</p>
        <h2 className="text-lg font-bold mt-1">{titulo}</h2>
        <h3 className="text-sm font-medium">{ciudad}</h3>

        <div className="flex justify-between mt-4 text-gray-700">
          <div className="flex items-center gap-1">
            <FaBath className="text-blue-500" />
            <span>{banos}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaBed className="text-green-500" />
            <span>{dormitorios}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRulerCombined className="text-purple-500" />
            <span>{metros2} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;