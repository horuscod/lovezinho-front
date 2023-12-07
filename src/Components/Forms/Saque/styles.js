import styled from "styled-components";
import { devices } from "../../../LayoutTemplate/MediaQueryCss/MediaQueryCss";

export const ContainerFormsWithDraw = styled.div`
  box-sizing: border-box;
  min-height: 800px;
  height: 100%;
  padding: 35px 0;
  @media screen and (min-width: 800px) {
    height: 100vh;
  }
  position: sticky;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
`;

export const Form = styled.form`
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: all 0.15s;
  border-radius: 5px;
  display: flex;
  margin: 0 auto;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

export const Label = styled.label`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 4px;
`;

export const ButtonWithDraw = styled.div`
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  color: #7d60d0;
  border-radius: 20px;
  padding: 12px 15px;
  margin: 0 5px;
  border: 2px solid #7d60d0;
`;
