import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        {/* Columna izquierda — Texto */}
        <div className={styles.content}>
          <span className={styles.badge}>Diseñadora Gráfica Freelance</span>

          <h1 className={styles.title}>
            La imagen de tu negocio,
            <br />
            <em>diseñada para crecer</em>
          </h1>

          <p className={styles.subtitle}>
            Diseñadora gráfica especializada en packaging, branding e
            ilustración para empresas que quieren dar el salto a una imagen
            profesional.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>+10</span>
              <span className={styles.statLabel}>Años de experiencia</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>+15</span>
              <span className={styles.statLabel}>Proyectos realizados</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Empresas atendidas</span>
            </div>
          </div>

          <div className={styles.actions}>
            <a href="#portafolio" className={styles.btnPrimary}>
              Ver portafolio
            </a>
            <a
              href="https://wa.me/524491825979"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              <WhatsAppIcon />
              Escríbeme
            </a>
          </div>
        </div>

        {/* Columna derecha — Imagen destacada */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageBg} />
          <img
            src="/src/assets/images/logotipe.png"
            alt="Diseño de packaging — Paletas Alteño"
            className={styles.heroImage}
            width={520}
            height={580}
            loading="eager"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div> */}
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.837L.057 23.082a.75.75 0 0 0 .921.921l5.265-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.49-5.18-1.348l-.37-.214-3.827 1.063 1.075-3.767-.234-.386A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}
