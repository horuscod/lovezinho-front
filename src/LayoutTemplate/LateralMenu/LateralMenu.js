import React from "react";
import {
  BoxContentProfile,
  BoxContentProfileInfo,
  BoxImagePremium,
  BoxImageProfile,
  BoxLateral,
  ButtonPlus,
  ContentBox,
  ContentImagesPremium,
  ImagePremium,
  ItemLabelMenu,
  ItemMenu,
  LineMenu,
  NameProfile,
  PopularProfile,
} from "./StyledLateralMenu";

import { WiDirectionUp } from "react-icons/wi";

import { GiLovers } from "react-icons/gi";
import { HiMiniUsers } from "react-icons/hi2";
import { GrView } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { BiSolidDislike } from "react-icons/bi";
import { FaFire } from "react-icons/fa";

import ImageDefault from "../../../public/imgs/d-avatar.webp";

const LateralMenu = () => {
  return (
    <BoxLateral>
      <BoxContentProfile>
        <BoxImageProfile src={ImageDefault} />
        <BoxContentProfileInfo>
          <NameProfile>Alana Nunes</NameProfile>
          <PopularProfile>Popularidade: Muito baixo</PopularProfile>
        </BoxContentProfileInfo>
      </BoxContentProfile>

      <ContentBox>
        <ButtonPlus>
          <WiDirectionUp />
          Aumentar Popularidade
        </ButtonPlus>
      </ContentBox>
      <ContentBox>
        <ItemMenu>
          <GiLovers />
          <ItemLabelMenu>Encontrar Matches</ItemLabelMenu>
        </ItemMenu>
        <ItemMenu>
          <HiMiniUsers />
          <ItemLabelMenu>Matches</ItemLabelMenu>
        </ItemMenu>
        <ItemMenu>
          <GrView />
          <ItemLabelMenu>Visitantes</ItemLabelMenu>
        </ItemMenu>
      </ContentBox>
      <LineMenu />
      <ContentBox>
        <ItemMenu>
          <FaHeart />
          <ItemLabelMenu>Likes</ItemLabelMenu>
        </ItemMenu>
        <ItemMenu>
          <BsFillArrowThroughHeartFill />
          <ItemLabelMenu>Pessoas que eu gostei</ItemLabelMenu>
        </ItemMenu>
        <ItemMenu>
          <BiSolidDislike />
          <ItemLabelMenu>Pessoas que eu não gostei</ItemLabelMenu>
        </ItemMenu>
      </ContentBox>
      <LineMenu />
      <ContentBox>
        <ItemMenu>
          <FaFire />
          <ItemLabelMenu>Usuários Premium</ItemLabelMenu>
        </ItemMenu>

        <ContentImagesPremium>
          <BoxImagePremium>
            <ImagePremium src={ImageDefault} />
          </BoxImagePremium>
          <BoxImagePremium>
            <ImagePremium src={ImageDefault} />
          </BoxImagePremium>
          <BoxImagePremium>
            <ImagePremium src={ImageDefault} />
          </BoxImagePremium>
          <BoxImagePremium>
            <ImagePremium src={ImageDefault} />
          </BoxImagePremium>
          <BoxImagePremium>
            <ImagePremium src={ImageDefault} />
          </BoxImagePremium>
          <BoxImagePremium>
            <ImagePremium src={ImageDefault} />
          </BoxImagePremium>
          <BoxImagePremium>
            <ImagePremium src={ImageDefault} />
          </BoxImagePremium>
          <BoxImagePremium>
            <ImagePremium src={ImageDefault} />
          </BoxImagePremium>
          <BoxImagePremium>
            <ImagePremium src={ImageDefault} />
          </BoxImagePremium>
        </ContentImagesPremium>
      </ContentBox>
    </BoxLateral>
  );
};

export default LateralMenu;
