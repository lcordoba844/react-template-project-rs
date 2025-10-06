import ContactForm from "../components/ContactForm";
import HeroCarousel from "../components/UI/HeroCarousel";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* HeroCarousel como fondo */}
      <div className="relative h-[80vh]">
        <HeroCarousel />

        {/* Contenedor de dos columnas encima del carousel */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
            
            {/* Columna izquierda: texto sobre carousel */}
            <div className="flex items-center justify-center">
              <p className="text-black text-center text-lg sm:text-xl font-bold">
                Contáctanos para más información
              </p>
            </div>

            {/* Columna derecha: formulario con fondo blanco */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}