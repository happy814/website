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
