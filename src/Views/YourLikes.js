import React from "react";

import MainLayout from "../LayoutTemplate/MainLayout/MainLayout";
import CardsLike from "../Components/CardsLike/CardsLike";

const YourLikes = () => {
  return (
    <MainLayout>
      <CardsLike titlePage="Pessoas que eu gostei" />
    </MainLayout>
  );
};

export default YourLikes;
