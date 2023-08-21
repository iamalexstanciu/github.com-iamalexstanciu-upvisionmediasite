import React from "react";
import "../styling/Home.css";
import CarouselTest from "../components/CarouselTest";
function Home() {
  const images = [
    "https://www.akseldigital.com/wp-content/uploads/2018/09/web-design-agency-services-1.jpg",
    "https://digifix.co.in/wp-content/uploads/2021/12/web-design-concept-with-drawings-2048x1365.jpg",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  ];

  return (
    <>
      <CarouselTest images={images} />
      <div className="call_to_action" id="neon">
     
        <button data-text="Awesome" class="buttonpma">
          <span class="actual-text">&nbsp;Work with us&nbsp;</span>
          <span class="hover-text" aria-hidden="true" style={{fontSize:"20px"}}>
            &nbsp;↧UpVisionMedia&nbsp;
          </span>
        </button>
      </div>
    </>
  );
}

export default Home;
