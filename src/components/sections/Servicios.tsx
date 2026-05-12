import styles from "./Servicios.module.css";
import { SERVICIOS } from "../../data/servicios";
import {
  PackagingIcon,
  BrandingIcon,
  IlustracionIcon,
  EditorialIcon,
} from "./ServicioIcons";
import { Check } from "lucide-react";

const ICONS = [
  <PackagingIcon />,
  <BrandingIcon />,
  <IlustracionIcon />,
  <EditorialIcon />,
];

export default function Servicios() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        {/* Encabezado */}
        <div className={styles.header}>
          <span className={styles.badge}>Servicios</span>
          <h2 className={styles.title}>
            ¿En qué puedo <em>ayudarte</em>?
          </h2>
          <p className={styles.subtitle}>
            Ofrezco soluciones de diseño completas para que tu marca comunique
            con claridad y estilo en cada punto de contacto.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className={styles.grid}>
          {SERVICIOS.map((servicio, index) => (
            <div key={servicio.id} className={styles.card}>
              <div className={styles.iconWrapper}>{ICONS[index]}</div>
              <h3 className={styles.cardTitle}>{servicio.titulo}</h3>
              <p className={styles.cardDesc}>{servicio.descripcion}</p>
              <ul className={styles.itemList}>
                {servicio.items.map((item) => (
                  <li key={item} className={styles.item}>
                    <Check size={14} className={styles.checkIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA inferior */}
        <div className={styles.ctaBlock}>
          <p className={styles.ctaText}>
            ¿No encuentras lo que buscas? Platícame tu proyecto.
          </p>
          <a
            href="https://wa.me/524491825979"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  );
}
