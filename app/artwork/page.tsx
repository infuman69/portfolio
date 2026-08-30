import { Metadata } from "next";
import { artworks } from "@/app/data/artwork";
import ArtworkGallery from "./ArtworkGallery";

export const metadata: Metadata = {
  title: "Artwork",
  description: "A numbered sketchbook — drawings and paintings, one plate at a time.",
};

export default function ArtworkPage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <main className="page-container">
        <ArtworkGallery pieces={artworks} />
      </main>
    </div>
  );
}
