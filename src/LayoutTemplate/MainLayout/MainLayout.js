import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LateralMenu from "../LateralMenu/LateralMenu";
import MenuMobile from "../MenuMobile/MenuMobile";
import {
  BackgroundBody,
  ContainerContent,
  DynamicContent,
} from "./StyledMainLayout";

function MainLayout({ children }) {
  return (
    <BackgroundBody>
      <Header />
      <ContainerContent style={{ display: "flex" }}>
        <LateralMenu />
        <DynamicContent style={{ flex: 1 }}>{children}</DynamicContent>
      </ContainerContent>
      <MenuMobile />
      <Footer />
    </BackgroundBody>
  );
}

export default MainLayout;
