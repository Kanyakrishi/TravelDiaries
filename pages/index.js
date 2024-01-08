import Header from "@/components/Header";
import Maps from "@/pages/Maps";
import Image from "next/image";
import BackgroundImage from "@/components/BackgroundImage";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* Header */}
          <Header />
          {/* Image */}
          <BackgroundImage />
          {/* Body */}
        </main>
        <Footer />
      </div>
  );
}
