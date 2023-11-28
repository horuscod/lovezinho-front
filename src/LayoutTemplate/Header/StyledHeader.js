import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderBox = styled.header`
  background-color: #fff;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  height: 50px;
  padding: 10px 20px;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxItemHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImgHeader = styled.img`
  max-width: 160px;
  height: 50px;
  object-fit: contain;
  margin: 0 10px 0 0;
`;

export const LinkRouterHeader = styled(Link)`
  text-decoration: none;
`;

export const ItemSVGHeader = styled.svg`
  width: 20px;
  height: 20px;
`;

/* Profile Header */

export const BoxImageProfileHeader = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
`;
export const ImageProfileHeader = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 100%;
`;
