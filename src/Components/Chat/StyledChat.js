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
  margin: 20px;
  min-height: 450px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  @media (min-width: 800px) {
    /* Só para Desktop */
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
  display: flex;
  overflow-x: auto; // Adiciona uma barra de rolagem horizontal quando necessário
  white-space: nowrap; // Impede que os itens quebrem para a próxima linha
  -webkit-overflow-scrolling: touch; // Adiciona suporte à rolagem suave no iOS
  scrollbar-width: thin; // Estilo da barra de rolagem (pode variar em alguns navegadores)
  scrollbar-color: #888 #f1f1f1;

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
    border-right: none;
    order: 2;
  }
`;

export const ItemPersonChat = styled.div`
  padding: 15px;
  display: inline-block; // Exibe os itens em linha
  margin: 15px;
  border-radius: 15px;
  overflow: hidden;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 800px) {
    padding: 10px;
    margin: 10px;
    width: 70px; // Largura fixa para exibir apenas 3 itens na tela
    flex-shrink: 0; // Impede que os itens diminuam para se ajustar à tela
  }
}`;

export const ImagePersonChat = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 800px) {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }
  ${(props) =>
    props.active
      ? `  border: 3px solid #4caf50;
  `
      : null}
`;

export const PersonContentChat = styled.div`
  @media (max-width: 800px) {
    text-align: center;
    display: inline-block;
    flex: 1;
  }
`;

export const NamePersonChat = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333; // Adapte a cor conforme necessário
`;

export const LastMensageChat = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: #2f2f2f; // Adapte a cor conforme necessário
`;

export const BoxChatMensage = styled.div`
  width: 50%;
  padding: 20px;
  height: 350px;
  max-height: 300px;
  position: sticky;
  top: 0;
  overflow: auto;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s; // Adicionei uma transição na sombra

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 800px) {
    width: 100%; // Ocupa a largura total no mobile
    padding: 15px;
    border-radius: 0; // Remova a borda no mobile
    box-shadow: none; // Remova a sombra no mobile
    order: 1;
    position: relative;
    top: auto;
  }
`;

export const MessageBot = styled.div``;

export const MenssageNameBot = styled.div`
  font-weight: 500;
  background: #4caf50;
  padding: 12px;
  width: auto;
  box-sizing: border-box;
  margin: 15px 0;
  border-radius: 15px;
  color: white;
`;

export const MenssagePerson = styled.div`
  text-align: right;
  margin: 15px 0;
  color: #333;
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
    width: calc(100% - 20px); // Ajuste conforme necessário
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

/* Chat MOBILE - APOS ATIVO */
export const HeaderChatOnline = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 10px 0;
`;
