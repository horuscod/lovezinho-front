import { Link } from "react-router-dom";
import styled from "styled-components";

export const BoxContentMatch = styled.div`
  padding: 20px 5px;
  display: block;
  @media (min-width: 800px) {
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: space-between;
  }
  box-sizing: border-box;
`;

export const BoxContentImage = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  position: sticky;
  box-sizing: border-box;
  max-heigth: 500px;
  width: 100%;
  @media (min-width: 800px) {
    max-width: 50%;
    width: 50%;
  }
`;

export const ContentImage = styled.img`
  border-radius: 5px;
  height: 100%;
  max-height: 500px;
  width: 95%;
  object-fit: cover;
  box-sizing: border-box;
`;

export const ContentInfoPerson = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  word-spacing: 5px;
`;

export const ContentNamePerson = styled.span`
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  color: black; 
  font-size: 20px; 
  margin-right: 5px; 
`;

export const ContentDetail = styled.span`
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  color: black; 
  font-size: 20px; 
  margin-right: 5px; 
`;

export const ContentButtons = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  position: absolute;
  bottom: -25px;
  left: 0;
  right: 0;
`;
export const ButtonLike = styled.div`
  color: #ff5722;
  background: #fff;
  border-radius: 100%;
  padding: 10px 15px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 25px;
  margin: 0 10px;

  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
`;
export const ButtonUnlike = styled.div`
  color: black;
  background: #fff;
  border-radius: 100%;
  padding: 10px 15px;
  font-size: 25px;

  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
`;

/* Descrição itens */

export const DetailAbout = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0;
  text-align: center;

  @media (min-width: 800px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const ButtonPerfil = styled.button`
  background-color: white;
  color: #039be5;
  border: 2px solid #039be5;
  border-radius: 10px;
  width: 40%;
  height: 25px;

  &:hover {
    background-color: #039be5;
    color: white;
  }

  @media (max-width: 800px) {
    margin: 45px;
  }
`;

export const DetailInfoName = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: #333;
  margin-bottom: 5px;
`;

export const DetailInfoName2 = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
`;

export const DetailContentLang = styled.div``;

export const DetailContentIcon = styled.div``;

export const DetailContentLabel = styled.label``;

export const DetailContentInfo = styled.span``;

export const DetailButton = styled.div``;

/* Terceira coluna */

export const CollumNextMatch = styled.div`
  width: 100%;
  display: flex;
  overview: hidden;
  @media (min-width: 800px) {
    width: 10%;
    display: block;
  }
`;

export const NextMatchImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 100%;
  object-fit: cover;
  display: block;
  margin: 10px 0;
`;

export const ModalMatchOkay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  width: 80%;
  text-align: center;
`;

export const ModalContent = styled.div`
  margin-bottom: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
`;

export const TitleMensage = styled.div`
  font-size: 20px;
  color: #7d60d0;
  margin: 35px 0;
  font-weight: 700;
`;
export const Button = styled(Link)`
  text-align: center;
  border-radius: 2em;
  font-weight: 500;
  letter-spacing: 0.4px;
  word-spacing: 1px;
  margin: 20px auto;
  border: 1px solid #7d60d0;
  background: 0 0;
  color: #7d60d0;
  line-height: 28px;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  font-size: 16px;
  text-decoration: none;  
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;
