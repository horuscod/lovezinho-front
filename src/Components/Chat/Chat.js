import React, { useState, useEffect } from "react";
import {
  BoxChatMensage,
  BoxContentMensage,
  ButtonMensage,
  ContentChat,
  ContentInput,
  ImagePersonChat,
  InputMensage,
  ItemPersonChat,
  LastMensageChat,
  MenssageNameBot,
  MenssagePerson,
  MessageBot,
  NamePersonChat,
  PersonContentChat,
  TitleChat,
} from "./StyledChat";

import imgChat from "../../../public/imgs/d-avatar.webp";

import { useAuthorizedUser } from "../../Context/AuthUserContext";

const Chat = () => {
  const [userMessages, setUserMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectedBotMessages, setSelectedBotMessages] = useState([]);
  const [dataLocation, setDataLocation] = useState([]);
  const dataChatLo = localStorage.getItem("userData");
  const parsedDataChatLo = JSON.parse(dataChatLo);

  const { dataChat, setDataChat, findAllChat } = useAuthorizedUser();

  const botMessages1 = [
    "Oii, tudo bem ?",
    "Estou bem ",
    "O que procura aqui?",
    "Ah legal, eu me sinto só ai gosto de conversar",
    "Mas dificil alguem que fique conversando, sempre saem",
    "Voce é de onde ?",
    "Bacana, ja fui algumas vezes ai",
    "Gosto bastante de viajar, porem sem ninguem pra ir comigo",
    "Eu até pagaria so pra ter uma companhia",
  ];

  const botMessages2 = [
    "Oii bebe",
    "Eu gostaria de saber como você está?",
    "Voce é de onde ?",
    "Legal, ja fui algumas vezes",
    "O que gosta de fazer ?",
    "Serio? Que legal",
    "Eu gosto de jogar golf no meu tempo live",
    "O procura aqui no app ?",
    "hmm, eu me sinto só as vezes, ai gosto de conversar",
    "As vezes ate pago pra alguem ficar conversando comigo, se eu gostar",
    "Gosta de viajar ?",
  ];

  const botMessages3 = [
    "Oi como está?",
    "Estou bem, O que faz de bom?",
    "Me sinto muito solitario as vezes, ai gosto de conversar?",
    "De onde voce é?",
    "Legal, ja fui ai algumas vezes, gostei bastante",
    "Gostaria de ir novamente ^^",
  ];

  useEffect(() => {
    const allBotMessages = [botMessages1, botMessages2, botMessages3];
    const randomIndex = Math.floor(Math.random() * allBotMessages.length);
    setSelectedBotMessages(allBotMessages[randomIndex]);

    const fetchAllChat = async () => {
      const chatData = await findAllChat();
      setDataChat(chatData);
    };
    fetchAllChat();
  }, []);

  const handleSendMessage = () => {
    if (inputMessage) {
      // Adiciona a mensagem do usuário imediatamente
      setUserMessages([...userMessages, { sender: "user", text: inputMessage }]);
      setInputMessage(""); // Limpa o input
  
      // Define um atraso para a mensagem do bot
      setTimeout(() => {
        const nextBotMessage =
          selectedBotMessages[
            Math.floor(userMessages.length / 2) % selectedBotMessages.length
          ];
  
        // Adiciona a mensagem do bot após 3 segundos
        setUserMessages((prevUserMessages) => [
          ...prevUserMessages,
          { sender: "bot", text: nextBotMessage },
        ]);
      }, 9000); // 3000 milissegundos = 3 segundos
    }
  };

  return (
    <ContentChat>
      <TitleChat>Chat</TitleChat>
      <BoxContentMensage>
        {Array.isArray(parsedDataChatLo.boxMensages)
          ? parsedDataChatLo.boxMensages.map((item, index) => (
              <ItemPersonChat key={index}>
                <ImagePersonChat src={imgChat} />
                <PersonContentChat>
                  <NamePersonChat>
                    {item.nameMatch}
                  </NamePersonChat>
                  <LastMensageChat>
                    {item.InitMensage}
                  </LastMensageChat>
                </PersonContentChat>
              </ItemPersonChat>
            ))
          : null}
      </BoxContentMensage>

      <BoxChatMensage>
        <MessageBot>
          <MenssageNameBot>Oii tudo bem?</MenssageNameBot>
          {userMessages.map((message, index) =>
            message.sender === "user" ? (
              <MenssagePerson key={index}>{message.text}</MenssagePerson>
            ) : (
              <MenssageNameBot key={index}>{message.text}</MenssageNameBot>
            )
          )}

          <ContentInput>
            <InputMensage
              type="text"
              placeholder="Digite sua mensagem"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <ButtonMensage onClick={handleSendMessage}>Enviar</ButtonMensage>
          </ContentInput>
        </MessageBot>
      </BoxChatMensage>
    </ContentChat>
  );
};

export default Chat;
