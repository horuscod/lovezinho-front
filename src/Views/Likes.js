import React, { useEffect, useState } from "react";

import MainLayout from "../LayoutTemplate/MainLayout/MainLayout";
import CardsLike from "../Components/CardsLike/CardsLike";

const Likes = () => {
  const [dataLikes, setDataLikes] = useState([]);
  const emailUser = localStorage.getItem("email");

  const fetchData = () => {
    if (dataLikes.length > 0) {
      return;
    }

    if (!emailUser) {
      console.error("Email do usuário não encontrado.");
      return;
    }

    fetch(`https://api.velhorico.xyz/getAllLikes/${emailUser}`, {
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
        setDataLikes(data);
      })
      .catch((error) => {
        console.error("", error);
      });
  };

  useEffect(() => {
    fetchData();
    console.log(dataLikes);
  }, []);

  return (
    <MainLayout>
      <CardsLike
        titlePage="Meus Likes"
        data={dataLikes.length > 0 ? dataLikes : []}
      />
    </MainLayout>
  );
};

export default Likes;
