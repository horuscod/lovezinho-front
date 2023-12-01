import styled from "styled-components";

export const ContentCards = styled.div`
  padding: 20px;
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
`;

export const ItemCard = styled.div`
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: all 0.15s;
  border-radius: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding: 20px 15px 50px 15px;
  text-align: center;
  position: sticky;
  width: 190px; /* Ajuste conforme necessário */
  margin-right: 10px; /* Ajuste a margem conforme necessário */
  margin-bottom: 35px;
`;

export const ImageCardLike = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 100%;
  background: #ccc;
  margin-bottom: 35px;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
`;

export const NamePersonLike = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`;

export const LabelLastLike = styled.div`
  line-height: normal;
  font-size: 14px;
  color: #737373;
`;

export const ButtonUnlike = styled.div`
  position: absolute;
  left: 90px;
  right: 0;
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
