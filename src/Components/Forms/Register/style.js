import styled from "styled-components";
import { devices } from "../../../LayoutTemplate/MediaQueryCss/MediaQueryCss";

export const Container = styled.div`
  background-color: #383838;
  box-sizing: border-box;
  min-height: 800px;
  height: 100%;
  padding: 35px 0;
  @media screen and (min-width: 800px) {
    height: 100vh;
  }
  position: sticky;
`;

export const Form = styled.form`
  display: flex;
  margin: 0 auto;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #201d1d;
  border-radius: 5px;
  width: 100%;
  max-width: 450px;
  gap: 30px 0px;

  h1 {
    color: white;
    font-size: 20px;
    font-weight: light;
  }

  p {
    color: white;
    font-size: 16px;
    font-weight: bold;
  }

  a {
    color: white;
    font-size: 14px;
  }
  @media ${devices.betweenSmallAndMedium} {
    max-width: 92.5%;
    overflow: hidden;
    padding: 20px 10px;
    box-sizing: border-box;
  }
`;

export const SubContainerSign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 20px;
  align-items: center;
`;
