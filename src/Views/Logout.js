import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthorizedUser } from "../Context/AuthUserContext";

const Logout = () => {
  const navigate = useNavigate();
  const { authorizedUser, setAuthorizedUser } = useAuthorizedUser();
  useEffect(() => {
    // Limpar localStorage e sessionStorage
    localStorage.clear();
    sessionStorage.clear();
    setAuthorizedUser(false);

    // Redirecionar para a página de login ou home após o logout
    navigate("/"); // Substitua '/login' pelo caminho que deseja redirecionar
  }, [navigate]);

  return null; // ou algum JSX se quiser mostrar algo na tela durante o logout
};

export default Logout;
