import React, {useState} from 'react'
import { Container, Form, SubContainerSign } from './style.js'
import Input from '../../Input/index.js'
import Button from '../../Button/index.js'
import { validateEmail, validatePassword, validateName, validarConfirmarSenha } from '../../Val/validate.js'
import UserService from '../../Services/UserService.js'
import { NavLink, useNavigate } from 'react-router-dom'

const userService = new UserService()

const Register = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const { data } = await userService.cadastrar({
        nome: form.nome,
        email: form.email,
        password: form.password,
      })
      if (data) {
        const responseLogin = await userService.login({
          email: form.email,
          password: form.password
        })
        if (responseLogin === true) {
          alert('usuário Cadastrado com Sucesso')
          navigate('/home')
        }
    }
      setLoading(false)
    }
    catch (err) {
      alert('Algo deu errado com o Cadastro' + err)
    }
  }

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validateInput = () => {
    return validateEmail(form.email) 
    && validatePassword(form.password)
    && validarConfirmarSenha(form.password, form.confirmarPassword)
    && validateName(form.nome)
  }

  return (
    <Container>
      <Form>
        <h1>Faça o seu Cadastro 👋</h1>
        <Input
          name='nome'
          placeholder='Digite o seu nome'
          onChange={handleChange}
          type='text'
        />
        
        <Input
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleChange}
          type='email'
        />
        <Input
          name='password'
          placeholder='Digite a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Input
          name='confirmarPassword'
          placeholder='Confirme a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Button
          type='submit'
          text='Efetuar Cadastro!'
          onClick={handleSubmit}
          disabled={loading === true || !validateInput()}
        />
        <SubContainerSign>
          <p>Já possui conta?</p>
          <NavLink to="*">Login</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
    
  )
}

export default Register;