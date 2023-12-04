import React, { useEffect, useState } from "react";

import MainLayout from "../LayoutTemplate/MainLayout/MainLayout";
import CardsLike from "../Components/CardsLike/CardsLike";

const Matches = () => {
  const [dataOldMan, setDataOldMan] = useState([]);
  const emailUser = localStorage.getItem("email");

  const fetchData = () => {
    // Verificar se já existem dados carregados
    if (dataOldMan.length > 0) {
      return; // Se já houver dados, não faz a requisição
    }

    if (!emailUser) {
      console.error("Email do usuário não encontrado.");
      return;
    }

    fetch(`http://195.35.18.158:1998/getAllMatch/${emailUser}`, {
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
        console.error("EROOOOOO CRKL:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainLayout>
      <CardsLike
        titlePage="Match"
        data={dataOldMan.length > 0 ? dataOldMan[0].matchsArray : []}
      />
    </MainLayout>
  );
};

export default Matches;
