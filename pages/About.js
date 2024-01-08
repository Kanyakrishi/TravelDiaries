import React from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Header */}
        <Header />
        {/* Content */}
        <div className="font-extralight p-10">
          <p>
            This is a personal project that was created using Next.js
            TailwindCSS and GoogleMapsAPI.{" "}
          </p>
          <p>The API KEY is not deployed due to privacy reasons.</p>
        </div>
        {/* Body */}
      </main>
      <Footer />
    </div>
  );
}
