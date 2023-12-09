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
import { FaHeart } from "react-icons/fa";
import { BiSolidDislike } from "react-icons/bi";
import { FaFire } from "react-icons/fa";

import ImageDefault from "../../../public/imgs/d-avatar.webp";
import { useAuthorizedUser } from "../../Context/AuthUserContext";

const LateralMenu = () => {
  const { dataPerson, dataPersonPremium } = useAuthorizedUser();

  return (
    <BoxLateral>
      <BoxContentProfile>
        <BoxImageProfile
          src={dataPerson ? dataPerson[0].imageProfileURL : ImageDefault}
        />
        <BoxContentProfileInfo>
          <NameProfile>{dataPerson[0].name}</NameProfile>
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
          <ItemLabelMenu to="/find-matches">Encontrar Matches </ItemLabelMenu>
        </ItemMenu>
        <ItemMenu>
          <HiMiniUsers />
          <ItemLabelMenu to="/matches">Matches</ItemLabelMenu>
        </ItemMenu>
      </ContentBox>
      <LineMenu />
      <ContentBox>
        <ItemMenu>
          <FaHeart />
          <ItemLabelMenu to="/likes">Likes</ItemLabelMenu>
        </ItemMenu>
        <ItemMenu>
          <BiSolidDislike />
          <ItemLabelMenu to="/unlikes">Pessoas que eu não gostei</ItemLabelMenu>
        </ItemMenu>
      </ContentBox>
      <LineMenu />
      <ContentBox>
        <ItemMenu>
          <FaFire />
          <ItemLabelMenu>Usuários Premium</ItemLabelMenu>
        </ItemMenu>
        <ContentImagesPremium>
          {dataPersonPremium.length > 0
            ? dataPersonPremium.slice(0, 12).map((item, index) => (
                <BoxImagePremium key={index}>
                  <ImagePremium src={item.imageProfileURL} />
                </BoxImagePremium>
              ))
            : null}
        </ContentImagesPremium>
      </ContentBox>
    </BoxLateral>
  );
};

export default LateralMenu;
