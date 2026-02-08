"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="nav-link font-medium">
          home
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/blog" className="nav-link">
            blog
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
