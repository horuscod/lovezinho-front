import React, { useState, useEffect } from "react";
import {
  BoxContentImage,
  BoxContentMatch,
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
  NextMatchImage,
} from "./StyledMatch";

import ImageDef from "../../../public/imgs/d-avatar.webp";

import { FaHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Match = () => {
  const [dataOldMan, setDataOldMan] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`https://api-velho-rico-597ac8e8746d.herokuapp.com/findAllOldMan`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDataOldMan(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  const handleLike = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < dataOldMan.length) {
      const lastClickedPerson = dataOldMan[currentIndex]

      setCurrentIndex(nextIndex);

      if (nextIndex === 4) {
        console.log("Quinta pessoa clicada: ", lastClickedPerson);
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
          <DetailInfoName>Sobre {currentItem.name}</DetailInfoName>
          <DetailInfoName>Língua preferida</DetailInfoName>
          <detailInfoName2>{currentItem.language}</detailInfoName2>
          <DetailInfoName>Altura</DetailInfoName>
          <detailInfoName2>{currentItem.height}</detailInfoName2>
          <br />
          <br />
          <br />
          <br />
          <ButtonPerfil>Perfil</ButtonPerfil>
        </DetailAbout>
      )}
      {/* Coluna 3*/}
      <CollumNextMatch>
        {nextItems.map((item, index) => (
          <NextMatchImage key={index} src={item.imageProfileURL} />
        ))}
      </CollumNextMatch>
    </BoxContentMatch>
  );
};

export default Match;
