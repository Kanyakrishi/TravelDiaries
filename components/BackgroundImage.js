import React from 'react';
import Image from "next/image";

function BackgroundImage() {
  return (
    <div>
      <Image
        src="https://mdbcdn.b-cdn.net/img/new/fluid/city/018.jpg"
        layout="fill"
        alt="background image"
      />
    </div>
  );
}

export default BackgroundImage
