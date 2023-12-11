import React from "react";

import MainLayout from "../LayoutTemplate/MainLayout/MainLayout";
import CardsLike from "../Components/CardsLike/CardsLike";
import { useAuthorizedUser } from "../Context/AuthUserContext";

const Likes = () => {
  const { dataPerson } = useAuthorizedUser();

  return (
    <MainLayout>
      <CardsLike
        titlePage="Meus Likes"
        data={
          dataPerson[0].arrayLikes.length > 0 ? dataPerson[0].arrayLikes : []
        }
      />
    </MainLayout>
  );
};

export default Likes;
