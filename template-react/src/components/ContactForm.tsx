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
    <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Contactate</h1>

      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="email"
        name="mail"
        placeholder="Mail"
        value={formData.mail}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        name="msg"
        rows={4}
        placeholder="Mensaje"
        value={formData.msg}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex gap-4">
        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
        >
          WhatsApp
        </button>
        <button
          type="button"
          onClick={handleEmail}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-900 transition"
        >
          Email
        </button>
      </div>
    </form>
  );
};

export default ContactForm;