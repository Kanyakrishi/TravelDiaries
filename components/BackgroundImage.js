import React from 'react';
import Image from "next/image";

function BackgroundImage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex-grow bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/fluid/city/018.jpg')",
        }}
      >
        {/* Other content goes here */}
      </div>
    </div>
  );
}

export default BackgroundImage
