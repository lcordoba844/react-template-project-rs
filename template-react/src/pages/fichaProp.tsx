import { useParams } from "react-router-dom";
import { propiedades } from "../data/propiedades";
import { useEffect } from "react";

export default function FichaProp() {
  useEffect(() => {
    document.title = "Ficha de Propiedad";
  }, []);

  const { id } = useParams<{ id: string }>();
  const prop = propiedades.find(d => d.id.toString() === id);

  if (!prop)
    return (
      <p className="text-center mt-10 text-red-500">
        Propiedad no encontrada
      </p>
    );

  const images = prop.imagenes || []; // puede tener 1 o más elementos

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-300 pb-4 px-6 flex items-center justify-between">
        <div className="border-2 p-2 rounded border-green-200 text-xs font-light">
          Ficha de propiedad
        </div>
      </div>

      {/* Main */}
      <main className="flex-grow p-4">
        {/* Galería de imágenes */}
        {images.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {/* Primera imagen grande */}
            <img
              src={images[0]}
              alt="Principal"
              className="w-260 h-64 sm:h-80 object-cover rounded"
            />

            {/* Resto de imágenes */}
            {images.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Imagen ${i + 2}`}
                className="w-1/2 sm:w-1/3 lg:w-1/4 h-32 sm:h-40 object-contain rounded"
              />
            ))}
          </div>
        )}

        {/* Información de la propiedad */}
        <div className="flex flex-col p-8 text-[130%]">
            <div>
            <p className="font-light text-sm">PN_000{prop.id} | {prop.tipo}</p>
            <h1 className="font-bold">{prop.titulo}</h1>
            <p className="font-light text-sm">
                {prop.barrio} | {prop.ciudad} | {prop.provincia}
            </p>
            <p>{prop.alquiler_venta}</p>
            <p>Precio: {prop.precio}</p>
            </div>
            <div className="flex flex-col py-8">
                <div>
                    <h2 className="font-bold pt-2 pb-2">Información General</h2>
                </div>
                <div className="flex gap-4 flex-wrap">
                    <div className="flex flex-col gap-1">
                        <p>Ambientes: {prop.ambientes}</p>
                        <p>Habitaciones: {prop.dormitorios}</p>
                        <p>Baños: {prop.banos}</p>
                        <p>M2: {prop.metros2construidos}</p>
                    </div>
                    <div className="flex flex-col gap-1 px-10">
                        <p>Antiguedad: {prop.antiguedad}</p>
                        <p>Condición: {prop.condicion}</p>
                        <p>Categoría Edificio: {prop.categoriaEdificio}</p>
                        <p>Plantas: {prop.plantas}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Orientación: {prop.orientacion}</p>
                        <p>Tipo de piso: {prop.tipoDePiso}</p>
                        <p>Cochera: {prop.cochera}</p>
                    </div>
                </div>
            </div>
          {/* Servicios */}
          <div className="">
            <h2 className="text-lg font-semibold mt-4">Servicios:</h2>
            <ul className="list-disc pl-5">
              {prop.servicios.map((servicio, index) => (
                <li key={index} className="text-gray-600">
                  {servicio}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-96 mt-8">
            <iframe
              src={`https://www.google.com/maps?q=${prop.lat},${prop.lng}&hl=es&z=15&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        Powered by Luquitas Cor - © 2025
      </footer>
    </div>
  );
}