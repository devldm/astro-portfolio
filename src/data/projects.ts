export type ProjectType = {
  imgPath?: string;
  title: string;
  body: string;
  body_kr?: string;
  stack: string[];
  liveHref: string | null;
  github: string;
};

export const Projects: ProjectType[] = [
  {
    imgPath: "/images/gc.png",
    title: "GrammarCheck",
    body: "In progress project that allows people to practice Korean grammar.",
    body_kr: "한국어 문법 연습할 수 있습니다.",
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
    imgPath: "/images/airbnb-crop-more-1.png",
    title: "airbnb remake",
    body: "Remake of airbnb website where you can view listings",
    body_kr: "airbnb 비슷한 사이트. 다른 airbnb의 볼 수 있습니다.",
    liveHref: "https://go-next-three.vercel.app/",
    stack: ["React", "tailwindCSS", "Next.js", "Go", "Fiber", "MongoDB"],
    github: "https://github.com/devldm/go-next",
  },
  {
    imgPath: "/images/wallet-crop-1.png",
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
    imgPath: "/images/go-skmore-crop.png",
    title: "GO-SK",
    body: "I am currently looking for a role in South Korea and wanted to help others who might be in my position by making a platform suited for them.",
    body_kr:
      "지금은 한국 회사가 취직하고 싶어서 한국 채용 사이트가 만들었습니다.",
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
  {
    imgPath: "",
    title: "This Portfolio Site",
    body: "Simple portfolio site built with Astro and tailwindCSS",
    liveHref: "",
    stack: ["Astro", "tailwindCSS", "Vercel"],
    github: "https://github.com/devldm/astro-portfolio",
  },
];
