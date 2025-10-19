"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, CheckCircle2, Globe, FileText, Users, Award } from "lucide-react";

export default function Home() {
  const [logoSrc] = useState("/logo.png");
  const [logoFailed, setLogoFailed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });
  const [formErrors, setFormErrors] = useState<{
  nombre?: string;
  email?: string;
  mensaje?: string;
}>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // ACTUALIZA ESTOS DATOS CON TUS DATOS REALES
  const contactInfo = {
    whatsapp: "573134809376",
    email: "traduccionesinnova@gmail.com",
    telefono: "+57 313 480 9376",
    direccion: "Bogotá, Colombia"
  };

  const whatsappLink = `https://wa.me/${contactInfo.whatsapp}?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20de%20traducci%C3%B3n`;
  const emailLink = `mailto:${contactInfo.email}?subject=Solicitud%20de%20traducci%C3%B3n&body=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios.`;

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const errors: any = {};
    
    if (!formData.nombre.trim()) {
      errors.nombre = "El nombre es requerido";
    }
    
    if (!formData.email.trim()) {
      errors.email = "El correo es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Ingresa un correo válido";
    }
    
    if (!formData.mensaje.trim()) {
      errors.mensaje = "El mensaje es requerido";
    }
    
    return errors;
  };

  const handleSubmit = () => {
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const mensaje = `Hola, soy ${formData.nombre}%0A%0ACorreo: ${formData.email}%0A%0AMensaje: ${formData.mensaje}`;
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${mensaje}`;
    
    window.open(whatsappUrl, '_blank');
    
    setFormSubmitted(true);
    
    setFormData({
      nombre: "",
      email: "",
      mensaje: ""
    });
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="flex justify-between items-center px-4 md:px-8 py-4">
          <div className="flex items-center space-x-3">
            {!logoFailed ? (
              <img
                src={logoSrc}
                alt="Logo de Innova Traducciones SAS"
                width={60}
                height={60}
                className="rounded-full object-cover"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <svg
                width="60"
                height="60"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-full bg-[#047857] p-1"
              >
                <rect width="120" height="120" rx="18" fill="#4A154B" />
                <text x="50%" y="56%" textAnchor="middle" fill="#fff" fontSize="36" fontFamily="Arial, sans-serif" fontWeight="700">IT</text>
              </svg>
            )}

            <h1 className="text-xl md:text-2xl font-semibold text-[#4A154B]">Innova Traducciones SAS</h1>
          </div>

          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <button onClick={() => scrollToSection('inicio')} className="hover:text-[#4A154B] transition-colors">Inicio</button>
            <button onClick={() => scrollToSection('servicios')} className="hover:text-[#4A154B] transition-colors">Servicios</button>
            <button onClick={() => scrollToSection('nosotros')} className="hover:text-[#4A154B] transition-colors">Nosotros</button>
            <button onClick={() => scrollToSection('contacto')} className="hover:text-[#4A154B] transition-colors">Contacto</button>
          </nav>

          <div className="flex items-center space-x-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button className="bg-[#4A154B] text-white hover:bg-[#661E65] rounded-full px-6 py-2 transition-all">
                Solicitar cotización
              </Button>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#4A154B] hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="flex flex-col space-y-1 px-4 py-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">Inicio</button>
                <button onClick={() => scrollToSection('servicios')} className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">Servicios</button>
                <button onClick={() => scrollToSection('nosotros')} className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">Nosotros</button>
                <button onClick={() => scrollToSection('contacto')} className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">Contacto</button>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block mt-2">
                  <Button className="bg-[#4A154B] text-white hover:bg-[#661E65] rounded-full w-full py-3">
                    Solicitar cotización
                  </Button>
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <div className="h-20"></div>

      <section 
  id="inicio" 
  className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-12 md:py-20 overflow-hidden"
  style={{
    backgroundImage: 'url(/hero-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  {/* Overlay semitransparente para que el texto se lea bien */}
  <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
  
  {/* Contenido encima del fondo */}
  <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0B1F3A] leading-tight">
            Tu puente de confianza entre idiomas
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Traducciones oficiales y certificadas con precisión, confidencialidad y excelencia profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href={emailLink}>
              <Button className="bg-[#C5A45B] text-white hover:bg-[#b1914f] px-6 py-3 rounded-full transition-all hover:scale-105">
                Solicita tu traducción
              </Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-[#4A154B] text-[#4A154B] hover:bg-[#4A154B] hover:text-white px-6 py-3 rounded-full transition-all">
                <Phone size={18} className="mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 md:mt-0"
        >
          <div className="w-[280px] md:w-[360px] h-[280px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
            <svg width="240" height="240" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect x="0" y="0" width="300" height="300" rx="20" fill="#ffffff" />
              <g transform="translate(30,40)">
                <rect width="240" height="30" rx="6" fill="#0B1F3A" />
                <rect y="60" width="200" height="10" rx="6" fill="#EDEBEC" />
                <rect y="80" width="160" height="10" rx="6" fill="#F3F3F3" />
                <rect y="100" width="120" height="10" rx="6" fill="#F3F3F3" />
                <circle cx="200" cy="180" r="18" fill="#C5A45B" />
                <text x="8" y="22" fill="#F3E7C9" fontSize="14" fontFamily="sans-serif">Documento traducido</text>
              </g>
            </svg>
          </div>
        </motion.div>
       </div>
      </section>

      <section className="px-4 md:px-20 py-12 bg-gradient-to-r from-[#047857] to-[#10B981]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FileText size={32} />, number: "1000+", label: "Documentos traducidos" },
            { icon: <Users size={32} />, number: "500+", label: "Clientes satisfechos" },
            { icon: <Globe size={32} />, number: "15+", label: "Idiomas disponibles" },
            { icon: <Award size={32} />, number: "10+", label: "Años de experiencia" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="flex justify-center mb-2 opacity-80">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
              <div className="text-xs md:text-sm opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="servicios" className="px-4 md:px-20 py-16 md:py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#0B1F3A] mb-4">Nuestros Servicios</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales de traducción adaptadas a tus necesidades
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { 
              title: "Traducciones Oficiales", 
              desc: "Documentos legales, académicos y notariales con validez oficial.", 
              icon: <FileText size={32} />,
              mensaje: "Hola, necesito información sobre traducciones oficiales"
            },
            { 
              title: "Traducciones Técnicas", 
              desc: "Especialización en ingeniería, medicina, derecho y tecnología.", 
              icon: <Globe size={32} />,
              mensaje: "Hola, necesito información sobre traducciones técnicas"
            },
            { 
              title: "Interpretación", 
              desc: "Servicio presencial o remoto con intérpretes certificados.", 
              icon: <Users size={32} />,
              mensaje: "Hola, necesito información sobre servicios de interpretación"
            },
            { 
              title: "Revisión Profesional", 
              desc: "Corrección lingüística, de estilo y pruebas de lectura.", 
              icon: <CheckCircle2 size={32} />,
              mensaje: "Hola, necesito información sobre revisión profesional de documentos"
            }
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-2 border-transparent hover:border-[#4A154B] bg-white overflow-hidden group relative">
                <CardContent className="p-6 text-center relative z-10">
                  <motion.div 
                    className="flex justify-center mb-4 text-[#4A154B] group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {s.icon}
                  </motion.div>
                  <h4 className="text-lg md:text-xl font-semibold mb-3 text-[#0B1F3A] group-hover:text-[#4A154B] transition-colors">
                    {s.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    {s.desc}
                  </p>
                  
                  <a 
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(s.mensaje)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button className="w-full bg-[#4A154B] hover:bg-[#661E65] text-white rounded-full py-2 transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                      Solicitar este servicio
                    </Button>
                  </a>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-[#F3E7C9]/20 to-[#C5A45B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="nosotros" className="px-4 md:px-20 py-16 md:py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0B1F3A] mb-6 text-center">Sobre Nosotros</h3>
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              En <span className="font-medium text-[#4A154B]">Innova Traducciones SAS</span> unimos experiencia, tecnología y pasión por los idiomas
              para ofrecer traducciones de alta calidad. Nuestro equipo está conformado por traductores oficiales certificados,
              comprometidos con la exactitud y la confidencialidad.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { title: "Calidad garantizada", desc: "Traductores certificados y revisión exhaustiva" },
                { title: "Confidencialidad", desc: "Máxima seguridad en el manejo de tus documentos" },
                { title: "Entrega oportuna", desc: "Cumplimos con los plazos acordados" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <CheckCircle2 size={24} className="text-[#C5A45B] mx-auto mb-2" />
                  <h4 className="font-semibold text-[#0B1F3A] mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="contacto" className="px-4 md:px-20 py-16 md:py-20 bg-white">
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#0B1F3A] mb-4">Contáctanos</h3>
        <p className="text-center text-gray-600 mb-12">
          Estamos listos para ayudarte con tu proyecto de traducción
        </p>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#0B1F3A] mb-4">Información de contacto</h4>
            
            <div className="flex items-start space-x-4">
              <Phone size={24} className="text-[#4A154B] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-800">Teléfono</p>
                <a href={`tel:${contactInfo.telefono}`} className="text-gray-600 hover:text-[#4A154B] transition-colors">
                  {contactInfo.telefono}
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail size={24} className="text-[#4A154B] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <a href={emailLink} className="text-gray-600 hover:text-[#4A154B] transition-colors break-all">
                  {contactInfo.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin size={24} className="text-[#4A154B] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-800">Ubicación</p>
                <p className="text-gray-600">{contactInfo.direccion}</p>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-sm text-gray-600 mb-4">También puedes contactarnos directamente por:</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-3 w-full transition-all">
                  <Phone size={18} className="mr-2" />
                  Chatea en WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-[#0B1F3A] mb-4">Envíanos un mensaje</h4>
            
            {formSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-4 flex items-start"
              >
                <CheckCircle2 size={20} className="mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm">¡Mensaje enviado! Te contactaremos pronto.</p>
              </motion.div>
            )}
            
            <div className="grid gap-4">
              <div>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  placeholder="Nombre completo"
                  className={`border ${formErrors.nombre ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#4A154B] focus:border-transparent transition-all`}
                />
                {formErrors.nombre && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.nombre}</p>
                )}
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Correo electrónico"
                  className={`border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#4A154B] focus:border-transparent transition-all`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>
              
              <div>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos sobre tu proyecto de traducción..."
                  rows={5}
                  className={`border ${formErrors.mensaje ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#4A154B] focus:border-transparent transition-all resize-none`}
                />
                {formErrors.mensaje && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.mensaje}</p>
                )}
              </div>
              
              <Button
                onClick={handleSubmit}
                className="bg-[#4A154B] text-white hover:bg-[#661E65] rounded-full px-6 py-3 w-full transition-all hover:scale-105"
              >
                Enviar mensaje
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Al enviar, serás redirigido a WhatsApp con tu mensaje
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0B1F3A] text-gray-200 py-8">
        <div className="px-4 md:px-20 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h5 className="font-semibold text-white mb-3">Innova Traducciones SAS</h5>
              <p className="text-sm text-gray-400">
                Tu socio confiable en servicios de traducción profesional y certificada.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-3">Enlaces rápidos</h5>
              <div className="flex flex-col space-y-2 text-sm">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-400 hover:text-white transition-colors">Inicio</button>
                <button onClick={() => scrollToSection('servicios')} className="text-left text-gray-400 hover:text-white transition-colors">Servicios</button>
                <button onClick={() => scrollToSection('nosotros')} className="text-left text-gray-400 hover:text-white transition-colors">Nosotros</button>
                <button onClick={() => scrollToSection('contacto')} className="text-left text-gray-400 hover:text-white transition-colors">Contacto</button>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-3">Contacto</h5>
              <div className="flex flex-col space-y-2 text-sm text-gray-400">
                <p>{contactInfo.telefono}</p>
                <p className="break-all">{contactInfo.email}</p>
                <p>{contactInfo.direccion}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Innova Traducciones SAS. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}