import React, { useState, useEffect } from "react";
import { ContainerFormsWithDraw, Form, Label, Input } from "./styles.js";
import { useAuthorizedUser } from "../../../Context/AuthUserContext.js";
import Button from "../../Button/index.js";

const Saque = () => {
  const { dataPerson, saveWithDraw } = useAuthorizedUser();
  const [accNumber, setAccNumber] = useState("");
  const [accAgency, setAccAgency] = useState("");
  const [accAddress, setAccAddress] = useState("");
  const [accCPF, setAccCPF] = useState("");

  useEffect(() => {
    if (dataPerson.length > 0) {
      setAccNumber(dataPerson[0].accNumber || "");
      setAccAgency(dataPerson[0].accAgency || "");
      setAccAddress(dataPerson[0].accAddress || "");
      setAccCPF(dataPerson[0].accCPF || "");
    }
  }, [dataPerson]);

  const saveInformationForm = async () => {
    try {
      const saveData = await saveWithDraw(
        accNumber,
        accAgency,
        accAddress,
        accCPF,
        dataPerson[0].uid,
        dataPerson[0].email
      );
    } catch (error) {
      console.log("Ocorreu um erro" + error);
    }
  };

  return (
    <ContainerFormsWithDraw>
      <Form>
        <Label>
          Nome:
          <Input
            type="text"
            value={dataPerson.length > 0 ? dataPerson[0].name : ""}
            placeholder="Digite seu nome"
          />
        </Label>
        <Label>
          Número da Conta:
          <Input
            type="text"
            name="accountNumber"
            value={accNumber}
            onChange={(e) => setAccNumber(e.target.value)}
            placeholder="Digite seu numero da conta"
          />
        </Label>
        <Label>
          Agência:
          <Input
            type="text"
            name="agency"
            value={accAgency}
            onChange={(e) => setAccAgency(e.target.value)}
            placeholder="Digite sua agencia"
          />
        </Label>
        <Label>
          Endereço:
          <Input
            type="text"
            name="address"
            value={accAddress}
            onChange={(e) => setAccAddress(e.target.value)}
            placeholder="Digite seu endereço"
          />
        </Label>
        <Label>
          CPF:
          <Input
            type="text"
            name="cpf"
            value={accCPF}
            onChange={(e) => setAccCPF(e.target.value)}
            placeholder="Digite seu CPF"
          />
        </Label>
        <Button
          text="Cadastrar Dados Bancários"
          onClick={saveInformationForm}
        />
      </Form>
    </ContainerFormsWithDraw>
  );
};

export default Saque;
