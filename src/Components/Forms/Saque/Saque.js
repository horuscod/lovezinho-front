import React, { useState } from "react";
import {
  Container,
  ContainerFormsWithDraw,
  Form,
  SubContainerSign,
  Label,
  ButtonWithDraw,
} from "./styles.js";
import Input from "../../Input/Input.js";

const Saque = () => {
  const [formData, setFormData] = useState({
    name: "",
    accountNumber: "",
    agency: "",
    address: "",
    cpf: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o backend ou realizar outras operações
    console.log("Dados enviados:", formData);
    // Limpar os dados do formulário
    setFormData({
      name: "",
      accountNumber: "",
      agency: "",
      address: "",
      cpf: "",
    });
  };

  return (
    <ContainerFormsWithDraw>
      <Form onSubmit={handleSubmit}>
        <Label>
          Nome:
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome"
          />
        </Label>
        <Label>
          Número da Conta:
          <Input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            placeholder="Digite seu numero da conta"
          />
        </Label>
        <Label>
          Agência:
          <Input
            type="text"
            name="agency"
            value={formData.agency}
            onChange={handleChange}
            placeholder="Digite sua agencia"
          />
        </Label>
        <Label>
          Endereço:
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Digite seu endereço"
          />
        </Label>
        <Label>
          CPF:
          <Input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder="Digite seu CPF"
          />
        </Label>
        <ButtonWithDraw type="submit">Cadastrar Dados Bancários</ButtonWithDraw>
      </Form>
    </ContainerFormsWithDraw>
  );
};

export default Saque;
