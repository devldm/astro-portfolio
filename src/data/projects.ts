export type ProjectType = {
  title: string;
  body: string;
  stack: string[];
  liveHref: string | null;
  github: string;
};

export const Projects: ProjectType[] = [
  {
    title: "airbnb remake",
    body: "Remake of airbnb website where you can view listings",
    liveHref: "https://go-next-three.vercel.app/",
    stack: ["React", "Next.js", "tailwindCSS", "Go", "Fiber", "MongoDB"],
    github: "https://github.com/devldm/go-next",
  },
  {
    title: "Simple Android Wallet",
    body: "Cryptocurrency wallet with a main goal of been lightweight and android native. It could send, receive and store currencies held on ethereum and polygon networks",
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
    title: "GO-SK",
    body: "I am currently looking for a role in South Korea and wanted to help others who might be in my position by making a platform suited for them.",
    liveHref: "https://go-sk.vercel.app/",
    stack: [
      "React",
      "Next.js",
      "Prisma",
      "TypeScript",
      "Vercel",
      "PostgreSQL",
      "Railway",
    ],
    github: "https://github.com/devldm/go-next",
  },
  {
    title: "This Portfolio Site",
    body: "Simple portfolio site built with Astro and tailwindCSS",
    liveHref: "",
    stack: ["Astro", "tailwindCSS"],
    github: "https://github.com/devldm/astro-portfolio",
  },
];
