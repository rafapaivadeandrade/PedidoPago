import React, { useState } from 'react';
import Header from '../../components/Header';
import { Link, useHistory } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import {
  Main,
  LoginContainer,
  LoginTitle,
  Description,
  Form,
  StyledTextField,
  StyledButton,
  Footer,
} from './styles';
import { useUser } from '../../hooks/ContextApi';

const Login = () => {
  const { signIn, isSigned, setIsSigned } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      signIn({ username: email, password: password });
      if (isSigned) {
        history.push('/landing');
      }
    } catch (err) {
      console.log(err);
      setIsSigned(false);
      alert('Fail to login, try again');
    }
  }
  return (
    <>
      <Header />
      <Main>
        <LoginContainer>
          <LoginTitle>Fazer Login</LoginTitle>
          <Description>
            Ir para a Interface administrativa da Pedido Pago
          </Description>
          <Form onSubmit={handleSubmit}>
            <StyledTextField
              label="E-mail"
              variant="outlined"
              id="email-outlined-input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <StyledTextField
              label="Senha"
              variant="outlined"
              id="senha-outlined-input"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <StyledButton type="submit">Continuar</StyledButton>
            <forgotPasswordText>
              <Link to="/">Esqueceu a senha?</Link> Receba link de troca de
              senha no email cadastrado.
            </forgotPasswordText>
          </Form>
        </LoginContainer>
      </Main>
      <Footer>
        <p>&copy; 2020 Pedido Pago</p>
        <p>Termos Gerais e Condições de Uso</p>
        <p>Política de Privacidade</p>
        <p>
          Feito com{' '}
          <FaHeart color="#22e0a1" size={20} margin="10px" marginTop="10px" />{' '}
          em SP
        </p>
      </Footer>
    </>
  );
};

export default Login;
