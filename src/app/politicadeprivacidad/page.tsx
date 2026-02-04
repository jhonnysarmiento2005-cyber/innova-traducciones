"use client";

import { motion } from "framer-motion";
import { Shield, Mail, Phone, Home, ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [logoSrc] = useState("/logo.png");
  const [logoFailed, setLogoFailed] = useState(false);

  const contactInfo = {
    whatsapp: "573043417841",
    email: "comercial@innovatraducciones.com",
    email2: "traduccionesinnova@gmail.com",
    telefono: "+57 304 341 7841",
    telefono2: "+57 323 303 5070"
  };

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-900/10 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 md:px-16 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {!logoFailed ? (
              <img 
                src={logoSrc} 
                alt="Innova Traducciones" 
                width={40} 
                height={40} 
                className="object-cover"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <div className="w-10 h-10 bg-neutral-900 flex items-center justify-center text-white text-xs font-bold">IT</div>
            )}
            <div>
              <h1 className="text-base font-medium tracking-tight text-neutral-900">Innova Traducciones</h1>
              <p className="text-xs text-neutral-500">Traducciones Oficiales</p>
            </div>
          </div>
          
          <button
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <Home size={18} />
            <span className="hidden md:inline">Volver al inicio</span>
          </button>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center">
              <Shield size={40} className="text-neutral-900" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-900 mb-4">
            Política de Tratamiento
            <br />
            <span className="font-normal">de Datos Personales</span>
          </h1>
          
          <div className="w-24 h-px bg-neutral-900 mx-auto mb-6"></div>
          
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            En <strong>Innova Traducciones S.A.S</strong> nos comprometemos a proteger y garantizar el uso adecuado de sus datos personales.
          </p>
        </motion.div>

        {/* Contenido de la política */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-12 shadow-lg space-y-12"
        >
          {/* Sección 1 */}
          <section>
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 text-lg font-light">
                1
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-neutral-900 mb-3">Responsable del Tratamiento</h2>
                <div className="space-y-2 text-neutral-700 leading-relaxed">
                  <p><strong>Razón social:</strong> INNOVA TRADUCCIONES S.A.S</p>
                  <p><strong>Correo electrónico:</strong> <a href={`mailto:${contactInfo.email2}`} className="text-neutral-900 hover:underline">{contactInfo.email2}</a></p>
                  <p><strong>País:</strong> Colombia</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 2 */}
          <section className="border-t border-neutral-900/10 pt-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 text-lg font-light">
                2
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-neutral-900 mb-3">Marco Legal</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Esta política se rige por la <strong>Ley 1581 de 2012</strong>, <strong>Decreto 1377 de 2013</strong> y <strong>Decreto 1074 de 2015</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 3 */}
          <section className="border-t border-neutral-900/10 pt-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 text-lg font-light">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-neutral-900 mb-4">Datos Personales Tratados</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Los datos personales que tratamos incluyen:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Nombre completo",
                    "Documento de identidad",
                    "Correo electrónico",
                    "Número de teléfono",
                    "Información contractual",
                    "Información profesional"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 size={16} className="text-neutral-900 flex-shrink-0" />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Sección 4 */}
          <section className="border-t border-neutral-900/10 pt-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 text-lg font-light">
                4
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-neutral-900 mb-4">Finalidad del Tratamiento</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Sus datos personales serán utilizados para:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>Prestación de servicios de traducción</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>Gestión comercial y atención al cliente</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>Organización y gestión de eventos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>Facturación y procesos contables</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>Cumplimiento de obligaciones legales</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 5 */}
          <section className="border-t border-neutral-900/10 pt-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 text-lg font-light">
                5
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-neutral-900 mb-4">Derechos del Titular</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Como titular de los datos personales, usted tiene derecho a:
                </p>
                <div className="bg-neutral-50 p-6 space-y-3">
                  {[
                    "Conocer los datos personales que tenemos sobre usted",
                    "Actualizar su información cuando sea necesario",
                    "Rectificar datos incorrectos o inexactos",
                    "Solicitar la supresión de sus datos",
                    "Revocar las autorizaciones otorgadas"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <ArrowRight size={16} className="text-neutral-900 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Sección 6 */}
          <section className="border-t border-neutral-900/10 pt-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 text-lg font-light">
                6
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-neutral-900 mb-3">Autorización</h2>
                <p className="text-neutral-700 leading-relaxed">
                  El titular autoriza el tratamiento de sus datos personales al suministrarlos voluntariamente a través de nuestros formularios de contacto, correo electrónico o cualquier otro medio de comunicación con Innova Traducciones.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 7 */}
          <section className="border-t border-neutral-900/10 pt-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 text-lg font-light">
                7
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-neutral-900 mb-3">Procedimiento para Ejercer sus Derechos</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Las solicitudes relacionadas con sus derechos serán atendidas a través de:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-neutral-900" />
                    <a href={`mailto:${contactInfo.email}`} className="text-neutral-900 hover:underline">{contactInfo.email}</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-neutral-900" />
                    <span className="text-neutral-700">{contactInfo.telefono} - {contactInfo.telefono2}</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mt-4">
                  Sus solicitudes serán atendidas dentro de los plazos establecidos por la normativa vigente.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 8 */}
          <section className="border-t border-neutral-900/10 pt-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 text-lg font-light">
                8
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-neutral-900 mb-3">Medidas de Seguridad</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Adoptamos medidas administrativas, técnicas y físicas apropiadas para proteger su información personal contra pérdida, robo, uso indebido, acceso no autorizado, divulgación, alteración o destrucción.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 9 y 10 */}
          <section className="border-t border-neutral-900/10 pt-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 text-lg font-light">
                9
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-neutral-900 mb-3">Vigencia</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Esta política rige desde su publicación y permanecerá vigente hasta que sea modificada.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-neutral-900/10 pt-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 text-lg font-light">
                10
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-neutral-900 mb-3">Fecha de Vigencia</h2>
                <p className="text-neutral-700 leading-relaxed">
                  <strong>01 de enero de 2026</strong>
                </p>
              </div>
            </div>
          </section>
        </motion.div>

        {/* Botón de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-neutral-100 p-8 md:p-12">
            <h3 className="text-2xl font-light text-neutral-900 mb-4">¿Tiene preguntas sobre esta política?</h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Si tiene alguna pregunta o inquietud sobre nuestra política de tratamiento de datos personales, no dude en contactarnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center justify-center h-14 px-8 bg-neutral-900 text-neutral-50 hover:bg-neutral-800 transition-colors"
              >
                <Mail size={18} className="mr-3" />
                <span className="text-sm">Enviar correo</span>
              </a>
              <button
                onClick={() => router.push('/')}
                className="inline-flex items-center justify-center h-14 px-8 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 transition-colors"
              >
                <Home size={18} className="mr-3" />
                <span className="text-sm">Volver al inicio</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer simplificado */}
      <footer className="border-t border-neutral-900/10 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-16 py-8">
          <div className="text-center text-sm text-neutral-500 space-y-2">
            <p>© {new Date().getFullYear()} Innova Traducciones S.A.S - Todos los derechos reservados</p>
            <p className="text-xs">Bogotá, Colombia</p>
          </div>
        </div>
      </footer>
    </main>
  );
}