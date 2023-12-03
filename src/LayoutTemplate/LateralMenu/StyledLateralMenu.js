import { Link } from "react-router-dom";
import styled from "styled-components";

import { devices } from "../../LayoutTemplate/MediaQueryCss/MediaQueryCss";

export const BoxLateral = styled.div`
  padding: 20px;
  width: 260px;
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

    @media screen and (max-width: 800px) {
      display: none;
    }
`;

export const BoxContentProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxImageProfile = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 100%;
`;

export const BoxContentProfileInfo = styled.div`
  margin: 0 0 0 10px;
`;

export const NameProfile = styled.div`
  color: #2d2d2d;
  font-size: 20px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
`;

export const ButtonPlus = styled.div`
  text-align: center;
  border-radius: 2em;
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0.4px;
  word-spacing: 1px;
  margin: 20px 0;
  border: 1px solid #7d60d0;
  background: 0 0;
  color: #7d60d0;
  line-height: 28px;
  font-size: 16px;
  height: 32px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const PopularProfile = styled.div``;

export const ContentBox = styled.div``;

export const ItemMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 6px 8px 1px;
  color: #737373;
`;

export const ItemLabelMenu = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  margin: 0 0 0 10px;
  text-decoration: none;
  color: #737373;

  &:hover {
    color: black;
  }
`;

export const LineMenu = styled.hr`
  outline: #e0e0e0;
`;

export const ContentImagesPremium = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 5px;
`;

export const BoxImagePremium = styled.div`
  width: calc(25% - 10px);
  border-radius: 100%;
`;

export const ImagePremium = styled.img`
  width: 100%;
  height: 55px;
  border-radius: 100%;
  object-fit: cover;
`;

