// AuthorizedUserContext.js
import React, { createContext, useContext, useState } from "react";

const AuthorizedUserContext = createContext();
export function useAuthorizedUser() {
  return useContext(AuthorizedUserContext);
}

export function AuthorizedUserProvider({ children }) {
  const [authorizedUser, setAuthorizedUser] = useState(false);

  return (
    <AuthorizedUserContext.Provider
      value={{ authorizedUser, setAuthorizedUser }}
    >
      {children}
    </AuthorizedUserContext.Provider>
  );
}
