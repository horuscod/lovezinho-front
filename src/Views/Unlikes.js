import React from "react";

import MainLayout from "../LayoutTemplate/MainLayout/MainLayout";
import CardsLike from "../Components/CardsLike/CardsLike";
import { useAuthorizedUser } from "../Context/AuthUserContext";

const Unlikes = () => {
  const { dataPerson } = useAuthorizedUser();
  return (
    <MainLayout>
      <CardsLike
        titlePage="Pessoas que eu não gostei
"
        data={
          dataPerson[0].arrayUnlikes.length > 0
            ? dataPerson[0].arrayUnlikes
            : []
        }
      />
    </MainLayout>
  );
};

export default Unlikes;
