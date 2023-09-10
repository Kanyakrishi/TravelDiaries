import Header from "@/components/Header";
import Maps from "@/pages/Maps";
import Image from "next/image";
import BackgroundImage from "@/components/BackgroundImage";
import { Route, Routes, useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen w-full bg-cover bg-no-repeat">
      {/* Header */}
      <Header />

      {/* Image */}
      <BackgroundImage />

      {/* Body */}
      
    </div>
  );
}
