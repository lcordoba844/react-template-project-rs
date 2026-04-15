import Card from "../components/UI/Card";
import { propiedades } from "../data/propiedades";
import HeroCarousel from "../components/UI/HeroCarousel";
import { Link } from "react-router-dom";
import fallbackImg from "../assets/perfilFacebookPisaccoPropiedades.jpg";


export default function Home() {
  const propiedadesCard = propiedades.filter(prop => {
    const idNum = Number(prop.id);
    return idNum >= 1 && idNum <= 6;
  });

  return (
    <div className="flex-grow flex flex-col h-full">
      <div className="flex-grow flex-col">
        
        <HeroCarousel />

        {/* Smooth transition */}
        <div className="h-16 bg-gradient-to-b from-transparent to-slate-100 -mt-16 relative z-10" />

        {/* Section */}
        <div className="bg-slate-100 py-12">
          <div className="max-w-5x1 mx-auto px-6">

            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#112e3d]">
                Propiedades en <span className="text-[#db2754]">Venta</span>
              </h1>
              <p className="text-gray-500 mt-2">
                Explorá nuestras opciones
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {propiedadesCard.map((prop) =>(
                  <Link key={prop.id} to={`/fichaProp/${prop.id}`}>
                    <Card
                      id={prop.id}
                      tipo={prop.alquiler_venta}
                      titulo={prop.titulo}
                      ciudad={prop.ciudad}
                      direccion={prop.direccion}
                      imagen={prop.imagenes?.[0] || fallbackImg}
                      banos={prop.banos}
                      dormitorios={prop.dormitorios}
                      metros2={prop.metros2construidos}
                    />
                  </Link>  
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}