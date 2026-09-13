export type GalleryImageType = {
  src: string;
  descr: string[];
};

export type ProjectType = {
  name: string;
  description: string;
  date: string;
  link?: string;
  stack: string[];
  previewImg: string;
  galleryImages: GalleryImageType[];
};

export const projectsData: ProjectType[] = [
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/kreator/1.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Flwr",
    link: "https://www.kreator-bud.com/",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "February 2024",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/flwr/5.jpg",
    galleryImages: [
      {
        src: "projects/flwr/full/pages.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },

      {
        src: "projects/flwr/full/ch1.jpg",
        descr: ["Checout"],
      },

      {
        src: "projects/flwr/full/ch2.jpg",
        descr: ["Checout 2"],
      },

      {
        src: "projects/flwr/full/ch3.jpg",
        descr: ["Checout 2"],
      },

      {
        src: "projects/flwr/full/main.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Flower Project 1",
    link: "https://www.kreator-bud.com/",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "February 2024",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/flwr/1.jpg",
    galleryImages: [
      {
        src: "projects/flwr1.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/flwr2.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Flower Project 1",
    link: "https://www.kreator-bud.com/",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "February 2024",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/forest/1.jpg",
    galleryImages: [
      {
        src: "projects/flwr1.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/flwr2.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Flower Project 1",
    link: "https://www.kreator-bud.com/",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "February 2024",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/cube/1.jpg",
    galleryImages: [
      {
        src: "projects/flwr1.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/flwr2.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/kreator/2.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/rider/3.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/belmont/2.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/omriyane/1.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/vernadsky/1.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/sea/1.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/nexus/1.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/capital/1.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/bapco_ui/2.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/omriyane/2.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/news/1.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/belmont/1.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/rider/2.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/belmont/3.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/centralpark/1.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/solarvie/1.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/camp/1.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Flower Project 1",
    link: "https://www.kreator-bud.com/",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "February 2024",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/forest/2.jpg",
    galleryImages: [
      {
        src: "projects/flwr1.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/flwr2.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Flower Project 1",
    link: "https://www.kreator-bud.com/",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "February 2024",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/cube/2.jpg",
    galleryImages: [
      {
        src: "projects/flwr1.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/flwr2.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Flower Project 1",
    link: "https://www.kreator-bud.com/",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "February 2024",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/421/1.jpg",
    galleryImages: [
      {
        src: "projects/flwr1.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/flwr2.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/camp/2.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "January 2024",
    link: "https://www.kreator-bud.com/",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/rider/1.jpg",
    galleryImages: [
      {
        src: "projects/kreator/1.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/kreator/3.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Project Me 6",
    link: "https://www.kreator-bud.com/",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "April 2024",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/flwr/3.jpg",
    galleryImages: [
      {
        src: "projects/kreator/2.jpg",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/flwr3.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Flower Project 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "May 2024",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/flwr/4.jpg",
    galleryImages: [
      {
        src: "projects/flwr3.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/flwr4.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Flower Project 1",
    link: "https://www.kreator-bud.com/",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "February 2024",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/flwr/6.jpg",
    galleryImages: [
      {
        src: "projects/flwr1.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/flwr2.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
  {
    name: "Flower Project 1",
    link: "https://www.kreator-bud.com/",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
    date: "February 2024",
    stack: ["Next.js", "GSAP"],
    previewImg: "projects/forest/3.jpg",
    galleryImages: [
      {
        src: "projects/flwr1.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
      {
        src: "projects/flwr2.png",
        descr: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nesciunt?",
        ],
      },
    ],
  },
];
