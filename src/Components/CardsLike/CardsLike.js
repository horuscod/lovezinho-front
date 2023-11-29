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

const CardsLike = ({ titlePage }) => {
  return (
    <ContentCards>
      <TitlePage>{titlePage}</TitlePage>
      <LineCards>
        <ItemCard>
          <ImageCardLike></ImageCardLike>
          <NamePersonLike>Nome da Pessoa</NamePersonLike>
          <LabelLastLike>2 dias atrás</LabelLastLike>
          <ButtonUnlike>
            <FaHeart />
          </ButtonUnlike>
        </ItemCard>
        <ItemCard>
          <ImageCardLike></ImageCardLike>
          <NamePersonLike>Nome da Pessoa</NamePersonLike>
          <LabelLastLike>2 dias atrás</LabelLastLike>
          <ButtonUnlike>
            <FaHeart />
          </ButtonUnlike>
        </ItemCard>
        <ItemCard>
          <ImageCardLike></ImageCardLike>
          <NamePersonLike>Nome da Pessoa</NamePersonLike>
          <LabelLastLike>2 dias atrás</LabelLastLike>
          <ButtonUnlike>
            <FaHeart />
          </ButtonUnlike>
        </ItemCard>
        <ItemCard>
          <ImageCardLike></ImageCardLike>
          <NamePersonLike>Nome da Pessoa</NamePersonLike>
          <LabelLastLike>2 dias atrás</LabelLastLike>
          <ButtonUnlike>
            <FaHeart />
          </ButtonUnlike>
        </ItemCard>
        <ItemCard>
          <ImageCardLike></ImageCardLike>
          <NamePersonLike>Nome da Pessoa</NamePersonLike>
          <LabelLastLike>2 dias atrás</LabelLastLike>
          <ButtonUnlike>
            <FaHeart />
          </ButtonUnlike>
        </ItemCard>
      </LineCards>
    </ContentCards>
  );
};

export default CardsLike;
