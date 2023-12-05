import React, { useEffect, useState } from "react";

import MainLayout from "../LayoutTemplate/MainLayout/MainLayout";
import CardsLike from "../Components/CardsLike/CardsLike";

const Unlikes = () => {
  const [dataUnlikes, setDataUnlikes] = useState([]);
  const emailUser = localStorage.getItem("email");

  const fetchData = () => {
    if (dataUnlikes.length > 0) {
      return;
    }

    if (!emailUser) {
      console.error("Email do usuário não encontrado.");
      return;
    }

    fetch(`https://api.velhorico.xyz/getAllUnlike/${emailUser}`, {
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
        setDataUnlikes(data);
      })
      .catch((error) => {
        console.error("", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainLayout>
      <CardsLike
        titlePage="Pessoas que eu não gostei
"
        data={dataUnlikes.length > 0 ? dataUnlikes : []}
      />
    </MainLayout>
  );
};

export default Unlikes;
