import React from "react";
import Hero from "../../components/Hero/Hero";
import PricingCalculator from "../../components/pricing_calculator/PricingCalculator";
import CompareTable from "../../components/CompareTable/CompareTable";
const Home = () => {
  return (
    <div>
      <CompareTable />
<PricingCalculator />
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
      <Hero
        background={"white"}
        color={"black"}
        header={"DESIGNED FOR EVERYONE"}
        paragraph={
          "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
        }
      />
    </div>
  );
};

export default Home;
