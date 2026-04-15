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
      
      {/* Section */}
      <div className="bg-slate-100 pt-16 pb-10">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="mb-6">
            <p className="text-sm text-gray-500">
              PN_000{prop.id} | {prop.tipo}
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#112e3d]">
              {prop.titulo}
            </h1>
            <p className="text-gray-500">
              {prop.barrio} · {prop.ciudad} · {prop.provincia}
            </p>
          </div>

          {/* Gallery */}
          {images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
              
              {/* Main image */}
              <img
                src={images[0]}
                alt="Principal"
                className="md:col-span-2 h-[300px] sm:h-[400px] w-full object-cover rounded-xl"
              />

              {/* Side images */}
              <div className="grid grid-cols-2 gap-3">
                {images.slice(1, 5).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`img-${i}`}
                    className="h-[145px] sm:h-[195px] w-full object-cover rounded-xl"
                  />
                ))}
              </div>

            </div>
          )}

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT: Info */}
            <div className="lg:col-span-2 space-y-6">

              {/* Price card */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-sm text-gray-500">{prop.alquiler_venta}</p>
                <h2 className="text-2xl font-bold text-[#db2754]">
                  {prop.precio}
                </h2>
              </div>

              {/* General info */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold mb-4">
                  Información General
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700">
                  <p>Ambientes: {prop.ambientes}</p>
                  <p>Dormitorios: {prop.dormitorios}</p>
                  <p>Baños: {prop.banos}</p>
                  <p>M2: {prop.metros2construidos}</p>
                  <p>Antigüedad: {prop.antiguedad}</p>
                  <p>Condición: {prop.condicion}</p>
                  <p>Plantas: {prop.plantas}</p>
                  <p>Cochera: {prop.cochera}</p>
                </div>
              </div>

              {/* Services */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold mb-4">
                  Servicios
                </h2>

                <ul className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
                  {prop.servicios.map((servicio, index) => (
                    <li key={index}>• {servicio}</li>
                  ))}
                </ul>
              </div>

            </div>

            {/* RIGHT: Map */}
            <div className="bg-white p-4 rounded-xl shadow-md h-fit">
              <h2 className="text-lg font-semibold mb-4">
                Ubicación
              </h2>

              <div className="w-full h-64 rounded overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps?q=${prop.lat},${prop.lng}&hl=es&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}