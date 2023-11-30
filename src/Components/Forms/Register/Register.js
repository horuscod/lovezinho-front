import React, { useState } from "react";
import { Container, Form, SubContainerSign } from "./style.js";
import Input from "../../Input/index.js";
import Button from "../../Button/index.js";
import {
  validateEmail,
  validatePassword,
  validateName,
  validarConfirmarSenha,
} from "../../Val/validate.js";
//import UserService from '../../Services/UserService.js'
import { NavLink, useNavigate } from "react-router-dom";

//const userService = new UserService()

const Register = () => {
  const [loading, setLoading] = useState();
  const [form, setForm] = useState([]);
  const navigate = useNavigate();

  const createNewUser = () => {
    const dataBody = {};
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(form);
    /* if (!validateInput()) {
      alert("Dados do formulário inválidos");
      return;
    } */
    setLoading(true);
    try {
      const response = await fetch(
        "https://api-velho-rico-597ac8e8746d.herokuapp.com/newUserByForms",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      alert("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (err) {
      alert("Algo deu errado com o Cadastro: " + err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validateInput = () => {
    return (
      validateEmail(form.email) &&
      validatePassword(form.password) &&
      validarConfirmarSenha(form.password, form.confirmarPassword) &&
      validateName(form.nome)
    );
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Faça o seu Cadastro 👋</h1>
        <Input
          name="name"
          placeholder="Digite o seu nome"
          onChange={handleChange}
          type="text"
        />

        <Input
          name="email"
          placeholder="Digite o seu e-mail"
          onChange={handleChange}
          type="email"
        />
        <Input
          name="password"
          placeholder="Digite a sua senha"
          onChange={handleChange}
          type="password"
        />
        <Input
          name="confirmarPassword"
          placeholder="Confirme a sua senha"
          onChange={handleChange}
          type="password"
        />
        <Button type="submit" text="Efetuar Cadastro!" />
        <SubContainerSign>
          <p>Já possui conta?</p>
          <NavLink to="/">Login</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
  );
};

export default Register;
