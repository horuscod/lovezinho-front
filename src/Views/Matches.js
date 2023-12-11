import React from "react";

import MainLayout from "../LayoutTemplate/MainLayout/MainLayout";
import CardsLike from "../Components/CardsLike/CardsLike";
import { useAuthorizedUser } from "../Context/AuthUserContext";

const Matches = () => {
  const { dataPerson } = useAuthorizedUser();
  return (
    <MainLayout>
      <CardsLike
        titlePage="Match"
        data={
          dataPerson[0].matchsArray.length > 0 ? dataPerson[0].matchsArray : []
        }
      />
    </MainLayout>
  );
};

export default Matches;
