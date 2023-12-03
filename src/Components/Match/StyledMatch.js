import styled from "styled-components";

export const BoxContentMatch = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

    @media (max-width: 800px) {
      width: 90%;
      height: 90%;
    }
`;

export const BoxContentImage = styled.div`
  max-width: 50%;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  position: sticky;
  box-sizing: border-box;
`;

export const ContentImage = styled.img`
  border-radius: 5px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ContentInfoPerson = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  word-spacing: 5px;
`;

export const ContentNamePerson = styled.span``;

export const ContentDetail = styled.span``;

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
  background: #fff;
  width: 35%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);

    @media (max-width: 800px) {
      display: flex;
      align-itens: center;
      justify-content: center;
      flex-direction: column;
    }
`;

export const ButtonPerfil = styled.button`
  
  background-color: white;
  color: #039be5;
  border: 2px solid #039be5;
  Border-radius: 10px;
  width: 40%;
  height: 25px;

    &:hover{
      background-color: #039be5;
      color: white;
    }

    @media (max-width: 800px) {
      margin: 45px;

    }
`;

export const DetailInfoName = styled.div`
  word-spacing: 4px;
  font-weight: bold;
  font-size: 15px;
  padding: 10px;
`;


export const DetailInfoName2 = styled.div`
    font-size: 10px;

`;

export const DetailContentLang = styled.div``;

export const DetailContentIcon = styled.div``;

export const DetailContentLabel = styled.label``;

export const DetailContentInfo = styled.span``;

export const DetailButton = styled.div``;

/* Terceira coluna */

export const CollumNextMatch = styled.div`
  width: 10%;
`;

export const NextMatchImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 100%;
  object-fit: cover;
  display: block;
  margin: 10px 0;
`;


