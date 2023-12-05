import styled from "styled-components";
import { Link } from "react-router-dom";

export const BoxMenu = styled.div`
  display: flex;
  justify-content: space-around;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 10px 5px 5px 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  position: fixed;
  width: 100%;
  z-index: 10000;
  bottom: 0;

  @media (min-width: 800px) {
    display: none !important;
  }
`;

export const ItemMenuMobile = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: center;
  color: #737373;
  font-size: 20px;
`;

export const ItemTitleMenu = styled.div`
  font-size: 16px;
  color: black;
  font-weight: 700;
`;
