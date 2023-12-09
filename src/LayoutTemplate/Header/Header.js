import React, { useState, useEffect } from "react";
import {
  BoxImageProfileHeader,
  BoxItemHeader,
  BoxLinkHeader,
  ContentHeader,
  HeaderBox,
  ImageProfileHeader,
  ItemSVGHeader,
  ItemSVGMoney,
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
  const { dataPerson } = useAuthorizedUser();
  const [dataValueMoney, setDataValueMoney] = useState([]);
  const email = dataPerson[0].email;

  useEffect(() => {
    fetchGetValueMoney();
  }, []);

  const fetchGetValueMoney = async () => {
    try {
      const data = { email: email };
      const response = await fetch(`https://api.velhorico.xyz/getValueMoney`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      const result = await response.json();
      setDataValueMoney(result);

      return result; // Retorne os dados se necessário
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <HeaderBox>
      <Container>
        <ContentHeader>
          <BoxItemHeader>
            <BoxLinkHeader to="/find-matches">
              <LogoImgHeader src={LogoExample} alt="Logo marca Lovezinho" />
            </BoxLinkHeader>
          </BoxItemHeader>

          <BoxItemHeader>
            <ItemSVGHeader>
              <ImPower />
            </ItemSVGHeader>
            <ItemSVGMoney to="/withDraw">
              <MdOutlineAttachMoney />
              {dataValueMoney ? dataValueMoney : null}
            </ItemSVGMoney>

            <ItemSVGHeader to="/chat">
              <SiGooglechat />
            </ItemSVGHeader>
            <ItemSVGHeader>
              <IoMdNotifications />
            </ItemSVGHeader>

            <BoxImageProfileHeader to="/profile">
              <ImageProfileHeader
                src={dataPerson ? dataPerson[0].imageProfileURL : null}
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
