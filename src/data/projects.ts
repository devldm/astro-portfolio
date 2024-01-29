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
    imgPath: "/images/go-skmore-crop.png",
    title: "GO-SK",
    body: "I am currently looking for a role in South Korea and wanted to help others who might be in my position by making a platform suited for them.",
    body_kr:
      "한국에서 취직하고자 하는 개발자들을 위해 한국 개발자 채용 사이트를 만들었습니다.",
    liveHref: "https://go-sk.vercel.app/",
    stack: [
      "React",
      "Next.js",
      "Prisma",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "playwright",
    ],
    github: "https://github.com/devldm/go-sk",
  },
  {
    imgPath: "/images/grammar-check.png",
    title: "GrammarCheck",
    body: "In progress project that allows people to practice Korean grammar.",
    body_kr:
      "한국어를 혼자 공부하고 싶은 사람들을 위해 만들었습니다. 한국어 문법을 연습할 수 있습니다.",
    liveHref: "",
    stack: ["Next.js", "tailwindCSS", "Clerk", "Go", "go-chi", "Docker"],
    github: "https://github.com/devldm/grammar-check-go/",
  },
  {
    imgPath: "/images/airbnb-crop-more-1.png",
    title: "airbnb remake",
    body: "Remake of airbnb website where you can view listings",
    body_kr:
      "airbnb와 비슷한 사이트이며, 다양한 에어비엔비 리스트를 확인할 수 있습니다.",
    liveHref: "",
    stack: ["React", "tailwindCSS", "Next.js", "Go", "Fiber", "MongoDB"],
    github: "https://github.com/devldm/go-next",
  },
  {
    imgPath: "/images/wallet-crop-1.png",
    title: "Simple Android Wallet",
    body: "lightweight and android native cryptocurrency wallet. Send, receive and store currencies held on ethereum networks",
    body_kr: "가상 화페 지갑으로, 가상화폐를 받고 보내고 보관할 수 있습니다. ",
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
    body_kr: "",
    liveHref: "",
    stack: ["Astro", "tailwindCSS", "Vercel"],
    github: "https://github.com/devldm/astro-portfolio",
  },
];
