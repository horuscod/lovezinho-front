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
    const handleEnterKey = (e) => {
      if (e.keyCode === 13) {
        loginWithEmailHandler(auth, useEmail, usePassword);
      }
    };

    window.addEventListener("keydown", handleEnterKey);

    return () => {
      window.removeEventListener("keydown", handleEnterKey);
    };
  }, [auth, useEmail, usePassword]);

  function loginWithEmailHandler(auth, useEmail, usePassword) {
    signInWithEmailAndPassword(auth, useEmail, usePassword)
      .then((userCredential) => {
        const user = userCredential.user;
        const token = user.accessToken;

        if (user) {
          fetch(
            `https://api-velho-rico-597ac8e8746d.herokuapp.com/findOndeUserByEmail/${user.email}`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((data) => {
              loginUser(data);
              sessionStorage.setItem("accessToken", user.accessToken);
              localStorage.setItem("accessToken", user.accessToken);
              sessionStorage.setItem("uid", user.email);
              localStorage.setItem("uid", user.email);
              setAuthorizedUser(true);
            })
            .catch((error) => {
              console.error(
                "There has been a problem with your fetch operation:",
                error
              );
            });
          /*   
          navigate("/find-matches"); */
        } else {
          setAuthorizedUser(false);
        }
      })
      .catch((error) => {
        console.log("Entrou no erro aqui ");
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
        setAuthorizedUser(false);
      });
  }

  const GoToLogin = (event) => {
    event.preventDefault();
    loginWithEmailHandler(auth, useEmail, usePassword);
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
