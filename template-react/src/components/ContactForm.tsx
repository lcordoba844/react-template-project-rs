import { useState } from 'react';

interface FormData {
  name: string;
  mail: string;
  msg: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mail: '',
    msg: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsApp = () => {
    const phone = "542473455831";
    const message = `Nombre: ${formData.name}\nCorreo: ${formData.mail}\nMensaje: ${formData.msg}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  const handleEmail = () => {
    const email = "contacto@pisaccopropiedades.com";
    const subject = "Consulta desde Pisacco Propiedades";
    const body = `Nombre: ${formData.name}\nCorreo: ${formData.mail}\nMensaje: ${formData.msg}`;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <form className="w-full bg-white p-8 rounded-xl shadow-md space-y-6">
      
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Enviá tu consulta
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Completá el formulario y te responderemos a la brevedad
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#db2754] focus:border-transparent transition"
        />

        <input
          type="email"
          name="mail"
          placeholder="Correo electrónico"
          value={formData.mail}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#db2754] focus:border-transparent transition"
        />

        <textarea
          name="msg"
          rows={4}
          placeholder="Mensaje"
          value={formData.msg}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#db2754] focus:border-transparent transition resize-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        
        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex-1 bg-[#db2754] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#c0214a] transition"
        >
          Enviar por WhatsApp
        </button>

        <button
          type="button"
          onClick={handleEmail}
          className="flex-1 border border-[#db2754] text-[#db2754] py-3 px-4 rounded-lg font-medium hover:bg-[#db2754] hover:text-white transition"
        >
          Enviar por Email
        </button>

      </div>
    </form>
  );
};

export default ContactForm;