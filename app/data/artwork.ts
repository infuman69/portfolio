export interface Artwork {
  /** 1-based plate number. Also drives the number strip and the `#03` deep link. */
  index: number;
  /** 4:3 crop, ~1600x1200. Omit to render the numbered placeholder plate. */
  image?: string;
  /** Optional half-size source used as the mobile `srcset` candidate. */
  imageSmall?: string;
  title: string;
  /** Optional — the caption and alt text drop the segment when absent. */
  medium?: string;
  year: number;
  /** Falls back to `title · medium`, or just `title` without a medium. */
  alt?: string;
}

/**
 * Drop the crops into `public/artwork/` and point `image` at them, e.g.
 * `image: "/artwork/01.jpg", imageSmall: "/artwork/01@0.5x.jpg"`.
 * Pieces without an `image` render as a numbered placeholder plate.
 */
export const artworks: Artwork[] = [
  { index: 1, title: "Michael Schumacher's F2002", year: 2026,image:"https://res.cloudinary.com/jtxo7pau/image/upload/f_auto,q_auto/f2002" },
  {index:2,title:"Japanese Cafe",year: 2026,image:"https://res.cloudinary.com/jtxo7pau/image/upload/f_auto,q_auto/japanese-cafe.png"},
  {index:3,title:"Absolute Batman",year: 2026,image:"https://res.cloudinary.com/jtxo7pau/image/upload/f_auto,q_auto/absolute-batman.png"},
  {index:4,title:"Absolute Batman Cover",year: 2026,image:"https://res.cloudinary.com/jtxo7pau/image/upload/f_auto,q_auto/absolute-batman-cover.png"},
  {index:5,title:"Miles Morales and Gwen Stacy",year: 2026,image:"https://res.cloudinary.com/jtxo7pau/image/upload/f_auto,q_auto/miles-and-gwen.png"}
];
