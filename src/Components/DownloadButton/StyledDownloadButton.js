import styled from "styled-components";

export const BoxButton = styled.div`
  position: absolute;
  bottom: 0px;
  left: 35px;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  max-width: 300px;
  padding: 10px;
  border-radius: 5px;
  align-items: center;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export const TextInformation = styled.div`
  color: white;
`;

export const ButtonDownload = styled.div`
  background: red;
  color: white;
  border-radius: 10px;
  padding: 10px 15px;
  font-weight: 700;
`;
