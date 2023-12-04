import React, { useState, useEffect } from "react";
import { Container, Form, SubContainerSign } from "./Styles.js";
import Input from "../../Input/Input.js";
import Button from "../../Button/index.js";
import { NavLink } from "react-router-dom";

import { app } from "../../../Config/FirebaseConfig.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthorizedUser } from "../../../Context/AuthUserContext.js";

const Login = () => {
  const auth = getAuth(app);
  const { setAuthorizedUser, fetchDataUser } = useAuthorizedUser();
  const [useEmail, setUseEmail] = useState("");
  const [usePassword, setUsePassword] = useState("");
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleEnterKey = async (e) => {
      if (e.keyCode === 13) {
        await loginWithEmailHandler();
      }
    };

    window.addEventListener("keydown", handleEnterKey);

    return () => {
      window.removeEventListener("keydown", handleEnterKey);
    };
  }, []);

  const loginWithEmailHandler = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        useEmail,
        usePassword
      );
      const { email } = userCredential.user;
      localStorage.setItem("email", email);
      await fetchDataUser();
      setAuthorizedUser(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const GoToLogin = async (event) => {
    event.preventDefault();
    await loginWithEmailHandler();
  };

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;

      if (choiceResult.outcome === "accepted") {
        console.log("Usuário aceitou a instalação");
      } else {
        console.log("Usuário recusou a instalação");
      }

      setDeferredPrompt(null);
      setShowInstallButton(false);
    }
  };

  return (
    <Container>
      <Form>
        <h1>Faça o seu Login 👋</h1>
        <Input
          name="email"
          placeholder="Digite o seu e-mail"
          onChange={(event) => setUseEmail(event.target.value)}
          type="email"
        />
        <Input
          name="password"
          placeholder="Digite a sua senha"
          onChange={(event) => setUsePassword(event.target.value)}
          type="password"
        />

        <Button type="submit" text="Entrar!" onClick={GoToLogin} />
        <Button type="button" text="Instalar" onClick={handleInstall} />

        <SubContainerSign>
          <p>Não possui conta?</p>
          <NavLink to="/signup">Cadastrar</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
  );
};

export default Login;
