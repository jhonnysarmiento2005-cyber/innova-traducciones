"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone, Mail, Home, ArrowRight, Instagram } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [logoSrc] = useState("/logo.png");
  const [logoFailed, setLogoFailed] = useState(false);

  const contactInfo = {
    whatsapp: "573043417841",
    email: "comercial@innovatraducciones.com",
    telefono: "+57 304 341 7841",
    instagram: "innovatraducciones_"
  };

  const whatsappLink = `https://api.whatsapp.com/send?phone=${contactInfo.whatsapp}&text=Hola%2C%20quiero%20informaci%C3%B3n%20adicional`;

  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        {/* Logo y encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-8">
            {!logoFailed ? (
              <img 
                src={logoSrc} 
                alt="Innova Traducciones" 
                width={120} 
                height={120} 
                className="object-contain"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <div className="w-32 h-32 bg-neutral-900 flex flex-col items-center justify-center text-white">
                <div className="text-4xl font-bold mb-2">IT</div>
                <div className="text-sm uppercase tracking-widest">Innova</div>
                <div className="text-xs tracking-wider">Traducciones</div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Tarjeta principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-16 shadow-xl"
        >
          <div className="text-center space-y-8">
            {/* Ícono de éxito con animación */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 size={48} className="text-green-600" />
              </div>
            </motion.div>

            {/* Título */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-900">
                ¡Gracias por tu solicitud!
              </h1>
              <div className="w-24 h-px bg-neutral-900 mx-auto"></div>
            </motion.div>

            {/* Mensaje principal */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-6 max-w-2xl mx-auto"
            >
              <p className="text-xl md:text-2xl text-neutral-600 font-light leading-relaxed">
                Hemos recibido tu mensaje exitosamente
              </p>
              
              <div className="bg-neutral-50 p-8 space-y-4">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Nuestro equipo de <strong className="font-medium">Innova Traducciones</strong> está revisando tu solicitud y se comunicará contigo lo más pronto posible para brindarte la información que necesitas.
                </p>
                
                <div className="flex items-center justify-center space-x-2 text-neutral-500">
                  <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                  <p className="text-sm">
                    Tiempo estimado de respuesta: <strong className="text-neutral-700">24 horas</strong>
                  </p>
                  <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Sección de contacto alternativo */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="pt-8 border-t border-neutral-900/10"
            >
              <p className="text-xs text-neutral-500 uppercase tracking-widest mb-6">
                ¿Necesitas respuesta inmediata?
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-14 bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-all"
                >
                  <Phone size={18} className="mr-3" />
                  <span className="text-sm font-medium">WhatsApp inmediato</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="group h-14 border border-neutral-900 text-neutral-900 flex items-center justify-center hover:bg-neutral-900 hover:text-neutral-50 transition-all"
                >
                  <Mail size={18} className="mr-3" />
                  <span className="text-sm font-medium">Enviar correo</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <a 
                href={`https://www.instagram.com/${contactInfo.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 h-14 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Instagram size={18} className="mr-3" />
                <span className="text-sm font-medium">Síguenos en Instagram</span>
              </a>
            </motion.div>

            {/* Botón de volver al inicio */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="pt-8"
            >
              <button
                onClick={() => router.push('/')}
                className="group inline-flex items-center space-x-3 text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Home size={20} />
                <span className="text-sm uppercase tracking-wider">Volver al inicio</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer pequeño */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-12 space-y-2"
        >
          <p className="text-sm text-neutral-500">
            {contactInfo.telefono} • {contactInfo.email}
          </p>
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Innova Traducciones SAS - Traducciones Oficiales
          </p>
        </motion.div>
      </div>
    </main>
  );
}