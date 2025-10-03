import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    msg: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const phone = "542473455831";
    const message = `Nombre: ${formData.name}\nCorreo: ${formData.mail}\nMensaje: ${formData.msg}`;
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(waLink, '_blank');
  };

  const handleEmail = () => {
    const email = "contacto@pisaccopropiedades.com";
    const subject = "Consulta desde Pisacco Propiedades";
    const body = `Nombre: ${formData.name}\nCorreo: ${formData.mail}\nMensaje: ${formData.msg}`;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="contactForm" className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 sm:py-16 bg-gray-50">
      <div className="flex items-center justify-center text-black px-4">
        <p className="text-center text-base sm:text-lg font-semibold">Contáctanos para más información</p>
      </div>
      <div>
        <div className="p-4">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <h1 className="font-bold text-lg">Contactate</h1>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="mail"
                className="block text-sm font-medium text-gray-700"
              >
                Mail
              </label>
              <input
                type="email"
                id="mail"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="msg"
                className="block text-sm font-medium text-gray-700"
              >
                Describa la propiedad a buscar:
              </label>
              <textarea
                id="msg"
                name="msg"
                rows="4"
                value={formData.msg}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
              >
                Enviar por WhatsApp
              </button>
              <button
                type="button"
                onClick={handleEmail}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-900 transition"
              >
                Enviar por Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;