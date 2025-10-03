import { FaFacebook, FaInstagram, FaWhatsapp, FaMapPin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#db2754] '>
        <p className='font-bold text-lg pl-8 pt-4 text-white'></p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            <div>
                <h1 className='font-bold text-lg pl-4 text-white underline'>Nuestras Sucursales</h1>
                <div className="p-4 rounded shadow text-white flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <FaMapPin className="text-blue-500" />
                        <p>Moreno 519, Wheelwright, Santa Fe.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMapPin className="text-blue-500" />
                        <p>19 e 45 y 46, n570, Colón, Bs As.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMapPin className="text-blue-500" />
                        <p>Tte. Santi N°638, Hughes Santa Fe.</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg pl-4 text-white underline'>Seguinos en redes</h1>
                <div className=" p-6 rounded shadow flex items-center justify-around text-white h-[120px]">
                    <a className='pl-4' href="https://www.facebook.com/profile.php?id=100039814275974" target="_blank" rel="Opens and refer Facebook">
                        <FaFacebook className="hover:text-blue-600 transition size-12" />
                    </a>
                    <a  href="https://www.instagram.com/pisaccopropiedades/" target="_blank" rel="Opens and refer Instagram">
                        <FaInstagram className="hover:text-pink-500 transition size-12 " />
                    </a>
                    <a className='pr-4' href="https://wa.me/542473455831" target="_blank" rel="Opens and refer Whatsapp">
                        <FaWhatsapp className="hover:text-green-500 transition size-12" />
                    </a>
                </div>
            </div>
            <div>
                <p className='font-bold text-lg pl-4 text-white underline'>Pisacco Propiedades</p>
                <div className=" p-6 rounded shadow text-white">
                    <p>Matriculado Alejo Pisacco</p>
                    <p>Mat. N°1814 Santa Fe</p>
                    <p>T I Fº83 Nº248 C.M.P. Bs.As</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
