import React from "react";

import MainLayout from "../LayoutTemplate/MainLayout/MainLayout";
import CardsLike from "../Components/CardsLike/CardsLike";

const Visitors = () => {
  data = [
    {
      nameProfileBot: "Novo 001",
      imageProfileBot:
        "https://firebasestorage.googleapis.com/v0/b/vellho-rico.appspot.com/o/default%2FoldMans%2F4.png?alt=media&token=00455f40-d31a-4e39-8a57-5afb554d1895",
    },
  ];
  return (
    <MainLayout>
      <CardsLike titlePage="Visitantes" data={data}/>
    </MainLayout>
  );
};

export default Visitors;
