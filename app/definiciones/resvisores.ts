

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Reviewer {
    id: number,
    name: string;
    degree: string;
    image: string; // path or URL
}

// ─── Data (replace images with your actual paths) ─────────────────────────────

export const reviewers: Reviewer[] = [
    {
        id: 1,
    name: "Dr. C. María Magdalena López Rodrigue del Rey",
        degree: "Doctora en Ciencias",
        image: "/mujer.avif",
    },
    {
        id: 2,
        name: "MSc. Jorge Misa Hernández",
        degree: "Máster en Ciencias",
          image: "/mujer.avif",
    },
    {
        id: 3,
        name: "Dr. C. Ángela Sarría Stuart",
        degree: "Doctora en Ciencias",
         image: "/mujer.avif",
    },
    {
        id: 4,
        name: "Dr. C. Ariel Gómez Sarría",
        degree: "Doctor en Ciencias",
         image: "/mujer.avif",
    },
    {
        id: 5,
        name: "Dr. C. Ailec Granda Dihigo",
        degree: "Doctora en Ciencias",
          image: "/mujer.avif",
    },
];