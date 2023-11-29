import axios from "axios";

const process = "localhost";

export default class UserServices {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_LOGIN + "",
    });
  }

  async login(dados) {
    const { data } = await this.axios.post("/login", dados);

    if (data) {
      localStorage.setItem("nome", data.user.nome);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("token", data.token.token);

      return true;
    }

    return;
  }

  async cadastrar(dados) {
    return this.axios.post("/user", dados);
  }

  usuarioAutenticado() {
    return localStorage.getItem("token") !== undefined ? true : false;
  }

  async logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("nome");
    localStorage.removeItem("email");
  }
}
