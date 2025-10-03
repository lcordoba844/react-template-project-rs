import Card from "../components/UI/Card";
import { propiedades } from "../data/propiedades";
import HeroCarousel from "../components/UI/HeroCarousel";
import { Link } from "react-router-dom";

export default function Home() {
    const propiedadesCard = propiedades.filter(prop => {
      const idNum = Number(prop.id);
      return idNum >= 1 && idNum <=6;
    });
    return (
    <div className="flex-grow flex flex-col h-full">
      <div className="flex-grow flex-col">
        <HeroCarousel />
        <h1 className="text-2xl sm:text-3xl font-bold text-[#112e3d] text-center p-8">Propiedades en Venta</h1>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {propiedadesCard.map((prop) =>(
            <div key={prop.id} className="w-[384px]">
              <Link to={`/fichaProp/${prop.id}`}>
                <Card
                  id={prop.id}
                  tipo={prop.alquiler_venta}
                  direccion={prop.direccion}
                  imagen={prop.imagen}
                  banos= {prop.banos}
                  dormitorios={prop.dormitorios}
                  metros2={prop.metros2construidos}
                  />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}