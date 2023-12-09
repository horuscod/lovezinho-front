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
  const {  goToLogin } = useAuthorizedUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleEnterKey = async (e) => {
      if (e.keyCode === 13) {
        //await loginWithEmailHandler();
      }
    };

    window.addEventListener("keydown", handleEnterKey);

    return () => {
      window.removeEventListener("keydown", handleEnterKey);
    };
  }, []);

  /*  const loginWithEmailHandler = async () => {
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
  }; */

  const clickLogin = async () => {
    try {
      const login = await goToLogin(email, password);

      console.log(login);
    } catch (erro) {
      console.log("Error ao realizar o Login:".erro);
    }
  };
  /*  const GoToLogin = async (event) => {
    event.preventDefault();
    await loginWithEmailHandler();
  }; */

  return (
    <Container>
      <Form>
        <h1>Faça o seu Login ❤️ </h1>
        <Input
          name="email"
          placeholder="Digite o seu e-mail"
          onChange={(event) => setEmail(event.target.value)}
          type="email"
        />
        <Input
          name="password"
          placeholder="Digite a sua senha"
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />

        <Button text="Entrar!" onClick={clickLogin} />

        <SubContainerSign>
          <p>Não possui conta?</p>
          <NavLink to="/signup">Cadastrar</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
  );
};

export default Login;
