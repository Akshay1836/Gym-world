import React from "react";
import Hero from "./Hero";
import Cardlist from "./Cardlist";
import Circle from "./Circle";
import Review from "./Review";
import ImageBar from "./ImageBar";
import Login from "./Login";
import Footer from "./Footer";
import circle1 from "../Images/circle1.jpg";
import circle2 from "../Images/circle2.jpg";
import circle3 from "../Images/circle3.webp";
import zumba from "../Images/zumba.jpg";

function Home() {
  return (
    <div>
      <Hero />
      <Cardlist />
      <Circle
        imgsrc1={circle1}
        imgsrc2={circle2}
        title={"Facilities"}
        head1={"EQUIPMENTS"}
        head2={"GROUP CLASSES"}
      />
      <Circle
        imgsrc1={circle3}
        imgsrc2={zumba}
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
