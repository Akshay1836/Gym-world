import React from "react";
import Hero from "./Hero";
import Cardlist from "./Cardlist";
import Circle from "./Circle";
import Review from "./Review";
import ImageBar from "./ImageBar";
import Login from "./Login";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Cardlist />
      <Circle
        imgsrc1={"./src/images/circle1.jpg"}
        imgsrc2={"./src/images/circle2.jpg"}
        title={"Facilities"}
        head1={"EQUIPMENTS"}
        head2={"GROUP CLASSES"}
      />
      <Circle
        imgsrc1={"./src/images/circle3.webp"}
        imgsrc2={"./src/images/zumba.jpg"}
        head1={"CARDIO"}
        head2={"ZUMBA"}
      />
      <Review />
      <ImageBar />
      <Login />
      <Footer />
    </div>
  );
}

export default Home;
