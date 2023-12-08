import styled from "styled-components";

export const ContentCards = styled.div`
  padding: 20px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerContent = styled.div`
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const TitlePage = styled.div`
  font-size: 18px;
  margin: 0 0 14px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
`;

export const LineCards = styled.div`
  display: flex;
  margin: 35px 0;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const ItemCard = styled.div`
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: all 0.15s;
  border-radius: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding: 20px 15px 15px 15px; /* Ajustado o padding */
  text-align: center;
  position: sticky;
  width: 90%;
  margin: 0 auto 35px;
  position: relative;
`;

export const ImageCardLike = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 5px;
  background: #ccc;
  margin-bottom: 15px;
  object-fit: cover;
`;

export const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5); /* Sombra preta com 50% de opacidade */
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 10px;
`;


export const NamePersonLike = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #fff; /* Cor do texto branca */
`;

export const VerifiedIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;
export const LabelLastLike = styled.div`
  line-height: normal;
  font-size: 14px;
  color: #fff; /* Cor do texto branca */
`;

export const ButtonUnlike = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -20px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0;
  color: #ff5722;
`;
