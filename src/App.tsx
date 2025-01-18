import React, { useState } from 'react';
import { Phone, Clock, Car, Key, Battery, MapPin, Mail, Send, Globe } from 'lucide-react';

interface ServiceRequest {
  name: string;
  phone: string;
  service: 'lockout' | 'jumpstart';
  carDetails: string;
  location: string;
  description: string;
}

const translations = {
  en: {
    title: "24/7 Emergency Vehicle Services",
    subtitle: "Fast & Reliable Lockout Assistance & Jump Start Services in Des Moines",
    callNow: "Call Now",
    services: "Our Services",
    lockoutService: "Vehicle Lockout Service",
    lockoutDesc: "Professional lockout assistance for all vehicle makes and models. Quick response time to get you back on the road.",
    jumpService: "Jump Start Service",
    jumpDesc: "Dead battery? We'll come to you and get your vehicle started quickly and safely.",
    hoursTitle: "Hours of Operation",
    contact: "Contact Information",
    serving: "Serving Greater Des Moines Area",
    requestService: "Request Service",
    name: "Name",
    phone: "Phone",
    serviceNeeded: "Service Needed",
    lockoutOption: "Lockout Service",
    jumpstartOption: "Jump Start",
    vehicleDetails: "Vehicle Details",
    vehiclePlaceholder: "Year, Make, Model",
    location: "Location",
    description: "Description of Issue",
    submit: "Submit Request",
    footer: "© 2024 Emergency Vehicle Services. Serving Des Moines 24/7 for your assistance.",
    days: {
      monFri: "Monday - Friday",
      sat: "Saturday",
      sun: "Sunday",
      overnight: "Overnight Service",
      evening: "Evening Service"
    },
    hours: {
      weekday: {
        overnight: "12:00 AM - 7:00 AM",
        evening: "5:00 PM - 12:00 AM"
      },
      weekend: "24 Hours"
    },
    thankYou: "Thank you! We will contact you shortly."
  },
  es: {
    title: "Servicios de Emergencia para Vehículos 24/7",
    subtitle: "Servicio Rápido y Confiable de Cerrajería y Arranque de Batería en Des Moines",
    callNow: "Llamar Ahora",
    services: "Nuestros Servicios",
    lockoutService: "Servicio de Cerrajería",
    lockoutDesc: "Asistencia profesional de cerrajería para todas las marcas y modelos. Tiempo de respuesta rápido para que vuelvas a la carretera.",
    jumpService: "Servicio de Arranque de Batería",
    jumpDesc: "¿Batería descargada? Vamos a tu ubicación y arrancamos tu vehículo de manera rápida y segura.",
    hoursTitle: "Horario de Atención",
    contact: "Información de Contacto",
    serving: "Sirviendo el Área de Des Moines",
    requestService: "Solicitar Servicio",
    name: "Nombre",
    phone: "Teléfono",
    serviceNeeded: "Servicio Necesario",
    lockoutOption: "Servicio de Cerrajería",
    jumpstartOption: "Arranque de Batería",
    vehicleDetails: "Detalles del Vehículo",
    vehiclePlaceholder: "Año, Marca, Modelo",
    location: "Ubicación",
    description: "Descripción del Problema",
    submit: "Enviar Solicitud",
    footer: "© 2024 Servicios de Emergencia para Vehículos. Sirviendo Des Moines 24/7 para su asistencia.",
    days: {
      monFri: "Lunes - Viernes",
      sat: "Sábado",
      sun: "Domingo",
      overnight: "Servicio Nocturno",
      evening: "Servicio Vespertino"
    },
    hours: {
      weekday: {
        overnight: "12:00 AM - 7:00 AM",
        evening: "5:00 PM - 12:00 AM"
      },
      weekend: "24 Horas"
    },
    thankYou: "¡Gracias! Nos pondremos en contacto pronto."
  }
};

function App() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const t = translations[language];

  const [formData, setFormData] = useState<ServiceRequest>({
    name: '',
    phone: '',
    service: 'lockout',
    carDetails: '',
    location: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Service Request - ${formData.service}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Vehicle: ${formData.carDetails}
Location: ${formData.location}
Description: ${formData.description}
    `);
    
    window.location.href = `mailto:support@desmoines.com?subject=${subject}&body=${body}`;
    alert(t.thankYou);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Language Toggle */}
      <div className="fixed top-2 right-2 z-50 sm:top-4 sm:right-4">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors text-sm sm:text-base"
        >
          <Globe size={18} className="text-blue-600" />
          <span className="font-medium">{language === 'en' ? 'Español' : 'English'}</span>
        </button>
      </div>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">{t.title}</h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">{t.subtitle}</p>
          <div className="flex gap-4">
            <a href="tel:+15153058807" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-blue-600 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base">
              <Phone size={18} className="sm:size-20" />
              {t.callNow}
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-8 sm:py-16 container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">{t.services}</h2>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <Key className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">{t.lockoutService}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{t.lockoutDesc}</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <Battery className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">{t.jumpService}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{t.jumpDesc}</p>
          </div>
        </div>
      </section>

      {/* Hours & Contact */}
      <section className="bg-gray-100 py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                <Clock className="text-blue-600" />
                {t.hoursTitle}
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">{t.days.monFri}</h4>
                  <div className="space-y-1 text-sm sm:text-base text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-blue-600" />
                      <span className="font-medium">{t.days.overnight}:</span>
                      <span>{t.hours.weekday.overnight}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-blue-600" />
                      <span className="font-medium">{t.days.evening}:</span>
                      <span>{t.hours.weekday.evening}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">{t.days.sat} & {t.days.sun}</h4>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
                    <Clock size={16} className="text-blue-600" />
                    <span>{t.hours.weekend}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                <Phone className="text-blue-600" />
                {t.contact}
              </h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p className="flex items-center gap-2">
                  <Phone size={18} className="text-blue-600" />
                  (515) 305-8807
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={18} className="text-blue-600" />
                  support@desmoines.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={18} className="text-blue-600" />
                  {t.serving}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="py-8 sm:py-16 container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">{t.requestService}</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t.name}</label>
              <input
                type="text"
                required
                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t.phone}</label>
              <input
                type="tel"
                required
                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t.serviceNeeded}</label>
              <select
                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value as 'lockout' | 'jumpstart'})}
              >
                <option value="lockout">{t.lockoutOption}</option>
                <option value="jumpstart">{t.jumpstartOption}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t.vehicleDetails}</label>
              <input
                type="text"
                placeholder={t.vehiclePlaceholder}
                required
                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                value={formData.carDetails}
                onChange={(e) => setFormData({...formData, carDetails: e.target.value})}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t.location}</label>
              <input
                type="text"
                required
                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t.description}</label>
              <textarea
                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 sm:mt-6 w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Send size={18} />
            {t.submit}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center text-sm sm:text-base">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;