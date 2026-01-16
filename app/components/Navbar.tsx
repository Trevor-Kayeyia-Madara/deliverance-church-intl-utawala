"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-8 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="DC Utawala" width={40} height={40} />
          <span className="font-bold text-primary">
            Deliverance Church Utawala
          </span>
        </Link>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About Us ▼</Link>
          <Link href="/services">Services ▼</Link>
          <Link href="/ministries">Ministries ▼</Link>
          <Link href="/events">Events</Link>
          <Link href="/connect">Connect ▼</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/give"
            className="bg-gold px-5 py-2 rounded font-semibold text-dark"
          >
            Give
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About Us ▼</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>Services ▼</Link>
            <Link href="/ministries" onClick={() => setIsOpen(false)}>Ministries ▼</Link>
            <Link href="/events" onClick={() => setIsOpen(false)}>Events</Link>
            <Link href="/connect" onClick={() => setIsOpen(false)}>Connect ▼</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
