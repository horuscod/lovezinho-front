import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../LayoutTemplate/MediaQueryCss/MediaQueryCss";

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
  justify-content: center;
`;

export const LogoImgHeader = styled.img`
  max-width: 160px;
  height: 50px;
  object-fit: contain;
  margin: 0 10px 0 0;
`;

export const LinkRouterHeader = styled(Link)`
    background-color: #4caf50; 
    border: none; 
    color: white; 
    padding: 10px 20px; 
    text-align: center; 
    text-decoration: none; 
    display: inline-block; 
    font-size: 16px; 
    cursor: pointer; 
    border-radius: 5px; 
    transition: background-color 0.3s; 
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

    &:hover {
      background-color: #45a049; /* Mudar a cor de fundo ao passar o mouse */
      text-decoration: underline; /* Adicionar sublinhado ao passar o mouse */
    }
    
    
`;

export const ItemSVGHeader = styled(Link)`
  width: 20px;
  height: 20px;
  @media ${devices.small} {
    display: none;
  }
  @media ${devices.smallMedium} {
    display: none;
  }
  @media ${devices.medium} {
    display: none;
  }
  @media ${devices.mediumLarge} {
    display: none;
  }
  text-decoration: none;
  color: #8c8c8c;
`;

/* Profile Header */

export const BoxImageProfileHeader = styled(Link)`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  display: block;
`;
export const ImageProfileHeader = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 100%;
  margin-left: 10px;
`;

export const BoxLinkHeader = styled(Link)`
  display: block;
`;
