import React, { createContext, useContext, useState, useEffect } from "react";

const AuthorizedUserContext = createContext();
export function useAuthorizedUser() {
  return useContext(AuthorizedUserContext);
}

export function AuthorizedUserProvider({ children }) {
  const [authorizedUser, setAuthorizedUser] = useState(null);

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
    setAuthorizedUser(data);
    setUserData(data);
    saveToLocalStorage(data);
  };

  const logout = () => {
    setAuthorizedUser(null);
    setUserData({});
    clearLocalStorage();
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
      }}
    >
      {children}
    </AuthorizedUserContext.Provider>
  );
}
