import React from "react";
import {
  BoxContentImage,
  BoxContentMatch,
  ButtonLike,
  ButtonPerfil,
  ButtonUnlike,
  CollumNextMatch,
  ContentButtons,
  ContentDetail,
  ContentImage,
  ContentInfoPerson,
  ContentNamePerson,
  DetailAbout,
  DetailInfoName,
  NextMatchImage,
} from "./StyledMatch";

import ImageDef from "../../../public/imgs/d-avatar.webp";

import { FaHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Match = () => {
  return (
    <BoxContentMatch>
      {/* Coluna 1 */}
      <BoxContentImage>
        <ContentImage src={ImageDef} />
        <ContentInfoPerson>
          <ContentNamePerson>Alana Nunes,</ContentNamePerson>
          <ContentDetail> 25 </ContentDetail>
          <ContentDetail> Brazil</ContentDetail>
        </ContentInfoPerson>
        <ContentButtons>
          <ButtonLike>
            <FaHeart />
          </ButtonLike>
          <ButtonUnlike>
            <IoClose />
          </ButtonUnlike>
        </ContentButtons>
      </BoxContentImage>
      {/* Coluna 2*/}
      <DetailAbout>
        <DetailInfoName>Sobre Alana Nunes</DetailInfoName>
        <DetailInfoName>Lingua preferida</DetailInfoName>
        <detailInfoName2>Português</detailInfoName2>
        <DetailInfoName>Altura</DetailInfoName>
        <detailInfoName2>1,75</detailInfoName2>
        <br/>
        <br/>
        <br/>
        <br/>
        <ButtonPerfil>Perfil</ButtonPerfil>
      </DetailAbout>
      {/* Coluna 3*/}
      <CollumNextMatch>
        <NextMatchImage src={ImageDef} />
        <NextMatchImage src={ImageDef} />
        <NextMatchImage src={ImageDef} />
        <NextMatchImage src={ImageDef} />
        <NextMatchImage src={ImageDef} />
        <NextMatchImage src={ImageDef} />
      </CollumNextMatch>
    </BoxContentMatch>
  );
};

export default Match;
