import { useState } from "react";
import styles from "./Portafolio.module.css";
import { PROYECTOS, CATEGORIAS, type Categoria } from "../../data/proyectos";
import { X, ArrowUpRight } from "lucide-react";

export default function Portafolio() {
  const [activa, setActiva] = useState<Categoria>("todos");
  const [seleccionado, setSeleccionado] = useState<
    (typeof PROYECTOS)[0] | null
  >(null);

  const filtrados =
    activa === "todos"
      ? PROYECTOS
      : PROYECTOS.filter((p) => p.categoria === activa);

  return (
    <section id="portafolio" className={styles.section}>
      <div className={styles.container}>

        {/* Encabezado */}
        <div className={styles.header}>
          <span className={styles.badge}>Portafolio</span>
          <h2 className={styles.title}>
            Proyectos que <em>hablan</em> por sí solos
          </h2>
          <p className={styles.subtitle}>
            Una selección de trabajos realizados para empresas reales con
            resultados concretos.
          </p>
        </div>

        {/* Filtros */}
        <div className={styles.filtros}>
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.value}
              className={`${styles.filtro} ${activa === cat.value ? styles.filtroActivo : ""}`}
              onClick={() => setActiva(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className={styles.grid}>
          {filtrados.map((proyecto, index) => (
            <button
              key={proyecto.id}
              className={styles.card}
              onClick={() => setSeleccionado(proyecto)}
              aria-label={`Ver proyecto: ${proyecto.titulo}`}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className={styles.imagen}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  width={400}
                  height={300}
                />
                {/* Overlay que sube desde abajo */}
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <div className={styles.cardTags}>
                      {proyecto.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className={styles.overlayTitle}>{proyecto.titulo}</h3>
                    <span className={styles.overlayHint}>
                      Ver proyecto <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Modal de detalle */}
      {seleccionado && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSeleccionado(null)}
          role="dialog"
          aria-modal="true"
          aria-label={seleccionado.titulo}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setSeleccionado(null)}
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className={styles.modalImageWrapper}>
              <img
                src={seleccionado.imagen}
                alt={seleccionado.titulo}
                className={styles.modalImage}
                decoding="async"
                width={700}
                height={500}
              />
            </div>

            <div className={styles.modalContent}>
              <div className={styles.modalTags}>
                {seleccionado.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className={styles.modalTitle}>{seleccionado.titulo}</h3>
              <p className={styles.modalCliente}>{seleccionado.cliente}</p>
              <p className={styles.modalDesc}>{seleccionado.descripcion}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}