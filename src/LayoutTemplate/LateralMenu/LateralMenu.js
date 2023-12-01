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
import { useAuthorizedUser } from "../../Context/AuthUserContext";

const LateralMenu = () => {
  const { userData } = useAuthorizedUser();
  return (
    <BoxLateral>
      <BoxContentProfile>
        <BoxImageProfile
          src={userData ? userData.imageProfileURL : ImageDefault}
        />
        <BoxContentProfileInfo>
          <NameProfile>{userData.name}</NameProfile>
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
        <ItemMenu>
          <GrView />
          <ItemLabelMenu to="/visitors">Visitantes</ItemLabelMenu>
        </ItemMenu>
      </ContentBox>
      <LineMenu />
      <ContentBox>
        <ItemMenu>
          <FaHeart />
          <ItemLabelMenu to="/likes">Likes</ItemLabelMenu>
        </ItemMenu>
        <ItemMenu>
          <BsFillArrowThroughHeartFill />
          <ItemLabelMenu to="/your-likes">Pessoas que eu gostei</ItemLabelMenu>
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
