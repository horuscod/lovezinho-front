// AuthorizedUserContext.js
import React, { createContext, useContext, useState } from "react";

const AuthorizedUserContext = createContext();
export function useAuthorizedUser() {
  return useContext(AuthorizedUserContext);
}

export function AuthorizedUserProvider({ children }) {
  const [authorizedUser, setAuthorizedUser] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    imageProfileURL: "",
  });
  const loginUser = (data) => {
    setAuthorizedUser(data);
    setUserData(...data);
  };

  const logout = () => {
    setAuthorizedUser(null);
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
