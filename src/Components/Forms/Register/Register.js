import React, { useState } from "react";
import { Container, Form, SubContainerSign } from "./style.js";
import Input from "../../Input/Input.js";
import Button from "../../Button/index.js";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [confirmPassword, setValidConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validForms();
    if (!isValid) {
      // Se não for válido, não prossiga com o envio
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://api.velhorico.xyz/newUserByForms", {
        method: "POST",
        headers: { "Content-Type": "application/json", auth: "lovezinho" },
        credentials: "include",
        auth: "lovezinho",
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      } else {
        navigate("/");
      }
    } catch (err) {
      alert("Algo deu errado com o Cadastro: " + err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validForms = () => {
    const nameUser = form.name;
    const emailUser = form.email;
    const passwordUser = form.password;
    const confirmPassword = form.confirmPassword;

    setValidName(nameUser.trim() === "");
    setValidEmail(emailUser.trim() === "");
    setValidPassword(passwordUser.trim() === "" || passwordUser.length < 6);
    setValidConfirmPassword(confirmPassword.trim() === "");

    return !(
      nameUser.trim() === "" ||
      emailUser.trim() === "" ||
      passwordUser.trim() === "" ||
      confirmPassword.trim() === "" ||
      passwordUser.length < 6 ||
      confirmPassword !== passwordUser
    );
  };

  return (
    <Container>
      <Form>
        <h1>Faça o seu Cadastro 👋</h1>
        <Input
          name="name"
          placeholder="Digite o seu nome"
          onChange={handleChange}
          type="text"
          valid={validName}
          mensageValid="Por Favor Preencha o campo"
        />
        <Input
          name="email"
          placeholder="Digite o seu e-mail"
          onChange={handleChange}
          type="email"
          valid={validEmail}
          mensageValid="Por Favor Preencha o campo"
        />
        <Input
          name="password"
          placeholder="Digite a sua senha"
          onChange={handleChange}
          type="password"
          valid={validPassword}
          mensageValid="Por Favor Preencha o campo"
        />
        <Input
          name="confirmPassword"
          placeholder="Confirme a sua senha"
          onChange={handleChange}
          type="password"
          valid={confirmPassword}
          mensageValid="Por Favor Preencha o campo"
        />
        <Button text="Efetuar Cadastro!" onClick={handleSubmit}/>
        <SubContainerSign>
          <p>Já possui conta?</p>
          <NavLink to="/">Login</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
  );
};

export default Register;
