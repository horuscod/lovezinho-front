import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LateralMenu from "../LateralMenu/LateralMenu";
import {} from "./StyledMainLayout";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <LateralMenu />
        <main style={{ flex: 1 }}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
