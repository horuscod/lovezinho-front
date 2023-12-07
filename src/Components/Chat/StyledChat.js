import styled from "styled-components";



export const ContentChat = styled.div`
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding: 20px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: all 0.15s;
  border-radius: 5px;
  position: sticky;
  margin: 35px;
  min-height: 450px;
  box-sizing: border-box;

  @media (max-width: 800px) {
    width: 45%;
    flex-direction: column;
    align-items: center;  // ou flex-start, dependendo do seu design
  }
`;

export const TitleChat = styled.div`
  width: 100%;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxContentMensage = styled.div`
  height: 100%;
  width: 40%;
  border-right: 1px solid rgba(0, 0, 0, 0.15);
  max-height: 350px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 800px) {
    width: 100%;
    border-right: none;
    order: 2;
    display: flex;
  }
`;

export const ItemPersonChat = styled.div`
  padding: 10px;
  display: flex;
  margin: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  align-items: center;
`;

export const ImagePersonChat = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 10px;
  border: 2px solid rgba(0, 0, 0, 0.25);
`;

export const PersonContentChat = styled.div`
  display: none;
`;


export const NamePersonChat = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333;  // Adapte a cor conforme necessário
`;

export const LastMensageChat = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: #2f2f2f;  // Adapte a cor conforme necessário
`;

export const BoxChatMensage = styled.div`
  width: 50%;
  padding: 20px;
  height: 350px;
  max-height: 300px;
  position: sticky;
  top: 0;  // Fixa o componente no topo
  overflow: auto;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 15px;
    border-radius: 0;
    box-shadow: none;
    order: 1;
    position: relative;  // Remove a posição fixa no mobile
    top: auto;  // Remove a posição fixa no mobile
  }
`;

export const MessageBot = styled.div`
    
`;

export const MenssageNameBot = styled.div`
  font-weight: 500;
  background: rgb(217, 253, 211);
  padding: 8px;
  width: auto;
  box-sizing: border-box;
  margin: 10px 0;
  border-radius: 8px;
  color: #333;  // Adapte a cor conforme necessário
`;

export const MenssagePerson = styled.div`
  text-align: right;
  margin: 10px 0;
  color: #333;  // Adapte a cor conforme necessário
`;

export const ContentInput = styled.div`
  width: 100%;
  bottom: 0;
  display: flex;
`;
export const InputMensage = styled.input`
  width: 100%;
  border: 1px solid #7d60d0;
  border-radius: 20px;
  padding: 10px;
  margin-right: 10px;
  font-size: 14px;

  @media (max-width: 800px) {
    width: calc(100% - 20px);  // Ajuste conforme necessário
  }
`;

export const ButtonMensage = styled.div`
  border-radius: 2em;
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0.4px;
  word-spacing: 1px;
  border: 1px solid #7d60d0;
  background: #7d60d0;
  color: #fff;
  line-height: 28px;
  font-size: 16px;
  height: 32px;
  align-items: center;
  display: flex;
  padding: 5px 20px;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #6c50a8;
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
