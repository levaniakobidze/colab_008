import React from "react";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero
        background={"black"}
        color={"white"}
        header={"Create and share your photo stories."}
        paragraph={
          "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        }
      />
      <Hero
        background={"white"}
        color={"black"}
        direction={window.innerWidth < 768 ? "column" : "row-reverse"}
        header={"BEAUTIFUL STORIES EVERY TIME"}
        paragraph={
          "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        }
      />
    </div>
  );
};

export default Home;
