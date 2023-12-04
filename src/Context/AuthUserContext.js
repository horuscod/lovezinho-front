import React, { createContext, useContext, useState, useEffect } from "react";

const AuthorizedUserContext = createContext();
export function useAuthorizedUser() {
  return useContext(AuthorizedUserContext);
}

export function AuthorizedUserProvider({ children }) {
  const [authorizedUser, setAuthorizedUser] = useState(null);
  const [dataChat, setDataChat] = useState([]);
  const saveToLocalStorage = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("userData");
  };

  const [userData, setUserData] = useState(() => {
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
