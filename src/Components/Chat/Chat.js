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

const Chat = () => {
  const [userMessages, setUserMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectedBotMessages, setSelectedBotMessages] = useState([]);
  const botMessages1 = [
    "Oii",
    "Estou bem, como você está?",
    "Como você se chama?",
  ];

  const botMessages2 = [
    "Oii bebe",
    "Eu gostaria de saber como você está?",
    "Como você se chama?",
  ];

  const botMessages3 = [
    "ai como está",
    "Estou bem, como você está?",
    "Como você se chama?",
  ];

  useEffect(() => {
    const allBotMessages = [botMessages1, botMessages2, botMessages3];
    const randomIndex = Math.floor(Math.random() * allBotMessages.length);
    setSelectedBotMessages(allBotMessages[randomIndex]);
  }, []);

  const handleSendMessage = () => {
    if (inputMessage) {
      const nextBotMessage =
        selectedBotMessages[
          (userMessages.length / 2) % selectedBotMessages.length
        ];
      setUserMessages([
        ...userMessages,
        { sender: "user", text: inputMessage },
        { sender: "bot", text: nextBotMessage },
      ]);
      setInputMessage(""); // Limpa o input
    }
  };

  
  return (
    <ContentChat>
      <TitleChat>Converse com quem deu Match</TitleChat>
      <BoxContentMensage>
        <ItemPersonChat>
          <ImagePersonChat src={imgChat} />
          <PersonContentChat>
            <NamePersonChat>João Da Silva</NamePersonChat>
            <LastMensageChat>Oooi, como está</LastMensageChat>
          </PersonContentChat>
        </ItemPersonChat>
        <ItemPersonChat>
          <ImagePersonChat src={imgChat} />
          <PersonContentChat>
            <NamePersonChat>João Da Silva</NamePersonChat>
            <LastMensageChat>Oooi, como está</LastMensageChat>
          </PersonContentChat>
        </ItemPersonChat>
        <ItemPersonChat>
          <ImagePersonChat src={imgChat} />
          <PersonContentChat>
            <NamePersonChat>João Da Silva</NamePersonChat>
            <LastMensageChat>Oooi, como está</LastMensageChat>
          </PersonContentChat>
        </ItemPersonChat>
        <ItemPersonChat>
          <ImagePersonChat src={imgChat} />
          <PersonContentChat>
            <NamePersonChat>João Da Silva</NamePersonChat>
            <LastMensageChat>Oooi, como está</LastMensageChat>
          </PersonContentChat>
        </ItemPersonChat>
        <ItemPersonChat>
          <ImagePersonChat src={imgChat} />
          <PersonContentChat>
            <NamePersonChat>João Da Silva</NamePersonChat>
            <LastMensageChat>Oooi, como está</LastMensageChat>
          </PersonContentChat>
        </ItemPersonChat>
        <ItemPersonChat>
          <ImagePersonChat src={imgChat} />
          <PersonContentChat>
            <NamePersonChat>Ultimo matches</NamePersonChat>
            <LastMensageChat>Oooi, como está</LastMensageChat>
          </PersonContentChat>
        </ItemPersonChat>
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
