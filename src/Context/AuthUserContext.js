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
  const [dataChat, setDataChat] = useState([]);

  /* DADOS ATUALIZADO */
  const [dataPerson, setDataPerson] = useState([]);
  const [dataPersonPremium, setDataPersonPremium] = useState([]);

  /* Chamada para a primeira rederização do componente */
  useEffect(() => {
    createDataPremium();
  }, []);

  /* Chamada quando atualiza o componente authorizedUser */

  useEffect(() => {
    console.log("-----------Data person");
    console.log(dataPerson);
    if (dataPerson.length != 0) {
      setAuthorizedUser(true);
    }
  }, [dataPerson]);

  const createDataLocal = async (email) => {
    try {
      const data = { email: email };
      const response = await fetch(`https://api.velhorico.xyz/getByOneUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
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

      const userEmail = userCredential.user.email;
      createDataLocal(userEmail);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {}, [dataPersonPremium]);

  const createDataPremium = async () => {
    try {
      const response = await fetch(
        `https://api.velhorico.xyz/allUsersPremium`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin",
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

  const saveToLocalStorage = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("userData");
  };

  /*  const [userData, setUserData] = useState(() => {
    const localUserData = localStorage.getItem("userData");
    return localUserData
      ? JSON.parse(localUserData)
      : {
          name: "",
          email: "",
          imageProfileURL: "",
          photoURL: "",
          typeProfile: "",
          uid: "",
          uidAuth: "",
          cupons: "",
          location: "",
          urlImageBot: "",
        };
  });
 */
  const loginUser = (data) => {
    saveToLocalStorage(data);
  };

  const fetchDataUser = async () => {
    try {
      const email = localStorage.getItem("email");
      const data = { email: email };
      console.log("____________AUTH DATA");

      const response = await fetch(`https://api.velhorico.xyz/getByOneUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);

      localStorage.setItem("userData", JSON.stringify(result[0]));
      return result; // Retorne os dados se necessário
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const logout = () => {
    setAuthorizedUser(null);
    setUserData({});
    clearLocalStorage();
  };

  const findAllChat = async () => {
    try {
      const getEmail = localStorage.getItem("email");
      const response = await fetch(
        `https://api.velhorico.xyz/getAllChat/${getEmail}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin",
        }
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      const result = await response.json();
      setDataChat(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <AuthorizedUserContext.Provider
      value={{
        goToLogin,
        dataPerson,
        dataPersonPremium,
        authorizedUser,
        setAuthorizedUser,
        loginUser,
        logout,
        userData,
        setUserData,
        fetchDataUser,
        dataChat,
        findAllChat,
        setDataChat,
      }}
    >
      {children}
    </AuthorizedUserContext.Provider>
  );
}
