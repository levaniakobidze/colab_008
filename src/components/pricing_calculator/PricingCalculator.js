import React from "react";
import PricingMenuComponent from "./PricingMenuComponent";
import { useState } from "react";

const PricingCalculator = () => {
  const [inputSwitch, setInputSwitch] = useState(false);

  return (
    <div className="pricingCalculatorContainer">
      <div className="switchContainer">
        <span className="switchMonth">Month</span>
        <div
          onClick={() => setInputSwitch(!inputSwitch)}
          className={inputSwitch ? "inputSwitched" : "inputContainer"}
        >
          <div className="switch"></div>
        </div>

        <span className="switchYear">Year</span>
      </div>
      <div className="pricingComponentsContainer">
        <PricingMenuComponent
          height={"407px"}
          title={"Basic"}
          paragraph={
            "Includes basic usage of our platform. Recommended for new and aspiring photographers."
          }
          price={inputSwitch ? "$190.00" : "$19.00"}
        />
        <PricingMenuComponent
          background={"black"}
          color={"white"}
          height={window.inerWidth < 768 ? "470px" : "407px"}
          title={"Pro"}
          paragraph={
            "More advanced features available. Recommended for photography veterans and professionals."
          }
          price={inputSwitch ? "$390.00$" : "$39.00"}
        />
        <PricingMenuComponent
          height={"407px"}
          title={"Business"}
          paragraph={
            "Additional features available such as more detailed metrics. Recommended for business owners."
          }
          price={inputSwitch ? "$990.00" : "$99.00"}
        />
      </div>
    </div>
  );
};

export default PricingCalculator;
