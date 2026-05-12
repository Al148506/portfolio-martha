import { useState, useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contacto.module.css";
import {
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";

// 🔧 Reemplaza con tus credenciales de EmailJS
const EMAILJS_SERVICE_ID = "TU_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "TU_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "TU_PUBLIC_KEY";

type Estado = "idle" | "enviando" | "exitoso" | "error";

const INFO_ITEMS = [
  {
    icon: <MessageCircle size={20} />,
    label: "WhatsApp",
    valor: "+52 449 182 59 79",
    href: "https://wa.me/524491825979",
  },
  {
    icon: <Mail size={20} />,
    label: "Correo electrónico",
    valor: "martha.luque551@gmail.com",
    href: "mailto:martha.luque551@gmail.com",
  },
  {
    icon: <MapPin size={20} />,
    label: "Ubicación",
    valor: "Aguascalientes, México",
    href: null,
  },
  {
    icon: <Clock size={20} />,
    label: "Disponibilidad",
    valor: "Lunes a Viernes, 9am – 6pm",
    href: null,
  },
];

export default function Contacto() {
  const formRef = useRef<HTMLFormElement>(null);
  const [estado, setEstado] = useState<Estado>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setEstado("enviando");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setEstado("exitoso");
      formRef.current.reset();
    } catch {
      setEstado("error");
    }
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        {/* Columna izquierda — igual que antes */}
        <div className={styles.content}>
          <span className={styles.badge}>Contacto</span>
          <h2 className={styles.title}>
            ¿Tienes un proyecto
            <br />
            en <em>mente</em>?
          </h2>
          <p className={styles.subtitle}>
            Cuéntame tu idea y con gusto te preparo una propuesta. Respondo en
            menos de 24 horas.
          </p>

          <div className={styles.infoList}>
            {INFO_ITEMS.map((item) => (
              <div key={item.label} className={styles.infoItem}>
                <div className={styles.infoIcon}>{item.icon}</div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className={styles.infoValor}
                    >
                      {item.valor}
                    </a>
                  ) : (
                    <span className={styles.infoValor}>{item.valor}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha — Formulario */}
        <div className={styles.formCol}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={styles.form}
            noValidate
          >
            <h3 className={styles.formTitle}>Envíame un mensaje</h3>

            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="from_name" className={styles.label}>
                  Nombre <span className={styles.required}>*</span>
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Tu nombre completo"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="from_email" className={styles.label}>
                  Correo electrónico <span className={styles.required}>*</span>
                </label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="phone" className={styles.label}>
                Teléfono / WhatsApp
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+52 449 000 0000"
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Cuéntame tu proyecto <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Describe brevemente qué necesitas: tipo de diseño, producto, empresa, etc."
                className={styles.textarea}
                rows={4}
                required
              />
            </div>

            {/* Feedback de envío */}
            {estado === "exitoso" && (
              <div className={styles.feedbackSuccess}>
                <CheckCircle size={18} />
                ¡Mensaje enviado! Martha te contactará pronto.
              </div>
            )}

            {estado === "error" && (
              <div className={styles.feedbackError}>
                <AlertCircle size={18} />
                Hubo un error. Intenta por WhatsApp o correo directo.
              </div>
            )}

            <button
              type="submit"
              className={styles.btnSubmit}
              disabled={estado === "enviando"}
            >
              {estado === "enviando" ? (
                <>
                  <Loader size={18} className={styles.spinner} />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar mensaje
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
