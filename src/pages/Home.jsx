import React from "react";
import "../styling/Home.css";
import CarouselTest from "../components/CarouselTest";
function Home() {
  const images = [
    "https://www.akseldigital.com/wp-content/uploads/2018/09/web-design-agency-services-1.jpg",
    "https://digifix.co.in/wp-content/uploads/2021/12/web-design-concept-with-drawings-2048x1365.jpg",
    "https://www.visualmarketing.com.au/wp-media/Dollarphotoclub_76030506.jpg",
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
