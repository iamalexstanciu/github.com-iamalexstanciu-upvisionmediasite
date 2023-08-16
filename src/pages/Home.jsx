import React from "react";
import "../styling/Home.css";
import CarouselTest from "../components/CarouselTest";
function Home() {
  const images = [
    "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  ];

  return (
    <>
      <CarouselTest images={images} />
      <div className="call_to_action" id="neon">
        <h1 class="neon">
          {" "}
          Transform your vision into reality.
          <br />
          Contact our web experts today!
        </h1>
      </div>
      
    </>
  );
}

export default Home;
