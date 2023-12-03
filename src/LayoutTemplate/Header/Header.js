import React from "react";
import {
  BoxImageProfileHeader,
  BoxItemHeader,
  BoxLinkHeader,
  ContentHeader,
  HeaderBox,
  ImageProfileHeader,
  ItemSVGHeader,
  LinkRouterHeader,
  LogoImgHeader,
} from "./StyledHeader";
import Container from "../../Components/Container/Container";

import LogoExample from "../../../public/imgs/meu-velho.png";

import { SiGooglechat } from "react-icons/si";
import { ImPower } from "react-icons/im";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";

import { useAuthorizedUser } from "../../Context/AuthUserContext";

const Header = () => {
  const { userData } = useAuthorizedUser();

  return (
    <HeaderBox>
      <Container>
        <ContentHeader>
          <BoxItemHeader>
            <BoxLinkHeader to="/find-matches">
              <LogoImgHeader src={LogoExample} alt="Logo marca Lovezinho" />
            </BoxLinkHeader>
            <LinkRouterHeader to="/find-matches">
              Encontrar Matches
            </LinkRouterHeader>
          </BoxItemHeader>

          <BoxItemHeader>
            <ItemSVGHeader>
              <ImPower />
            </ItemSVGHeader>
            <ItemSVGHeader>
              <MdOutlineAttachMoney />
            </ItemSVGHeader>

            <ItemSVGHeader>
              <SiGooglechat />
            </ItemSVGHeader>
            <ItemSVGHeader>
              <IoMdNotifications />
            </ItemSVGHeader>

            <BoxImageProfileHeader to="/profile">
              <ImageProfileHeader
                src={userData ? userData[0].imageProfileURL : ""}
                alt="Imagem do perfil"
              />
            </BoxImageProfileHeader>
          </BoxItemHeader>
        </ContentHeader>
      </Container>
    </HeaderBox>
  );
};

export default Header;
