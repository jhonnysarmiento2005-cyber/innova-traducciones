"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, CheckCircle2, Globe, FileText, Users, Award, ArrowRight, Shield, Clock, Instagram } from "lucide-react";

export default function Home() {
  const [logoSrc] = useState("/logo.png");
  const [logoFailed, setLogoFailed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentGallery, setCurrentGallery] = useState(0);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });
  const [formErrors, setFormErrors] = useState<{
    nombre: string;
    email: string;
    mensaje: string;
  }>({
    nombre: "",
    email: "",
    mensaje: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const banners = [
    { image: "/banner1.jpg", alt: "Traducciones Oficiales", title: "Traducciones Oficiales" },
    { image: "/banner2.jpg", alt: "Servicio Profesional", title: "Servicio Profesional" },
    { image: "/banner3.jpg", alt: "Validez Internacional", title: "Validez Internacional" }
  ];

  const galleryImages = [
    { image: "/gallery1.jpg", alt: "Equipo de trabajo", title: "Eventos" },
    { image: "/gallery2.jpg", alt: "Documentos certificados", title: "Eventos" },
    { image: "/gallery3.jpg", alt: "Eventos empresariales", title: " Eventos" },
    { image: "/gallery4.jpg", alt: "Traducciones simultáneas", title: " Eventos" },
    { image: "/gallery5.jpg", alt: "Oficinas", title: " Eventos" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGallery((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const contactInfo = {
    whatsapp: "573043417841",
    email: "comercial@innovatraducciones.com",
    telefono: "+57 304 341 7841",
    direccion: "Bogotá, Colombia",
    instagram: "innovatraducciones_"
  };

  const whatsappLink = `https://api.whatsapp.com/send?phone=${contactInfo.whatsapp}&text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20de%20traducci%C3%B3n`;
  const emailLink = `mailto:${contactInfo.email}?subject=Solicitud%20de%20traducci%C3%B3n&body=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios.`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    const errors: {
      nombre?: string;
      email?: string;
      mensaje?: string;
    } = {};
    
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
      setFormErrors({
        nombre: errors.nombre || "",
        email: errors.email || "",
        mensaje: errors.mensaje || ""
      });
      return;
    }

    const mensaje = `Hola, soy ${formData.nombre}%0A%0ACorreo: ${formData.email}%0A%0AMensaje: ${formData.mensaje}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${contactInfo.whatsapp}&text=${mensaje}`;
    
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
    <main className="min-h-screen bg-neutral-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-900/5">
        <div className="flex justify-between items-center px-6 md:px-16 py-6 max-w-screen-2xl mx-auto">
          <div className="flex items-center space-x-4">
            {!logoFailed ? (
              <img src={logoSrc} alt="Innova Traducciones" width={40} height={40} className="object-cover" onError={() => setLogoFailed(true)} />
            ) : (
              <div className="w-10 h-10 bg-neutral-900 flex items-center justify-center text-white text-xs font-bold">IT</div>
            )}
            <div>
              <h1 className="text-base font-medium tracking-tight text-neutral-900">Innova Traducciones</h1>
              <p className="text-xs text-neutral-500 hidden md:block">Traducciones Oficiales</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-12 text-sm text-neutral-600">
            <button onClick={() => scrollToSection('inicio')} className="hover:text-neutral-900 transition-colors">Inicio</button>
            <button onClick={() => scrollToSection('servicios')} className="hover:text-neutral-900 transition-colors">Servicios</button>
            <button onClick={() => scrollToSection('eventos')} className="hover:text-neutral-900 transition-colors">Eventos</button>
            <button onClick={() => scrollToSection('nosotros')} className="hover:text-neutral-900 transition-colors">Nosotros</button>
            <button onClick={() => scrollToSection('contacto')} className="hover:text-neutral-900 transition-colors">Contacto</button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <div className="h-10 px-6 bg-neutral-900 text-neutral-50 flex items-center justify-center text-sm hover:bg-neutral-800 transition-colors">
                Cotización
              </div>
            </a>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-neutral-900">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden border-t border-neutral-900/5 bg-neutral-50">
              <div className="flex flex-col px-6 py-4 space-y-2">
                <button onClick={() => scrollToSection('inicio')} className="text-left py-3 text-neutral-600 hover:text-neutral-900">Inicio</button>
                <button onClick={() => scrollToSection('servicios')} className="text-left py-3 text-neutral-600 hover:text-neutral-900">Servicios</button>
                <button onClick={() => scrollToSection('eventos')} className="text-left py-3 text-neutral-600 hover:text-neutral-900">Eventos</button>
                <button onClick={() => scrollToSection('nosotros')} className="text-left py-3 text-neutral-600 hover:text-neutral-900">Nosotros</button>
                <button onClick={() => scrollToSection('contacto')} className="text-left py-3 text-neutral-600 hover:text-neutral-900">Contacto</button>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block mt-4">
                  <div className="h-12 bg-neutral-900 text-neutral-50 flex items-center justify-center">Cotización</div>
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <div className="h-24"></div>

      <section id="inicio" className="px-6 md:px-16 py-24 md:py-32 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7">
            <div className="space-y-8">
              <div className="inline-block">
                <div className="flex items-center space-x-2 text-xs tracking-widest text-neutral-500 uppercase">
                  <div className="w-8 h-px bg-neutral-900"></div>
                  <span>Certificación oficial</span>
                </div>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-light tracking-tight text-neutral-900 leading-none">
                Traducciones<br/>
                <span className="font-normal">Oficiales</span>
              </h2>
              
              <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed font-light">
                Servicios profesionales con validez legal internacional. Precisión, confidencialidad y entrega garantizada.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={emailLink}>
                  <div className="group h-14 px-8 bg-neutral-900 text-neutral-50 flex items-center justify-between hover:bg-neutral-800 transition-all cursor-pointer">
                    <span className="text-sm">Solicitar cotización</span>
                    <ArrowRight size={16} className="ml-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <div className="h-14 px-8 border border-neutral-900 text-neutral-900 flex items-center justify-center hover:bg-neutral-900 hover:text-neutral-50 transition-all cursor-pointer">
                    <Phone size={16} className="mr-3" />
                    <span className="text-sm">WhatsApp</span>
                  </div>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-neutral-900/10">
                {[
                  { num: "1+", label: "Años" },
                  { num: "100+", label: "Clientes" },
                  { num: "15+", label: "Idiomas" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-light text-neutral-900 mb-1">{stat.num}</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.2 }} 
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="w-96 h-96">
              {!logoFailed ? (
                <img 
                  src={logoSrc} 
                  alt="Innova Traducciones Logo" 
                  className="w-full h-full object-contain"
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <div className="w-full h-full bg-neutral-900 flex flex-col items-center justify-center text-white">
                  <div className="text-8xl font-bold mb-4">IT</div>
                  <div className="text-xl uppercase tracking-widest">Innova</div>
                  <div className="text-base tracking-wider">Traducciones</div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-neutral-900/10">
        <div className="px-6 md:px-16 py-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Shield size={20} />, text: "Certificación oficial" },
              { icon: <Clock size={20} />, text: "Entrega garantizada" },
              { icon: <Award size={20} />, text: "Máxima calidad" },
              { icon: <FileText size={20} />, text: "Confidencialidad" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-3">
                <div className="text-neutral-900">{item.icon}</div>
                <span className="text-xs text-neutral-600 uppercase tracking-wider">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-96 bg-neutral-900 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <img
              src={banners[currentBanner].image}
              alt={banners[currentBanner].alt}
              className="w-full h-full object-cover opacity-40"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.banner-placeholder')) {
                  const placeholder = document.createElement('div');
                  placeholder.className = 'banner-placeholder absolute inset-0 flex items-center justify-center bg-neutral-800';
                  placeholder.innerHTML = `<div class="text-center text-neutral-400"><svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="mx-auto mb-3"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg><p class="text-sm uppercase tracking-wider">${banners[currentBanner].title}</p></div>`;
                  parent.appendChild(placeholder);
                }
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white z-10">
                <h3 className="text-4xl md:text-5xl font-light tracking-tight">{banners[currentBanner].title}</h3>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentBanner ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <section id="servicios" className="px-6 md:px-16 py-24 md:py-32 max-w-screen-2xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center space-x-2 text-xs tracking-widest text-neutral-500 uppercase mb-6">
            <div className="w-8 h-px bg-neutral-900"></div>
            <span>Servicios</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900">Especialización</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-px bg-neutral-900/10">
          {[
            { title: "Traducciones Oficiales", desc: "Documentos legales y académicos con validez oficial", icon: <FileText size={24} />, mensaje: "Hola, necesito información sobre traducciones oficiales" },
            { title: "Traducciones Técnicas", desc: "Ingeniería, medicina, derecho y tecnología", icon: <Globe size={24} />, mensaje: "Hola, necesito información sobre traducciones técnicas" },
            { title: "Interpretación", desc: "Servicio presencial o remoto certificado", icon: <Users size={24} />, mensaje: "Hola, necesito información sobre servicios de interpretación" },
            { title: "Revisión Profesional", desc: "Corrección y validación especializada", icon: <CheckCircle2 size={24} />, mensaje: "Hola, necesito información sobre revisión profesional" }
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              <a href={`https://api.whatsapp.com/send?phone=${contactInfo.whatsapp}&text=${encodeURIComponent(s.mensaje)}`} target="_blank" rel="noopener noreferrer" className="group block bg-neutral-50 p-8 md:p-12 hover:bg-neutral-900 transition-all duration-500">
                <div className="space-y-6">
                  <div className="text-neutral-900 group-hover:text-neutral-50 transition-colors">{s.icon}</div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-light mb-2 text-neutral-900 group-hover:text-neutral-50 transition-colors">{s.title}</h4>
                    <p className="text-sm text-neutral-600 group-hover:text-neutral-300 transition-colors">{s.desc}</p>
                  </div>
                  <div className="flex items-center text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
                    <span className="uppercase tracking-wider">Consultar</span>
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="eventos" className="px-6 md:px-16 py-16 md:py-24 max-w-screen-2xl mx-auto bg-white">
        <div className="mb-20">
          <div className="flex items-center space-x-2 text-xs tracking-widest text-neutral-500 uppercase mb-6">
            <div className="w-8 h-px bg-neutral-900"></div>
            <span>Eventos</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900">Servicios para Eventos</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900/10">
          {[
            { title: "Equipos Para Traducción Simultánea", desc: "De 1 a 1000 equipos. Adicional: transmisor de mesa, cableado para streaming, cabina de sonido", icon: <Users size={24} />, mensaje: "Hola, necesito información sobre equipos para traducción simultánea" },
            { title: "Transmisor Portátil", desc: "De 1 a 25 equipos transmisores portátiles", icon: <Globe size={24} />, mensaje: "Hola, necesito información sobre transmisores portátiles" },
            { title: "Conferencias", desc: "De 1 a 10 unidades microfónicas inalámbricas + unidad central + técnico permanente", icon: <Users size={24} />, mensaje: "Hola, necesito información sobre servicios para conferencias" },
            { title: "Reuniones Virtuales", desc: "De 1 a 1000 asistentes", icon: <Globe size={24} />, mensaje: "Hola, necesito información sobre servicios para reuniones virtuales" },
            { title: "Seminarios", desc: "De 1 a 500 asistentes", icon: <Users size={24} />, mensaje: "Hola, necesito información sobre servicios para seminarios" },
            { title: "Adicionales", desc: "Grabaciones por idiomas - Retransmisión", icon: <FileText size={24} />, mensaje: "Hola, necesito información sobre servicios adicionales para eventos" }
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="h-full">
              <a href={`https://api.whatsapp.com/send?phone=${contactInfo.whatsapp}&text=${encodeURIComponent(s.mensaje)}`} target="_blank" rel="noopener noreferrer" className="group flex flex-col h-full bg-neutral-50 p-8 md:p-10 hover:bg-neutral-900 transition-all duration-500">
                <div className="flex flex-col h-full space-y-6">
                  <div className="text-neutral-900 group-hover:text-neutral-50 transition-colors">{s.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-light mb-2 text-neutral-900 group-hover:text-neutral-50 transition-colors">{s.title}</h4>
                    <p className="text-sm text-neutral-600 group-hover:text-neutral-300 transition-colors leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="flex items-center text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors mt-auto">
                    <span className="uppercase tracking-wider">Consultar</span>
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 md:py-32 max-w-screen-2xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center space-x-2 text-xs tracking-widest text-neutral-500 uppercase mb-6">
            <div className="w-8 h-px bg-neutral-900"></div>
            <span>Galería</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900">Nuestra Experiencia</h3>
        </div>

        <div className="relative h-[600px] bg-neutral-900 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGallery}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img
                src={galleryImages[currentGallery].image}
                alt={galleryImages[currentGallery].alt}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.gallery-placeholder')) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'gallery-placeholder absolute inset-0 flex items-center justify-center bg-neutral-800';
                    placeholder.innerHTML = `<div class="text-center text-neutral-400"><svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="mx-auto mb-4"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg><p class="text-lg uppercase tracking-wider font-light">${galleryImages[currentGallery].title}</p></div>`;
                    parent.appendChild(placeholder);
                  }
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-neutral-900 to-transparent">
                <div className="max-w-screen-2xl mx-auto flex items-end justify-between">
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest mb-1">
                      {currentGallery + 1} / {galleryImages.length}
                    </p>
                    <h4 className="text-2xl md:text-3xl font-light text-white tracking-tight">
                      {galleryImages[currentGallery].title}
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => setCurrentGallery((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-neutral-900/50 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-neutral-900/70 transition-all z-20"
          >
            <ArrowRight size={20} className="text-white rotate-180" />
          </button>
          <button
            onClick={() => setCurrentGallery((prev) => (prev + 1) % galleryImages.length)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-neutral-900/50 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-neutral-900/70 transition-all z-20"
          >
            <ArrowRight size={20} className="text-white" />
          </button>

          <div className="absolute top-6 md:top-8 left-0 right-0 flex justify-center space-x-2 z-20">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGallery(index)}
                className={`h-0.5 transition-all ${
                  index === currentGallery ? 'bg-white w-8' : 'bg-white/40 w-6'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="px-6 md:px-16 py-24 md:py-32 bg-neutral-900 text-neutral-50">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-6">
              <div className="flex items-center space-x-2 text-xs tracking-widest text-neutral-400 uppercase mb-8">
                <div className="w-8 h-px bg-neutral-50"></div>
                <span>Nosotros</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-8">Excelencia desde 2025</h3>
              
              <div className="space-y-6 text-neutral-300 text-base leading-relaxed font-light">
                <p>Innova Traducciones SAS ofrece servicios lingüísticos certificados ante el Ministerio de Relaciones Exteriores de Colombia.</p>
                <p>Operamos bajo protocolos ISO 17100 garantizando confidencialidad absoluta en sectores legal, académico, médico y empresarial.</p>
              </div>

              <div className="space-y-6 mt-12">
                {[
                  { title: "Certificación", desc: "Traductores oficiales acreditados" },
                  { title: "Confidencialidad", desc: "Acuerdos NDA en todos los proyectos" },
                  { title: "Puntualidad", desc: "Cumplimiento estricto de plazos" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4 pb-6 border-b border-neutral-800 last:border-0">
                    <CheckCircle2 size={18} className="text-neutral-50 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-neutral-50 mb-1">{item.title}</h4>
                      <p className="text-sm text-neutral-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-px bg-neutral-800">
                {[
                  { num: "1000+", label: "Documentos" },
                  { num: "98%", label: "Satisfacción" },
                  { num: "24h", label: "Respuesta" },
                  { num: "15+", label: "Idiomas" }
                ].map((stat, i) => (
                  <div key={i} className="bg-neutral-900 p-12 flex flex-col items-center justify-center text-center">
                    <div className="text-4xl md:text-5xl font-light mb-2">{stat.num}</div>
                    <div className="text-xs text-neutral-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 md:px-16 py-24 md:py-32 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-2 text-xs tracking-widest text-neutral-500 uppercase mb-8">
              <div className="w-8 h-px bg-neutral-900"></div>
              <span>Contacto</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 mb-12">Solicite una cotización</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 pb-6 border-b border-neutral-900/10">
                <Phone size={20} className="text-neutral-900 mt-1" />
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Teléfono</p>
                  <a href={`tel:${contactInfo.telefono}`} className="text-neutral-900 hover:text-neutral-600">{contactInfo.telefono}</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 pb-6 border-b border-neutral-900/10">
                <Mail size={20} className="text-neutral-900 mt-1" />
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Correo</p>
                  <a href={emailLink} className="text-neutral-900 hover:text-neutral-600 break-all">{contactInfo.email}</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 pb-6 border-b border-neutral-900/10">
                <MapPin size={20} className="text-neutral-900 mt-1" />
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Ubicación</p>
                  <p className="text-neutral-900">{contactInfo.direccion}</p>
                </div>
              </div>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block mt-8">
                <div className="h-14 bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                  <Phone size={16} className="mr-3" />
                  <span className="text-sm">WhatsApp inmediato</span>
                </div>
              </a>

              <a href={`https://www.instagram.com/${contactInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="block mt-4">
                <div className="h-14 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Instagram size={16} className="mr-3" />
                  <span className="text-sm">Síguenos en Instagram</span>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            {formSubmitted && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 bg-neutral-900 text-neutral-50 flex items-center">
                <CheckCircle2 size={18} className="mr-3 flex-shrink-0" />
                <p className="text-sm">Mensaje enviado exitosamente</p>
              </motion.div>
            )}
            
            <div className="space-y-6">
              <div>
                <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-3">Nombre</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} className={`w-full h-14 px-4 bg-transparent border ${formErrors.nombre ? 'border-red-500' : 'border-neutral-900/20'} focus:border-neutral-900 focus:outline-none transition-colors text-neutral-900`} />
                {formErrors.nombre && <p className="text-red-500 text-xs mt-2">{formErrors.nombre}</p>}
              </div>
              
              <div>
                <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-3">Correo</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full h-14 px-4 bg-transparent border ${formErrors.email ? 'border-red-500' : 'border-neutral-900/20'} focus:border-neutral-900 focus:outline-none transition-colors text-neutral-900`} />
                {formErrors.email && <p className="text-red-500 text-xs mt-2">{formErrors.email}</p>}
              </div>
              
              <div>
                <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-3">Mensaje</label>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleInputChange} rows={6} className={`w-full px-4 py-4 bg-transparent border ${formErrors.mensaje ? 'border-red-500' : 'border-neutral-900/20'} focus:border-neutral-900 focus:outline-none transition-colors resize-none text-neutral-900`} />
                {formErrors.mensaje && <p className="text-red-500 text-xs mt-2">{formErrors.mensaje}</p>}
              </div>
              
              <button onClick={handleSubmit} className="group w-full h-14 bg-neutral-900 text-neutral-50 flex items-center justify-between px-6 hover:bg-neutral-800 transition-colors">
                <span className="text-sm">Enviar solicitud</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-xs text-neutral-400 text-center">Será redirigido a WhatsApp con su mensaje</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-900/10">
        <div className="px-6 md:px-16 py-12 max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h5 className="text-sm font-medium text-neutral-900 mb-3">Innova Traducciones SAS</h5>
              <p className="text-sm text-neutral-600">Traducciones Oficiales profesionales</p>
            </div>
            
            <div>
              <h5 className="text-xs text-neutral-500 uppercase tracking-wider mb-4">Navegación</h5>
              <div className="flex flex-col space-y-2 text-sm">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-neutral-600 hover:text-neutral-900">Inicio</button>
                <button onClick={() => scrollToSection('servicios')} className="text-left text-neutral-600 hover:text-neutral-900">Servicios</button>
                <button onClick={() => scrollToSection('eventos')} className="text-left text-neutral-600 hover:text-neutral-900">Eventos</button>
                <button onClick={() => scrollToSection('nosotros')} className="text-left text-neutral-600 hover:text-neutral-900">Nosotros</button>
                <button onClick={() => scrollToSection('contacto')} className="text-left text-neutral-600 hover:text-neutral-900">Contacto</button>
              </div>
            </div>
            
            <div>
              <h5 className="text-xs text-neutral-500 uppercase tracking-wider mb-4">Información</h5>
              <div className="flex flex-col space-y-2 text-sm text-neutral-600">
                <p>{contactInfo.telefono}</p>
                <p className="break-all">{contactInfo.email}</p>
                <p>{contactInfo.direccion}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-900/10 mt-12 pt-8 text-center">
            <p className="text-xs text-neutral-500">© {new Date().getFullYear()} Innova Traducciones SAS</p>
          </div>
        </div>
      </footer>
    </main>
  );
}