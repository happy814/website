// Define a type for the structure of each data item in the DATA array
export interface DataItem {
  id: number;
  number: string;
  title: string;
}

// Define the type of the entire DATA array as an array of DataItem objects
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

// Define the type for paragraphContent as a simple string
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
