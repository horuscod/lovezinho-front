import React, { useState, useEffect } from "react";
import { Container, Form, SubContainerSign } from "./Styles.js";
import Input from "../../Input/Input.js";
import Button from "../../Button/index.js";
import { validateEmail, validatePassword } from "../../Val/validate.js";
//import UserService from '../../Services/UserService.js'
import { NavLink, useNavigate } from "react-router-dom";

import { app } from "../../../Config/FirebaseConfig.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthorizedUser } from "../../../Context/AuthUserContext.js";

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const { loginUser } = useAuthorizedUser();

  const { setAuthorizedUser } = useAuthorizedUser();

  const [useEmail, setUseEmail] = useState("");
  const [usePassword, setUsePassword] = useState("");

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
      const user = userCredential.user;

      if (user) {
        const response = await fetch(
          `https://api-velho-rico-597ac8e8746d.herokuapp.com/findOndeUserByEmail/${user.email}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data) {
          console.log(data);
          loginUser(data);
          sessionStorage.setItem("accessToken", user.accessToken);
          localStorage.setItem("accessToken", user.accessToken);
          sessionStorage.setItem("email", user.email);
          localStorage.setItem("email", user.email);
          localStorage.setItem("urlImgProfile", data[0].imageProfileURL);
          setAuthorizedUser(true);
        }

        // navigate("/find-matches");
      } else {
        setAuthorizedUser(false);
      }
    } catch (error) {
      console.error("Erro no login:", error);
      setAuthorizedUser(false);
    }
  };

  const GoToLogin = async (event) => {
    event.preventDefault();
    await loginWithEmailHandler();
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

        <SubContainerSign>
          <p>Não possui conta?</p>
          <NavLink to="/signup">Cadastrar</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
  );
};

export default Login;
