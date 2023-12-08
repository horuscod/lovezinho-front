import React from "react";
import Container from "../../Components/Container/Container";
import {
  BoxContainer,
  BoxContentImage,
  BoxContentInformation,
  BoxContentLittle,
  BoxContentPopularity,
  BoxImageProfileUser,
  BoxImagemItem,
  BoxImagesProfile,
  BoxInformationProfile,
  BoxItemInformation,
  BoxLabel,
  BoxSimpleInfoProfile,
  ButtonEdit,
  ContentBoxSimpleInfoProfile,
  HeaderBoxSimpleInfoProfile,
  LineTitle,
  MensageToProfile,
  ProfileBox,
  ProfileItemIcon,
  ProfileName,
  RowInformationProfile,
} from "./StyledProfileTemplate";
import { BackgroundBody } from "../MainLayout/StyledMainLayout";
import { IoLocationSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { useAuthorizedUser } from "../../Context/AuthUserContext.js";
import MenuMobile from "../MenuMobile/MenuMobile.js";
const ProfileTemplate = () => {
  const { userData } = useAuthorizedUser();
  console.log("userData:", userData);
  return (
    <BackgroundBody>
      <BoxContainer>
        <ProfileBox>
          <BoxContentLittle>
            <BoxContentImage>
              <BoxImageProfileUser src={userData.imageProfileURL} />

              <BoxContentPopularity>
              PopularidadMuy bajo Aumento
              </BoxContentPopularity>
            </BoxContentImage>
          </BoxContentLittle>
          <BoxContentInformation>
            <BoxSimpleInfoProfile>
              <HeaderBoxSimpleInfoProfile>
                <ProfileName>{userData.name}</ProfileName>
              </HeaderBoxSimpleInfoProfile>

              <ContentBoxSimpleInfoProfile>
                <ProfileItemIcon>
                  <IoLocationSharp />
                  Brasil
                </ProfileItemIcon>
                <ProfileItemIcon>
                  <FaHeart />10 Likes
                </ProfileItemIcon>
                <ProfileItemIcon>
                  <GrView />49 Views
                </ProfileItemIcon>
              </ContentBoxSimpleInfoProfile>
            </BoxSimpleInfoProfile>
            <BoxImagesProfile>
              <BoxImagemItem />
              <BoxImagemItem />
            </BoxImagesProfile>
            <BoxInformationProfile>
              <HeaderBoxSimpleInfoProfile>
                <ProfileName>Información del perfil</ProfileName>
              </HeaderBoxSimpleInfoProfile>
              <RowInformationProfile>
                <BoxItemInformation>
                  <LineTitle>Básico</LineTitle>
                </BoxItemInformation>
              </RowInformationProfile>
              <RowInformationProfile>
                <BoxItemInformation>
                  <LineTitle>Apariencia</LineTitle>
                </BoxItemInformation>
              </RowInformationProfile>
            </BoxInformationProfile>
          </BoxContentInformation>
        </ProfileBox>
      </BoxContainer>
      <MenuMobile />
    </BackgroundBody>
  );
};

export default ProfileTemplate;
