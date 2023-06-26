import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import RecipeSection from "../Components/RecipeSection/RecipeSection";
import WaysSection from "../Components/WaysSection/WaysSection";
import MoneySection from "../Components/MoneySection/MoneySection";
import MarksSection from "../Components/MarksSection/MarksSection";
import SeekSection from "../Components/SeekSection/SeekSection";
import PercentageSection from "../Components/PercentageSection/PercentageSection";

const FourthPage = (props) => {

  localStorage.setItem('pageNumber', 4);

  return (
    <>
      <HeroSection
        color="golden"
        whiteBlock={true}
        thirdScroll={true}
        lang={props.langData}
      />
      <RecipeSection lang={props.langData} />
      <WaysSection
        text="The Power of Morgi's Monetization: 4 Fantastic Options"
        lang={props.langData}
        image="waysBg4"
      />
      <PercentageSection lang={props.langData} />
      <MoneySection lang={props.langData} img={"moneyBg4"} />
      <MarksSection lang={props.langData} />
      <SeekSection lang={props.langData} />
    </>
  );
};

export default FourthPage;
