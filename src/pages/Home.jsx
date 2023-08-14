import React from "react";
import "../styling/Home.css";
import Cards from "./Cards";
import CarouselTest from "../components/CarouselTest";
function Home() {
  const images = [
    "https://cdn.dribbble.com/userupload/3535004/file/original-4e5c228ade24b899b72eec7ae337394d.png?resize=1200x900",
    "https://cdn.dribbble.com/userupload/4031828/file/original-b3f145dcdded54ded1fa81c011af2434.png?resize=1200x900",
    "https://cdn.dribbble.com/users/2125046/screenshots/15032216/media/29bb9d0c38cb4314c00d642a346104ed.png?resize=1000x750&vertical=center",
  ];

  return (
    <>
      <CarouselTest images={images} />
    </>
  );
}

export default Home;
