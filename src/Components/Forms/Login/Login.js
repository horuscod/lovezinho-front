import React, { useState } from "react";
import { Container, Form, SubContainerSign } from "./Styles.js";
import Input from "../../Input/index.js";
import Button from "../../Button/index.js";
import { validateEmail, validatePassword } from "../../Val/validate.js";
//import UserService from '../../Services/UserService.js'
import { NavLink, useNavigate } from "react-router-dom";

//const userService = new UserService();

const Login = () => {
  const [loading, setLoading] = useState();
  const [form, setForm] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = false;
      console.log("response do Login", response);
      if (response === true) {
        alert("usuário Logado com Sucesso");
        navigate("/home");
      }
      setLoading(false);
    } catch (err) {
      alert("Algo deu errado com o Login" + err);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validateInput = () => {
    return validateEmail(form.email) && validatePassword(form.password);
  };

  return (
    <Container>
      <Form>
        <h1>Faça o seu Login 👋</h1>
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
        <Button
          type="submit"
          text="Entrar!"
          onClick={handleSubmit}
          disabled={loading === true || !validateInput()}
        />
        <SubContainerSign>
          <p>Não possui conta?</p>
          <NavLink to="cadastrar">Cadastrar</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
  );
};

export default Login;
