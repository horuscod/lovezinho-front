import React, { useState, useEffect } from "react";
import {
  BoxContentImage,
  BoxContentMatch,
  Button,
  ButtonLike,
  ButtonPerfil,
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

import { useNavigate } from "react-router-dom";

const Match = () => {
  const [dataOldMan, setDataOldMan] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { userData } = useAuthorizedUser();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  /* Função que embaralha o Array */

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // troca de elementos
    }
    return array;
  }

  useEffect(() => {
    fetch(`https://api-velho-rico-597ac8e8746d.herokuapp.com/findAllOldMan`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("vai ter resposta");
        return response.json();
      })
      .then((data) => {
        console.log("Retorno");
        const shuffledData = shuffleArray(data);
        setDataOldMan(shuffledData);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  const handleLike = async () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < dataOldMan.length) {
      const lastClickedPerson = dataOldMan[currentIndex];

      setCurrentIndex(nextIndex);

      if (nextIndex === 4) {
        console.log("Quinta pessoa clicada: ", lastClickedPerson);
        setShowModal(true);
        const { imageProfileURL, name } = lastClickedPerson;
        const emailLocal = localStorage.getItem("email");
        fetch("https://api.velhorico.xyz/newMatch", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
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
      // Aqui você pode lidar com o fim da lista
      console.log("Fim da lista de matches");
    }
  };

  const currentItem = dataOldMan[currentIndex];
  const nextItems = dataOldMan.slice(currentIndex + 1, currentIndex + 7);
  console.log(dataOldMan);

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
          <DetailInfoName>Sobre: </DetailInfoName>
          <detailInfoName2>{currentItem.name}</detailInfoName2>
          <DetailInfoName>Língua preferida</DetailInfoName>
          <detailInfoName2>{currentItem.language}</detailInfoName2>
          <DetailInfoName>Altura</DetailInfoName>
          <detailInfoName2>{currentItem.height}</detailInfoName2>
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
              <TitleMensage> Deu Match</TitleMensage>
              Clique no botão abaixo e comece a conversar agora!
            </ModalContent>
            <Button to="/chat">INICIAR CONVERSA</Button>
          </ModalMatchOkay>
        </>
      ) : null}
    </BoxContentMatch>
  );
};

export default Match;
