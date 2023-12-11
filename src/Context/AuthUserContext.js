import React, { createContext, useContext, useState, useEffect } from "react";
import { app } from "../Config/FirebaseConfig.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const AuthorizedUserContext = createContext();
export function useAuthorizedUser() {
  return useContext(AuthorizedUserContext);
}

export function AuthorizedUserProvider({ children }) {
  const [authorizedUser, setAuthorizedUser] = useState(null);
  const [userData, setUserData] = useState(null);

  /* DADOS ATUALIZADO */
  const [dataPerson, setDataPerson] = useState([]);
  const [dataPersonPremium, setDataPersonPremium] = useState([]);
  const [dataOldMan, setDataOldMan] = useState([]);

  let userEmail = "";
  /* Chamada para a primeira rederização do componente */
  useEffect(() => {
    createDataPremium();
    createDataOldMan();
  }, []);

  /* Chamada quando atualiza o componente authorizedUser */

  useEffect(() => {
    if (dataPerson.length != 0) {
      setAuthorizedUser(true);
    }
  }, [dataPerson]);

  const createDataLocal = async (email) => {
    try {
      const data = { email: email };
      const response = await fetch(`https://api.velhorico.xyz/getByOneUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json", auth: "lovezinho" },
        credentials: "include",
        auth: "lovezinho",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      const result = await response.json();
      setDataPerson(result);
    } catch (error) {
      console.log("Erro ao tentar buscar usuário");
    }
  };

  const goToLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      userEmail = userCredential.user.email;
      createDataLocal(userEmail);
      return userEmail;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  /* Dados do data Premium */

  useEffect(() => {}, [dataPersonPremium]);

  const createDataPremium = async () => {
    try {
      const response = await fetch(
        `https://api.velhorico.xyz/allUsersPremium`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", auth: "lovezinho" },
          credentials: "include",
          auth: "lovezinho",
        }
      );
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      const result = await response.json();
      setDataPersonPremium(result);
    } catch (error) {
      console.log("Teve um erro ao tentar retornar os dados Premium" + error);
    }
  };

  /* Dados para carregar os velhos que poderão dar um match */

  useEffect(() => {
    console.log("-----dados do velho");
    console.log(dataOldMan);
  }, [dataOldMan]);

  const createDataOldMan = async () => {
    try {
      const response = await fetch(`https://api.velhorico.xyz/findAllOldMan`, {
        method: "GET",
        headers: { "Content-Type": "application/json", auth: "lovezinho" },
        credentials: "include",
        auth: "lovezinho",
      });
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      const result = await response.json();
      setDataOldMan(result);
    } catch (error) {
      console.log("Erro ao tentar criar o data Old verifique:" + error);
    }
  };

  /* ATUALIZAÇÃO DE DADOS SAQUE */

  const saveWithDraw = async (
    accNumber,
    accAgency,
    accAddress,
    accCPF,
    uid,
    email
  ) => {
    try {
      console.log(accNumber);
      console.log(accAgency);
      console.log(accAddress);
      console.log(accCPF);

      console.log(uid);

      const data = {  
        accNumber: accNumber,
        accAgency: accAgency,
        accAddress: accAddress,
        accCPF: accCPF,
        uid: uid,
      };
      const response = await fetch(`https://api.velhorico.xyz/updateWithDraw`, {
        method: "POST",
        headers: { "Content-Type": "application/json", auth: "lovezinho" },
        credentials: "include",
        auth: "lovezinho",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      createDataLocal(email);
    } catch (error) {
      console.log("Erro ao salvar dados formulário" + error);
      console.log(userEmail);
    }
  };

  const logout = () => {
    setAuthorizedUser(null);
    setUserData({});
  };

  return (
    <AuthorizedUserContext.Provider
      value={{
        goToLogin,
        dataPerson,
        dataPersonPremium,
        dataOldMan,
        saveWithDraw,
        authorizedUser,
        setAuthorizedUser,
        logout,
        userData,
        setUserData,
      }}
    >
      {children}
    </AuthorizedUserContext.Provider>
  );
}
