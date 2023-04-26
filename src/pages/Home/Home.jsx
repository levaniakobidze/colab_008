import React from "react";
import Hero from "../../components/Hero/Hero";
import Features3 from "../../components/FeaturesTexts/Features3";
import firstImage from "../../assets/home/desktop/create-and-share.jpg";
import secondImage from "../../assets/home/desktop/beautiful-stories.jpg";
import thirdImage from "../../assets/home/desktop/designed-for-everyone.jpg";
const Home = () => {
  return (
    <div>
      <Hero
        direction={window.innerWidth < 768 ? "column" : "row-reverse"}
        img={firstImage}
        fill={"white"}
        background={"black"}
        color={"white"}
        header={"Create and share your photo stories."}
        paragraph={
          "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        }
      />
      <Hero
        img={secondImage}
        lineOff={"none"}
        fill={"black"}
        background={"white"}
        color={"black"}
        direction={window.innerWidth < 768 ? "column" : "row"}
        header={"BEAUTIFUL STORIES EVERY TIME"}
        paragraph={
          "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        }
      />
      <Hero
        direction={window.innerWidth < 768 ? "column" : "row-reverse"}
        img={thirdImage}
        lineOff={"none"}
        fill={"black"}
        background={"white"}
        color={"black"}
        header={"DESIGNED FOR EVERYONE"}
        paragraph={
          "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
        }
      />
      <Features3 />
    </div>
  );
};

export default Home;
