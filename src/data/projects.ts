export type ProjectType = {
  imgPath?: string;
  title: string;
  body: string;
  stack: string[];
  liveHref: string | null;
  github: string;
};

export const Projects: ProjectType[] = [
  {
    imgPath: "images/gc.png",
    title: "GrammarCheck",
    body: "In progress project that allows people to practice Korean grammar.",
    liveHref: "",
    stack: [
      "React",
      "tailwindCSS",
      "Next.js",
      "Drizzle ORM",
      "NextAuth.js",
      "MySql",
    ],
    github: "https://github.com/devldm/grammar-check",
  },
  {
    imgPath: "images/airbnb-crop-more-1.png",
    title: "airbnb remake",
    body: "Remake of airbnb website where you can view listings",
    liveHref: "https://go-next-three.vercel.app/",
    stack: ["React", "tailwindCSS", "Next.js", "Go", "Fiber", "MongoDB"],
    github: "https://github.com/devldm/go-next",
  },
  {
    imgPath: "images/wallet-crop.png",
    title: "Simple Android Wallet",
    body: "lightweight, android native cryptocurrency wallet. Send, receive and store currencies.",
    liveHref: "",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Android Studio",
      "Web3j",
      "Covalent API",
    ],
    github: "https://github.com/devldm/SimpleAndroidWallet",
  },
  {
    imgPath: "images/go-skmore-crop.png",
    title: "GO-SK",
    body: "Job board for people hoping to work in South Korea",
    liveHref: "https://go-sk.vercel.app/",
    stack: [
      "React",
      "Next.js",
      "Prisma",
      "TypeScript",
      "PostgreSQL",
      "Railway",
    ],
    github: "https://github.com/devldm/go-sk",
  },
  {
    imgPath: "",
    title: "Component showcase (Storybook)",
    body: "A showcase of custom built React / TailwindCSS components in Storybook",
    liveHref: "https://liam-component-showcase.vercel.app/",
    stack: ["Storybook", "tailwindCSS", "Next.js"],
    github: "https://github.com/devldm/component-showcase",
  },
  // {
  //   imgPath: "",
  //   title: "This Portfolio Site",
  //   body: "Simple portfolio site built with Astro and tailwindCSS",
  //   liveHref: "",
  //   stack: ["Astro", "tailwindCSS", "Vercel"],
  //   github: "https://github.com/devldm/astro-portfolio",
  // },
];
