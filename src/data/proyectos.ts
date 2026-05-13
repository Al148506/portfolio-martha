export type Categoria =
  | "todos"
  | "packaging"
  | "branding"
  | "ilustracion"
  | "editorial";

export interface Proyecto {
  id: string;
  titulo: string;
  cliente: string;
  categoria: Categoria;
  imagen: string;
  descripcion: string;
  tags: string[];
}

export const PROYECTOS: Proyecto[] = [
  {
    id: "maxi-melon",
    titulo: "Maxi Alteño Melón",
    cliente: "Productos Alteño S.A. de C.V.",
    categoria: "packaging",
    imagen: "/images/dummy-bolsas-melon-01.png",
    descripcion:
      "Diseño de bolsa para paletas de caramelo sabor melón. Preparación de archivo para pre-prensa de flexografía.",
    tags: ["Packaging", "Flexografía", "Alteño"],
  },
  {
    id: "super-melon",
    titulo: "Super Alteño Melón",
    cliente: "Productos Alteño S.A. de C.V.",
    categoria: "packaging",
    imagen: "/images/dummy-bolsas-melon-02.png",
    descripcion:
      "Variante de empaque para la línea Super Alteño. Adaptación de personaje y composición para nuevo formato.",
    tags: ["Packaging", "Flexografía", "Alteño"],
  },
  {
    id: "locos-picositos",
    titulo: "Locos Picositos",
    cliente: "Productos Alteño S.A. de C.V.",
    categoria: "packaging",
    imagen: "/images/dummy-bolsas-melon-03.png",
    descripcion:
      "Diseño de bolsa para dulces confitados con chile. Ilustración de personajes y composición de producto.",
    tags: ["Packaging", "Ilustración", "Alteño"],
  },
  {
    id: "express-gaby",
    titulo: "Logotipo Express Gaby",
    cliente: "Productos Alteño S.A. de C.V.",
    categoria: "branding",
    imagen: "/images/logotipo-transporte.png",
    descripcion:
      "Diseño de Logotipo Empresa transportista de Grupo Alteño \"Express Gaby\"",
    tags: ["Branding", "Logotipo", "Alteño"],
  },
  {
    id: "tarjetas-presentacion",
    titulo: "Tarjetas de Presentación",
    cliente: "Productos Alteño S.A. de C.V.",
    categoria: "branding",
    imagen: "/images/tarjetas-presentacion.jpg",
    descripcion:
      "Diseño de tarjetas de presentación para ejecutivos de Grupo Alteño y Golosinas GMC.",
    tags: ["Branding", "Papelería", "Alteño"],
  },
  {
    id: "personajes-01",
    titulo: "Personajes Melón — Serie 1",
    cliente: "Productos Alteño S.A. de C.V.",
    categoria: "ilustracion",
    imagen: "/images/propuestas-personajes-01.png",
    descripcion:
      "Propuesta de personajes ilustrados para la línea de paletas Melón. Diferentes poses y expresiones.",
    tags: ["Ilustración", "Personajes", "Alteño"],
  },
  {
    id: "personajes-02",
    titulo: "Personajes Melón — Serie 2",
    cliente: "Productos Alteño S.A. de C.V.",
    categoria: "ilustracion",
    imagen: "/images/propuestas-personajes-02.png",
    descripcion:
      "Segunda serie de personajes con nuevas variaciones de estilo y actividades para la mascota de la marca.",
    tags: ["Ilustración", "Personajes", "Alteño"],
  },
  {
    id: "personajes-03",
    titulo: "Personajes Línea Completa",
    cliente: "Productos Alteño S.A. de C.V.",
    categoria: "ilustracion",
    imagen: "/images/propuestas-personajes-03.png",
    descripcion:
      "Familia completa de personajes para los diferentes productos de la línea Alteño: melón, pepino, plátano y más.",
    tags: ["Ilustración", "Personajes", "Alteño"],
  },
];

export const CATEGORIAS: { value: Categoria; label: string }[] = [
  { value: "todos",       label: "Todos" },
  { value: "packaging",   label: "Packaging" },
  { value: "branding",    label: "Branding" },
  { value: "ilustracion", label: "Ilustración" },
  { value: "editorial",   label: "Editorial" },
];