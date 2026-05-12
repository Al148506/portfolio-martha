import styles from "./SobreMi.module.css";
import { Palette, Package, BookOpen, Languages } from "lucide-react";

const SKILLS = [
  { icon: <Package size={20} />, label: "Packaging y Empaques" },
  { icon: <Palette size={20} />, label: "Identidad de Marca" },
  { icon: <BookOpen size={20} />, label: "Diseño Editorial" },
  { icon: <Languages size={20} />, label: "Inglés Bilingüe" },
];

const TOOLS = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe InDesign",
  "Pre-prensa",
  "Flexografía",
  "Diseño de Personajes",
];

export default function SobreMi() {
  return (
    <section id="sobre-mi" className={styles.section}>
      <div className={styles.container}>
        {/* Columna izquierda — Foto */}
        <div className={styles.imageCol}>
          <img
            src="/src/assets/images/marta-transparente.png"
            alt="Logotipo — Diseño Gráfico"
            className={styles.photo}
          />
        </div>

        {/* Columna derecha — Texto */}
        <div className={styles.content}>
          <span className={styles.badge}>Sobre mí</span>

          <h2 className={styles.title}>
            Diseño con propósito,
            <br />
            <em>resultados que se notan</em>
          </h2>

          <p className={styles.bio}>
            Soy Martha Alicia García Luque, Licenciada en Diseño Gráfico por la
            Universidad Autónoma de Aguascalientes. A lo largo de mi trayectoria
            he colaborado con empresas como{" "}
            <strong>Productos Alteño S.A. de C.V.</strong>, desarrollando
            packaging y material visual para marcas de consumo masivo.
          </p>

          <p className={styles.bio}>
            Me especializo en transformar la identidad de PyMEs en diseños
            funcionales y atractivos — desde el empaque que llega al anaquel
            hasta la papelería que representa a tu empresa.
          </p>

          {/* Skills */}
          <div className={styles.skills}>
            {SKILLS.map((skill) => (
              <div key={skill.label} className={styles.skillItem}>
                <span className={styles.skillIcon}>{skill.icon}</span>
                <span className={styles.skillLabel}>{skill.label}</span>
              </div>
            ))}
          </div>

          {/* Herramientas */}
          <div className={styles.toolsBlock}>
            <span className={styles.toolsTitle}>Herramientas</span>
            <div className={styles.tools}>
              {TOOLS.map((tool) => (
                <span key={tool} className={styles.toolTag}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <a href="#contacto" className={styles.cta}>
            Trabajemos juntos
          </a>
        </div>
      </div>
    </section>
  );
}
