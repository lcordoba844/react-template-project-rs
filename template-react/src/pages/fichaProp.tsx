import { useParams } from "react-router-dom";
import fotoDpto from "../assets/Screenshot 2025-10-01 at 17.03.29.png"
import dptoLourdes from "../assets/DptoBarrioLourdes.png"
import { Menu, X } from "lucide-react"
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapPin } from 'react-icons/fa';

import { propiedades } from "../data/propiedades";
import { useEffect } from "react";

export default function FichaProp() {
    useEffect(() => {
    document.title = "Ficha de Propiedad";
  }, []);
  const { id } = useParams<{ id: string }>();
  const prop = propiedades.find(d => d.id.toString() === id);

  if (!prop) return <p className="text-center mt-10 text-red-500">Propiedad no encontrada</p>;
  
  return (
    <div className="flex flex-col min-h-screen">
        <div className="border-b border-gray-300 pb-4 px-6 flex items-center justify-between">
            <div className="height=26px border-2 p-2 pt-2 rounded border-green-200 items-center text-xs font-light"> 
                Ficha de propiedad
            </div>
        </div>
        <main className="flex-grow p-4">
            <div>
                <div className="flex p-6 pl-0 gap-2">
                    <img 
                        src= {dptoLourdes}
                        alt=""
                        className="w-full pl-2 pr-2 h-60 object-cover rounded">
                    </img>
                    <img 
                        src={dptoLourdes}
                        alt=""
                        className="w-full pl-2 pr-2 h-60 object-cover rounded">
                    </img>
                    <img 
                        src={fotoDpto}
                        alt=""
                        className="w-full pl-2 pr-2 h-60 object-cover rounded">
                    </img>
                    <img 
                        src={fotoDpto}
                        alt=""
                        className="w-full pl-2 pr-2 h-60 object-cover rounded">
                    </img>
                </div>
                <div className="flex flex-col p-2">
                    <p className="font-light text-sm">PN_000{prop.id} | Departamento</p>
                    <h1 className="font-bold">{ prop.direccion} </h1>
                    <p className="font-light text-sm">{prop.barrio} | {prop.ciudad} | {prop.provincia} </p>
                    <p>{prop.alquiler_venta}</p>
                    <p>Precio: {prop.precio}</p>
                    <h2 className="font-bold pt-2 pb-2">Información General</h2>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1">
                            <p>Ambientes: {prop.ambientes}</p>
                            <p>Habitaciones: {prop.dormitorios}</p>
                            <p>Baños: {prop.banos}</p>
                            <p>M2: {prop.metros2construidos}</p>
                        </div>
                        <div className="flex flex-col gap-1">
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
                    <div>
                        <h2 className="text-lg font-semibold mt-4">Servicios:</h2>
                        <ul className="list-disc pl-5">
                            {prop.servicios.map((servicio, index) => (
                                <li key={index} className="text-gray-600">
                                    {servicio}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
           Powered by Luquitas Cor -  © 2025
        </footer>
    </div>
  )
};
