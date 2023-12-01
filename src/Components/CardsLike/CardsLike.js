import React from "react";
import {
  ButtonUnlike,
  ContentCards,
  ImageCardLike,
  ItemCard,
  LabelLastLike,
  LineCards,
  NamePersonLike,
  TitlePage,
} from "./StyledCardsLike";

import { FaHeart } from "react-icons/fa";

const CardsLike = ({ titlePage, data }) => {
  return (
    <ContentCards>
      <TitlePage>{titlePage}</TitlePage>
      <LineCards>
        {data.map((item, index) => (
          <ItemCard key={index}>
            <ImageCardLike src={item.urlImageMatch} />
            <NamePersonLike>{item.nameMatch}</NamePersonLike>
            <LabelLastLike>2 dias atrás</LabelLastLike>
            <ButtonUnlike>
              <FaHeart />
            </ButtonUnlike>
          </ItemCard>
        ))}
      </LineCards>
    </ContentCards>
  );
};

export default CardsLike;
