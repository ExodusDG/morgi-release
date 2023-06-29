import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import SucceedSection from "../Components/SucceedSection/SucceedSection";
import RecipeSection from "../Components/RecipeSection/RecipeSection";
import WaysSection from "../Components/WaysSection/WaysSection";
import ReturnSection from "../Components/ReturnSection/ReturnSection";
import PercentageSection from "../Components/PercentageSection/PercentageSection";
import MoneySection from "../Components/MoneySection/MoneySection";
import MarksSection from "../Components/MarksSection/MarksSection";
import SeekSection from "../Components/SeekSection/SeekSection";
import cardImgSecond from "../Images/cardImgSecond.webp";
import heroImage from "../Images/heroImage2.webp";
import heroImageMobile from "../Images/heroImage2Mobile.webp";

const SecondPage = (props) => {
  localStorage.setItem("pageNumber", 2);

  return (
    <>
      <HeroSection
        color="green"
        lang={props.langData}
        image={heroImage}
        mobileImage={heroImageMobile}
      />
      <SucceedSection
        color="green"
        image={cardImgSecond}
        lang={props.langData}
      />
      <RecipeSection
        text="Whether you want to continue the cam life, or shift gears, in Morgi you can:"
        lang={props.langData}
      />
      <WaysSection lang={props.langData} />
      <ReturnSection lang={props.langData} />
      <PercentageSection lang={props.langData} />
      <MoneySection lang={props.langData} />
      <MarksSection lang={props.langData} />
      <SeekSection header={false} lang={props.langData} />
    </>
  );
};

export default SecondPage;
