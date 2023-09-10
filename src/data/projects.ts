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
    imgPath: "./public/images/airbnb-crop-more-1.png",
    title: "airbnb remake",
    body: "Remake of airbnb website where you can view listings",
    liveHref: "https://go-next-three.vercel.app/",
    stack: ["React", "tailwindCSS", "Next.js", "Go", "Fiber", "MongoDB"],
    github: "https://github.com/devldm/go-next",
  },
  {
    imgPath: "./public/images/wallet-crop-1.png",
    title: "Simple Android Wallet",
    body: "lightweight and android native cryptocurrency wallet. Send, receive and store currencies held on ethereum networks",
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
    imgPath: "./public/images/go-skmore-crop.png",
    title: "GO-SK",
    body: "I am currently looking for a role in South Korea and wanted to help others who might be in my position by making a platform suited for them.",
    liveHref: "https://go-sk.vercel.app/",
    stack: [
      "React",
      "Next.js",
      "Prisma",
      "TypeScript",
      "PostgreSQL",
      "Railway",
    ],
    github: "https://github.com/devldm/go-next",
  },
  {
    imgPath: "",
    title: "Component showcase (Storybook)",
    body: "A showcase of custom built React / TailwindCSS components in Storybook",
    liveHref: "https://liam-component-showcase.vercel.app/",
    stack: ["Storybook", "tailwindCSS", "Next.js"],
    github: "https://github.com/devldm/component-showcase",
  },
  {
    imgPath: "",
    title: "This Portfolio Site",
    body: "Simple portfolio site built with Astro and tailwindCSS",
    liveHref: "",
    stack: ["Astro", "tailwindCSS", "Vercel"],
    github: "https://github.com/devldm/astro-portfolio",
  },
];
