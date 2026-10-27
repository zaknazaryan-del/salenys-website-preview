export type HomepageImage = {
  src: string
  alt: string
  decorative?: boolean
  objectPosition: string
  desktopObjectPosition?: {
    compact?: string
    wide?: string
  }
}

/**
 * Single source of truth for every homepage photograph.
 *
 * A future CMS adapter only needs to map its media URL, alt text, and focal
 * point fields into these six records. The homepage layout does not depend on
 * filenames or extensions, so PNG, JPEG, and WebP assets can be interchanged.
 */
export const homepageImages = {
  hero: {
    src: "/assets/hero-final-integrated.webp",
    alt: "",
    decorative: true,
    objectPosition: "center center",
    desktopObjectPosition: {
      compact: "52% center",
      wide: "center center",
    },
  },
  water: {
    src: "/assets/02-the-water-1550x534.webp",
    alt: "Clear sparkling mineral water",
    objectPosition: "center center",
  },
  originHistory: {
    src: "/assets/03-origin-and-history-1550x444.webp",
    alt: "Mediterranean landscape with natural flowing water",
    objectPosition: "center center",
  },
  experience: {
    src: "/assets/04-the-experience-1550x444.webp",
    alt: "Premium Mediterranean dining table",
    objectPosition: "center center",
  },
  products: {
    src: "/assets/05-products-and-presentation-1550x444.webp",
    alt: "Salenys bottles and branded packaging",
    objectPosition: "center center",
  },
  findSalenys: {
    src: "/assets/06-find-salenys-1550x444.webp",
    alt: "Bright Mediterranean coastal terrace",
    objectPosition: "center center",
  },
} satisfies Record<
  | "hero"
  | "water"
  | "originHistory"
  | "experience"
  | "products"
  | "findSalenys",
  HomepageImage
>
