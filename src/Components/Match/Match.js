import React, { useState, useEffect } from "react";
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
  const [shuffledData, setShuffledData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  /* Função que embaralha o Array */
  const shuffleArray = (array) => {
    let newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const handleLike = async () => {
    const nextIndex = currentIndex + 1;
    const emailLocal = dataPerson[0].email;
    const uidUser = dataPerson[0].uid;

    if (nextIndex < shuffledData.length) {
      const lastClickedPerson = shuffledData[currentIndex];
      const { imageProfileURL, name, uid } = lastClickedPerson;

      // Lógica específica para a quinta pessoa
      if (nextIndex === 4) {
        console.log("Quinta pessoa clicada: ", lastClickedPerson);
        setShowModal(true);

        try {
          const matchResponse = await fetch(
            "https://api.velhorico.xyz/newMatch",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                uidBot: uid,
                email: emailLocal,
                imageProfileBot: imageProfileURL,
                nameProfileBot: name,
              }),
            }
          );

          if (!matchResponse.ok) {
            throw new Error(`Erro HTTP: ${matchResponse.status}`);
          }

          const matchData = await matchResponse.json();
          console.log("Dados do match enviados com sucesso!", matchData);
        } catch (error) {
          console.error("Erro na requisição de match:", error);
        }
      }

      // Lógica para um like normal
      try {
        const likeResponse = await fetch("https://api.velhorico.xyz/newLike", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uidBot: uid,
            uidUser: uidUser,
            imageProfileBot: imageProfileURL,
            nameProfileBot: name,
          }),
        });

        if (!likeResponse.ok) {
          throw new Error(`Erro HTTP: ${likeResponse.status}`);
        }
      } catch (error) {
        console.error("Erro na requisição de like:", error);
      }

      setCurrentIndex(nextIndex);
    }
  };

  const handleUnLike = async () => {
    try {
      const nextIndex = currentIndex + 1;
      const lastClickedPerson = shuffledData[currentIndex];
      if (nextIndex < shuffledData.length) {
        const { imageProfileURL, name, uid } = lastClickedPerson;
        const uidUser = dataPerson[0].uid;
        const response = await fetch("https://api.velhorico.xyz/newUnlike", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uidBot: uid,
            uidUser: uidUser,
            imageProfileBot: imageProfileURL,
            nameProfileBot: name,
          }),
        });

        if (response.ok) {
          setCurrentIndex(nextIndex);
        } else {
          console.error("Falha na requisição:", response.status);
        }
      }
    } catch (error) {
      console.error("Erro na execução:", error);
    }
  };

  useEffect(() => {
    if (dataOldMan && dataOldMan.length > 0) {
      setShuffledData(shuffleArray(dataOldMan));
    }
  }, [dataOldMan]);

  const currentItem = shuffledData[currentIndex];
  const nextItems = shuffledData.slice(currentIndex + 1, currentIndex + 7);

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
            <ButtonUnlike onClick={handleUnLike}>
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
