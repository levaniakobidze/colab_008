import React from "react";
import PricingCalculator from "../../components/pricing_calculator/PricingCalculator";
import CompareTable from "../../components/CompareTable/CompareTable";
import PricingHero from "../../components/PricingHero/PricingHero";

const Pricing = () => {
  return (
    <div>
      <PricingHero />
      <PricingCalculator />
      <CompareTable />
    </div>
  );
};

export default Pricing;
