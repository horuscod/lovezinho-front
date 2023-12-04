import React, { useState, useEffect } from "react";
import {
  BoxButton,
  ButtonDownload,
  TextInformation,
} from "./StyledDownloadButton";

const DownloadButton = () => {
  const [installPrompt, setInstallPrompt] = useState(null);
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Impede que o mini-infobar apareça no celular
      e.preventDefault();
      // Salva o evento para que possa ser acionado mais tarde
      setInstallPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);
  const handleInstallClick = () => {
    if (installPrompt) {
      // Mostra o prompt de instalação
      installPrompt.prompt();
      // Decida o que fazer após o usuário responder ao prompt
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("Usuário aceitou a instalação do PWA");
        } else {
          console.log("Usuário não aceitou a instalação do PWA");
        }
        // Depois de usar o prompt, remova-o
        setInstallPrompt(null);
      });
    }
  };

  return (
    <BoxButton>
      <TextInformation>
        Clique no botão Download para instalar o aplicativo no seu celular
      </TextInformation>
      <ButtonDownload onClick={handleInstallClick}> Instalar</ButtonDownload>
    </BoxButton>
  );
};

export default DownloadButton;
