// Função para validar o nome (não deve estar vazio)
export const validateName = (name) => {
  return name.trim() !== "";
};

// Função para validar o e-mail (deve ser um e-mail válido)
export const validateEmail = (email) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};

// Função para validar a senha (deve ter pelo menos 6 caracteres)
export const validatePassword = (password) => {
  return password.length >= 6;
};

// Função para validar a confirmação de senha (deve ser igual à senha)
export const validarConfirmarSenha = (password, confirmPassword) => {
  return password === confirmPassword;
};
