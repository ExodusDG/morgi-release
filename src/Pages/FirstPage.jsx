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
import cardImg from "../Images/cardImg.webp";

const FirstPage = (props) => {

  /* WRITE PAGE NUMBER TO LACAL STORAGE */

  localStorage.setItem('pageNumber', 1);

  return (
    <>
      <HeroSection lang={props.langData} />
      <SucceedSection image={cardImg} />
      <RecipeSection lang={props.langData} />
      <WaysSection lang={props.langData} />
      <ReturnSection lang={props.langData} />
      <PercentageSection lang={props.langData} />
      <MoneySection lang={props.langData} />
      <MarksSection lang={props.langData} />
      <SeekSection lang={props.langData} />
    </>
  );
};

export default FirstPage;
