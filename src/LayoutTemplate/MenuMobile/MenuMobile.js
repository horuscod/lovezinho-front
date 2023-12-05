import React from "react";
import { BoxMenu, ItemMenuMobile, ItemTitleMenu } from "./StyledMenuMobile";
import { FaHeart } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { SiGooglechat } from "react-icons/si";
import { CgProfile } from "react-icons/cg";

const MenuMobile = () => {
  return (
    <BoxMenu>
      <ItemMenuMobile to="/find-matches">
        <FaFire />
        <ItemTitleMenu>Match</ItemTitleMenu>
      </ItemMenuMobile>
      <ItemMenuMobile to="/likes">
        <FaHeart />
        <ItemTitleMenu>Likes</ItemTitleMenu>
      </ItemMenuMobile>
      <ItemMenuMobile to="/chat">
        <SiGooglechat />
        <ItemTitleMenu>Chat</ItemTitleMenu>
      </ItemMenuMobile>
      <ItemMenuMobile to="/profile">
        <CgProfile />
        <ItemTitleMenu>Profile</ItemTitleMenu>
      </ItemMenuMobile>
    </BoxMenu>
  );
};

export default MenuMobile;
