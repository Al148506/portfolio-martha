import styles from './Footer.module.css'

const NAV_LINKS = [
  { label: 'Inicio',      href: '#hero' },
  { label: 'Sobre mí',   href: '#sobre-mi' },
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Contacto',   href: '#contacto' },
]

const SERVICIOS_LINKS = [
  'Packaging y Empaques',
  'Identidad de Marca',
  'Ilustración y Personajes',
  'Diseño Editorial',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Columna 1 — Logo y descripción */}
        <div className={styles.brand}>
          <a href="#hero" className={styles.logoLink}>
            <img
              src="/images/logotipe.png"
              alt="Martha García Luque — Diseño Gráfico"
              className={styles.logo}
              width={64}
              height={64}
            />
          </a>
          <p className={styles.brandDesc}>
            Diseñadora gráfica freelance especializada en packaging,
            branding e ilustración para PyMEs en México.
          </p>
          <div className={styles.contact}>
            <a
              href="https://wa.me/524491825979"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <WhatsAppIcon />
              +52 449 182 59 79
            </a>
            <a
              href="mailto:martha.luque551@gmail.com"
              className={styles.contactLink}
            >
              <MailIcon />
              martha.luque551@gmail.com
            </a>
          </div>
        </div>

        {/* Columna 2 — Navegación */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navegación</h4>
          <ul className={styles.linkList}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className={styles.footerLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 — Servicios */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Servicios</h4>
          <ul className={styles.linkList}>
            {SERVICIOS_LINKS.map(s => (
              <li key={s}>
                <a href="#servicios" className={styles.footerLink}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Barra inferior */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copy}>
            © {year} Martha Alicia García Luque. Todos los derechos reservados.
          </p>
          <p className={styles.made}>
            L.D.G. · Aguascalientes, México
          </p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.837L.057 23.082a.75.75 0 0 0 .921.921l5.265-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.49-5.18-1.348l-.37-.214-3.827 1.063 1.075-3.767-.234-.386A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}