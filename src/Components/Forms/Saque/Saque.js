import React, { useState } from "react";
import {
    BankDetailsFormContainer,
    Form,
    Label,
    Input,
    Button,
  } from "./styles.js";

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
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Número da Conta:
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Agência:
        <input
          type="text"
          name="agency"
          value={formData.agency}
          onChange={handleChange}
        />
      </label>
      <label>
        Endereço:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label>
        CPF:
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Cadastrar Dados Bancários</button>
    </form>
  );
};

export default Saque;
