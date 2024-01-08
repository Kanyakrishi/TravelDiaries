import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Header */}
        <Header />
        {/* Content */}
        <div className="font-extralight p-10">
          <p>Coming Soon...</p>
          <p className="font-extralight text-xs">A small blog on each state visited</p>
        </div>
        {/* Body */}
      </main>
      <Footer />
    </div>
  );
}
