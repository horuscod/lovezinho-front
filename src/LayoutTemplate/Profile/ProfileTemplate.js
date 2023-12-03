import React from "react";
import Container from "../../Components/Container/Container";
import {
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

const ProfileTemplate = () => {
  const { userData } = useAuthorizedUser();
  console.log("userData:", userData);
  return (
    <BackgroundBody>
      <Container>
        <ProfileBox>
          <BoxContentLittle>
            <BoxContentImage>
              <BoxImageProfileUser src={userData.imageProfileURL} />

              <BoxContentPopularity>
                PopularidadeMuito baixo Aumentar
              </BoxContentPopularity>
            </BoxContentImage>
          </BoxContentLittle>
          <BoxContentInformation>
            <MensageToProfile>Carregue pelo menos 5 imagens.</MensageToProfile>
            <BoxSimpleInfoProfile>
              <HeaderBoxSimpleInfoProfile>
                <ProfileName>{userData.name}</ProfileName>
                <ButtonEdit>Editar</ButtonEdit>
              </HeaderBoxSimpleInfoProfile>

              <ContentBoxSimpleInfoProfile>
                <ProfileItemIcon>
                  <IoLocationSharp />
                  Brasil
                </ProfileItemIcon>
                <ProfileItemIcon>
                  <FaHeart />0 Likes
                </ProfileItemIcon>
                <ProfileItemIcon>
                  <GrView />0 Views
                </ProfileItemIcon>
              </ContentBoxSimpleInfoProfile>
            </BoxSimpleInfoProfile>
            <BoxImagesProfile>
              <BoxImagemItem />
              <BoxImagemItem />
              <BoxImagemItem />
              <BoxImagemItem />
              <BoxImagemItem />
            </BoxImagesProfile>
            <BoxInformationProfile>
              <HeaderBoxSimpleInfoProfile>
                <ProfileName>Informações do perfil</ProfileName>
                <ButtonEdit>Editar</ButtonEdit>
              </HeaderBoxSimpleInfoProfile>
              <RowInformationProfile>
                <BoxItemInformation>
                  <LineTitle>Básico</LineTitle>
                </BoxItemInformation>
              </RowInformationProfile>
              <RowInformationProfile>
                <BoxItemInformation>
                  <LineTitle>Aparência</LineTitle>
                </BoxItemInformation>
              </RowInformationProfile>
            </BoxInformationProfile>
          </BoxContentInformation>
        </ProfileBox>
      </Container>
    </BackgroundBody>
  );
};

export default ProfileTemplate;
