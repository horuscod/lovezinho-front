import React from "react";
import {
  BoxImageProfileHeader,
  BoxItemHeader,
  ContentHeader,
  HeaderBox,
  ImageProfileHeader,
  ItemSVGHeader,
  LinkRouterHeader,
  LogoImgHeader,
} from "./StyledHeader";
import Container from "../../Components/Container/Container";

import LogoExample from "../../../public/imgs/logo.png";
import ImageProfileDefault from "../../../public/imgs/d-avatar.webp";

import { SiGooglechat } from "react-icons/si";
import { ImPower } from "react-icons/im";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <ContentHeader>
          <BoxItemHeader>
            <LogoImgHeader src={LogoExample} alt="Logo marca Lovezinho" />
            <LinkRouterHeader to="/find-matches">
              Encontrar Matches
            </LinkRouterHeader>
          </BoxItemHeader>

          <BoxItemHeader>
            <ImPower />
            <MdOutlineAttachMoney />
            <SiGooglechat />
            <IoMdNotifications />

            <BoxImageProfileHeader>
              <ImageProfileHeader
                src={ImageProfileDefault}
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
