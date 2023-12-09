import React, { useState } from "react";
import {
  BoxContentImage,
  BoxContentMatch,
  Button,
  ButtonLike,
  ButtonUnlike,
  CollumNextMatch,
  ContentButtons,
  ContentDetail,
  ContentImage,
  ContentInfoPerson,
  ContentNamePerson,
  DetailAbout,
  DetailInfoName,
  ModalContent,
  ModalMatchOkay,
  NextMatchImage,
  Overlay,
  TitleMensage,
} from "./StyledMatch";
import { useAuthorizedUser } from "../../Context/AuthUserContext.js";
import { FaHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Match = () => {
  const { dataOldMan, dataPerson } = useAuthorizedUser();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  /* Função que embaralha o Array */

  const handleLike = async () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < dataOldMan.length) {
      const lastClickedPerson = dataOldMan[currentIndex];

      setCurrentIndex(nextIndex);

      if (nextIndex === 4) {
        console.log("Quinta pessoa clicada: ", lastClickedPerson);
        setShowModal(true);
        const { imageProfileURL, name, uid } = lastClickedPerson;
        const emailLocal = dataPerson[0].email;
        fetch("https://api.velhorico.xyz/newMatch", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uidBot: uid,
            email: emailLocal,
            imageProfileBot: imageProfileURL,
            nameProfileBot: name,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Erro HTTP: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Dados enviados com sucesso!", data);
          })
          .catch((error) => {
            console.error("Erro na requisição:", error);
          });
      }
    } else {
    }
  };

  const currentItem = dataOldMan[currentIndex];
  const nextItems = dataOldMan.slice(currentIndex + 1, currentIndex + 7);

  return (
    <BoxContentMatch>
      {/* Coluna 1 */}
      {currentItem && (
        <BoxContentImage>
          <ContentImage src={currentItem.imageProfileURL} />
          <ContentInfoPerson>
            <ContentNamePerson>{currentItem.name},</ContentNamePerson>
            <ContentDetail> {currentItem.age} </ContentDetail>
            <ContentDetail> {currentItem.country}</ContentDetail>
          </ContentInfoPerson>
          <ContentButtons>
            <ButtonLike onClick={handleLike}>
              <FaHeart />
            </ButtonLike>
            <ButtonUnlike>
              <IoClose />
            </ButtonUnlike>
          </ContentButtons>
        </BoxContentImage>
      )}
      {/* Coluna 2*/}
      {currentItem && (
        <DetailAbout>
          {/* Substitua os seguintes detalhes pelos dados reais de currentItem */}
          <DetailInfoName>Acerca: </DetailInfoName>
          <detailInfoName2>{currentItem.name}</detailInfoName2>
          <DetailInfoName>Edad</DetailInfoName>
          <detailInfoName2>{currentItem.age}</detailInfoName2>
          <DetailInfoName>Altura</DetailInfoName>
          <detailInfoName2>{currentItem.height}</detailInfoName2>
          <DetailInfoName>Profesión</DetailInfoName>
          <detailInfoName2>{currentItem.profession}</detailInfoName2>
        </DetailAbout>
      )}
      {/* Coluna 3*/}
      <CollumNextMatch>
        {nextItems.map((item, index) => (
          <NextMatchImage key={index} src={item.imageProfileURL} />
        ))}
      </CollumNextMatch>
      {showModal ? (
        <>
          <Overlay />
          <ModalMatchOkay>
            <ModalContent>
              <TitleMensage> Dio Match</TitleMensage>
              ¡Haz clic en el botón de abajo y comienza a chatear ahora!
            </ModalContent>
            <Button to="/chat">INICIAR CONVERSACIÓN</Button>
          </ModalMatchOkay>
        </>
      ) : null}
    </BoxContentMatch>
  );
};

export default Match;
