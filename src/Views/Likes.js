import React from "react";

import MainLayout from "../LayoutTemplate/MainLayout/MainLayout";
import CardsLike from "../Components/CardsLike/CardsLike";

const Likes = () => {
  return (
    <MainLayout>
      <CardsLike titlePage="Meus Likes" />
    </MainLayout>
  );
};

export default Likes;
