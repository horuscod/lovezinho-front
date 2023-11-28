import React from "react";
import {
  BoxLateral,
  ContentBox,
  ItemLabelMenu,
  ItemMenu,
  ItemSVGMenu,
  LineMenu,
} from "./StyledLateralMenu";

const LateralMenu = () => {
  return (
    <BoxLateral>
      <ContentBox>Componente do perfil dados</ContentBox>
      <ContentBox>
        <ItemMenu>
          <ItemSVGMenu></ItemSVGMenu>
          <ItemLabelMenu>Encontrar Matches</ItemLabelMenu>
        </ItemMenu>
        <ItemMenu>
          <ItemSVGMenu></ItemSVGMenu>
          <ItemLabelMenu>Matches</ItemLabelMenu>
        </ItemMenu>
        <ItemMenu>
          <ItemSVGMenu></ItemSVGMenu>
          <ItemLabelMenu>Visitantes</ItemLabelMenu>
        </ItemMenu>
      </ContentBox>
      <LineMenu />
      <ContentBox>
        <ItemMenu>
          <ItemSVGMenu></ItemSVGMenu>
          <ItemLabelMenu>Likes</ItemLabelMenu>
        </ItemMenu>
        <ItemMenu>
          <ItemSVGMenu></ItemSVGMenu>
          <ItemLabelMenu>Pessoas que eu gostei</ItemLabelMenu>
        </ItemMenu>
        <ItemMenu>
          <ItemSVGMenu></ItemSVGMenu>
          <ItemLabelMenu>Pessoas que eu não gostei</ItemLabelMenu>
        </ItemMenu>
      </ContentBox>
    </BoxLateral>
  );
};

export default LateralMenu;
