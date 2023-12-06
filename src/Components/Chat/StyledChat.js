import styled from "styled-components";



export const ContentChat = styled.div`
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
  display: flex;
  flex-wrap: wrap;
  
`;

export const TitleChat = styled.div`
  width: 100%;
  font-weight: 700;
  max-height: 70px;
`;
export const BoxContentMensage = styled.div`
  height: 100%;
  width: 40%;
  border-right: 1px solid rgba(0, 0, 0, 0.15);
  max-height: 350px;

  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px; /* Largura da barra de rolagem */
  }

  /* Estilizando a trilha da barra de rolagem */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* Cor de fundo da trilha */
  }

  /* Estilizando o polegar da barra de rolagem */
  ::-webkit-scrollbar-thumb {
    background: #888; /* Cor do polegar */
  }

  /* Estilizando o polegar da barra de rolagem ao passar o mouse */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* Cor do polegar ao passar o mouse */
  }

  @media (max-width: 800px) {
    display: none !important;
    
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

export const PersonContentChat = styled.div``;
export const NamePersonChat = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const LastMensageChat = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: #2f2f2f;
`;

export const BoxChatMensage = styled.div`
    width: 50%;
    padding: 20px;
    height: 350px;
    max-height: 300px;
    position: sticky;
    overflow: auto;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    /* Barra de rolagem */
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Trilha da barra de rolagem */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Polegar da barra de rolagem */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }

    /* Polegar da barra de rolagem ao passar o mouse */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    @media (max-width: 800px) {
      width: 100%;
      padding: 15px;
      border-radius: 0;
      box-shadow: none;
    }
`;

export const MessageBot = styled.div`
    
`;

export const MenssageNameBot = styled.div`
  font-weight: 500;
  background: rgb(217, 253, 211);
  padding: 5px;
  width: auto;
  box-sizing: border-box;
  margin: 10px 0;
`;

export const MenssagePerson = styled.div`
  text-align: right;
  margin: 10px 0;
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
  margin-right: 10px;

    @media (max-width: 800px) {
      width: 170px;
      text-align: center;
    }
`;

export const ButtonMensage = styled.div`
  border-radius: 2em;
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0.4px;
  word-spacing: 1px;
  border: 1px solid #7d60d0;
  background: 0 0;
  color: #7d60d0;
  line-height: 28px;
  font-size: 16px;
  height: 32px;
  align-items: center;
  display: flex;
  padding: 5px 20px;
  justify-content: center;
`;
