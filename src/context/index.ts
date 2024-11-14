export interface DataItem {
  id: number;
  number: string;
  title: string;
}

export const DATA: DataItem[] = [
  {
    id: 1,
    number: "01.",
    title: "CONSULTANCY SERVICES",
  },
  {
    id: 2,
    number: "01.",
    title: "CONSULTANCY SERVICES",
  },
  {
    id: 3,
    number: "01.",
    title: "CONSULTANCY SERVICES",
  },
  {
    id: 4,
    number: "01.",
    title: "CONSULTANCY SERVICES",
  },
];

export const paragraphContent: string = "GOALS";

// Define types for the structure of aboutContent
export interface AboutContent {
  vision: string[];
  vision2: string[];
  mission: string[];
}

export const aboutContent: AboutContent = {
  vision: [
    `Cryptography and FOSS are the two primary tools of ours. We
    are utilizing Bitcoin (not crypto), and nostr among other
    things to achieve our goals. Cryptography and FOSS are the two
    primary tools of ours. We are utilizing Bitcoin (not crypto),
    and nostr among other things to achieve our goals.Cryptography
    and FOSS are the two primary tools of ours. We are utilizing
    Bitcoin (not crypto), and nostr among other things to achieve
    our goals.Cryptography and FOSS are the two primary tools of
    ours. We are utilizing Bitcoin (not crypto), and nostr among
    other`,
  ],
  vision2: [
    `
    Things to achieve our goals.Cryptography and FOSS are the two
    primary tools of ours. We are utilizing Bitcoin (not crypto),
    and nostr among other things to achieve our goals.Cryptography
    and FOSS are the two primary tools of ours. We are utilizing
    Bitcoin (not crypto), and nostr among other things to achieve
    our goals.
    `,
  ],
  mission: [
    `
    Things to achieve our goals.Cryptography and FOSS are the
    two primary tools of ours. We are utilizing Bitcoin (not
    crypto), and nostr among other things to achieve our
    goals.Cryptography and FOSS are the two primary tools of
    ours. We are utilizing Bitcoin (not crypto), and nostr among
    other things to achieve our goals.
    `,
  ],
};
// Define types for the structure of Client Content
export interface ClientWork {
  id: number;
  title: string;
  description: string;
  buttonimg: string;
  imageUrl: string;
  line: string;
}

export const clientWorkData: ClientWork[] = [
  {
    id: 1,
    title: "NAME OF THE PROJECT",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum morbi est dignissim lobortis sem augue ullamcorper suspendisse diam. Ipsum suscipit sed in vitae suspendisse amet. Ut viverra praesent donec amet feugiat sem eget. Consectetur sagittis consequat pretium vitae non phasellus vel senectus.",
    buttonimg: "/Client/explore.png",
    imageUrl: "/Client/VectorM.png", // Replace with the actual image path
    line: "/Client/line.png",
  },
  {
    id: 2,
    title: "NAME OF THE PROJECT",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum morbi est dignissim lobortis sem augue ullamcorper suspendisse diam. Ipsum suscipit sed in vitae suspendisse amet.",
    buttonimg: "/Client/explore.png",
    imageUrl: "/Client/VectorM.png",
    line: "/Client/line.png",
  },
  {
    id: 3,
    title: "NAME OF THE PROJECT",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum morbi est dignissim lobortis sem augue ullamcorper suspendisse diam. Ipsum suscipit sed in vitae suspendisse amet. Ut viverra praesent donec amet feugiat sem eget. Consectetur sagittis consequat pretium vitae non phasellus vel senectus. orper suspendisse diam. Ipsum suscipit sed in vitae suspendisse amet. Ut viverra praesent donec amet feugiat sem eget. Consectetur sagittis conse",
    buttonimg: "/Client/explore.png",
    imageUrl: "/Client/VectorM.png",
    line: "/Client/line.png",
  },
  {
    id: 4,
    title: "NAME OF THE PROJECT",
    description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum morbi est dignissim lobortis sem augue ullamcorper suspendisse diam. Ipsum suscipit sed in vitae suspendisse amet. Ut viverra praesent donec amet feugiat sem eget. Consectetur sagittis consequat pretium vitae non phasellus vel senectus. c amet feugiat sem eget. Consectetur sagittis consequat pretium vitae no",
    buttonimg: "/Client/explore.png",
    imageUrl: "/Client/VectorM.png",
    line: "/Client/line.png",
  },
];

export interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
}

export const merchData: Product[] = [
  {
    id: 1,
    title: "Self-Custody",
    image: "/store/Items4.png",
    price: 700,
    category: "T-Shirts",
  },
  {
    id: 2,
    title: "Self-Custody T-Shirt",
    image: "/store/Items.png",
    price: 700,
    category: "T-Shirts",
  },
  {
    id: 3,
    title: "Self-Custody T-Shirt",
    image: "/store/Items2.png",
    price: 700,
    category: "T-Shirts",
  },
  {
    id: 4,
    title: "Self-Custody T-Shirt",
    image: "/store/Items5.png",
    price: 700,
    category: "T-Shirt",
  },
  {
    id: 5,
    title: "Self-Custody T-Shirt",
    image: "/store/Items3.png",
    price: 700,
    category: "T-Shirts",
  },
  {
    id: 6,
    title: "Self-Custody T-Shirt",
    image: "/store/Items5.png",
    price: 700,
    category: "T-Shirts",
  },
  {
    id: 7,
    title: "Self-Custody T-Shirt",
    image: "/store/Items4.png",
    price: 700,
    category: "T-Shirts",
  },
  {
    id: 8,
    title: "Self-Custody T-Shirt",
    image: "/store/Items5.png",
    price: 700,
    category: "T-Shirts",
  },
  {
    id: 9,
    title: "Self-Custody T-Shirt",
    image: "/store/Items2.png",
    price: 700,
    category: "T-Shirts",

export interface Support {
  id: number;
  // heading: string;
  description: string;
  buttonText: string;
}

export const missionData: Support[] = [
  {
    id: 1,
    // heading: `EMPOWER CHANGE: SUPPORT OUR MISSION`,
    description: `Support our mission by making a donation today. Your contribution helps us continue to build privacy-focused, censorship-resistant software that empowers individuals to take control of their data and online freedom. Every donation, no matter the size, directly fuels our ability to innovate, develop new tools, and enhance the security of our community. Join us in creating a more secure, self-sovereign future for everyone. Together, we can make a difference!`,
    buttonText: "SUPPORT US",

  },
];
