export interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  items: string[];
}

export const SERVICIOS: Servicio[] = [
  {
    id: "packaging",
    titulo: "Packaging y Empaques",
    descripcion:
      "Diseño de bolsas, envolturas, corrugados y empaques individuales listos para pre-prensa e impresión en flexografía.",
    items: [
      "Bolsas y envolturas",
      "Corrugados y cajas",
      "Preparación para flexografía",
      "Adaptación a múltiples formatos",
    ],
  },
  {
    id: "branding",
    titulo: "Identidad de Marca",
    descripcion:
      "Desarrollo de imagen corporativa coherente y memorable para que tu negocio se distinga desde el primer contacto.",
    items: [
      "Diseño de logotipo",
      "Manual de identidad",
      "Tarjetas de presentación",
      "Papelería corporativa",
    ],
  },
  {
    id: "ilustracion",
    titulo: "Ilustración y Personajes",
    descripcion:
      "Creación de mascotas, personajes y elementos ilustrados que dan vida y personalidad única a tu marca.",
    items: [
      "Mascotas de marca",
      "Personajes para packaging",
      "Ilustraciones publicitarias",
      "Adaptaciones y variaciones",
    ],
  },
  {
    id: "editorial",
    titulo: "Diseño Editorial",
    descripcion:
      "Diseño de materiales impresos y digitales con composición tipográfica cuidada y jerarquía visual clara.",
    items: [
      "Revistas y periódicos",
      "Catálogos y folletos",
      "Lonas y banners",
      "Anuncios publicitarios",
    ],
  },
];
