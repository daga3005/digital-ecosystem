// ─── Types ───────────────────────────────────────────────────────────────────

export interface Reviewer {
    id: number,
    name: string,
    degree: string,
    image: string,
    email: string
}

// ─── Data  ─────────────────────────────

export const reviewers: Reviewer[] = [
    {
        id: 1,
        name: "Dr. C. María Magdalena López Rodríguez del Rey",
        degree: "Doctora en Ciencias",
        image: "/revisores/b84c872d-4ad9-47ed-8e86-47e40f794c1a.png",
        email: "mmrodriguez@ucf.edu.cu",
    },
    {
        id: 2,
        name: "MSc. Jorge Misa Hernández",
        degree: "Máster en Ciencias",
        image: "/revisores/mujer.avif",
        email: "", // No aparece en el documento
    },
    {
        id: 3,
        name: "Dr. C. Ángela Sarría Stuart",
        degree: "Doctora en Ciencias",
        image: "/revisores/8378d7b7-aec6-47d7-a771-6cb296146d91.png",
        email: "asarria@ucf.edu.cu",
    },
    {
        id: 4,
        name: "Dr. C. Ariel Gómez Sarría",
        degree: "Doctor en Ciencias",
        image: "/revisores/mujer.avif",
        email: "agomez@ucf.edu.cu",
    },
    {
        id: 5,
        name: "Dr. C. Ailec Granda Dihigo",
        degree: "Doctora en Ciencias",
        image: "/revisores/8ddb2773-3d0d-4ebd-80dc-946c30e52c53.jpg",
        email: "agranda@uci.cu",
    },
    {
        id: 6,
        name: "MSc. Regla Caridad Macías Díaz",
        degree: "Máster y Profesora Auxiliar, Nivel Superior",
        image: "/revisores/f71c22bf-f16e-46de-95c3-3a157e70ce62.png",
        email: "rdiaz@ucf.edu.cu",
    },
    {
        id: 7,
        name: "Dr. C. Raúl Rodríguez Muñoz",
        degree: "Doctor",
        image: "/revisores/2458727d-f42f-47d0-9004-055067dd2402.png",
        email: "rrmunoz@ucf.edu.cu",
    },
    {
        id: 8,
        name: "MSc. Miguel Alejandro Pérez Egües",
        degree: "Máster en Educación Virtual",
        image: "/revisores/2821c75c-01bc-4b36-bda8-b74a32647cd9.png",
        email: "mapegues@ucf.edu.cu",
    },
    {
        id: 9,
        name: "Dr. C. Damarys Hernández Castillo",
        degree: "Doctora en Ciencias",
        image: "/revisores/77d34c0b-f408-4498-97fd-927fe268e46a.png",
        email: "dhernandez@ucf.edu.cu",
    },
    {
        id: 10,
        name: "Dr. C. Yohana de la Caridad Morales Díaz",
        degree: "Doctora en Ciencias",
        image: "/revisores/dd1b9a04-bfb6-44ec-a611-a86b7b1dbb23.png",
        email: "ymorales@ucf.edu.cu",
    },
    {
        id: 11,
        name: "Ing. Aziro Miguel Hernández Fonseca",
        degree: "Doctora en Ciencias",
        image: "/revisores/mujer.avif",
        email: "amhfonseca@ucf.edu.cu",
    },
    {
        id: 12,
        name: "Dr. C. Denis Fernández Álvarez",
        degree: "Doctor en Ciencias",
        image: "/revisores/fc1e0777-4256-4367-9546-70d0d00b96c5.png",
        email: "dfernandez@ucf.edu.cu",
    },
    
];