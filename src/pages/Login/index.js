import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

import {
  Main,
  LoginContainer,
  LoginTitle,
  Description,
  Form,
  StyledTextField,
  StyledButton,
  forgotPasswordText,
  passwordLink,
} from './styles';

const Login = (props) => {
  return (
    <div>
      <Header />
      <Main>
        <LoginContainer>
          <LoginTitle>Fazer Login</LoginTitle>
          <Description>
            Ir para a Interface administrativa da Pedido Pago
          </Description>
          <Form>
            <StyledTextField
              label="E-mail"
              variant="outlined"
              id="email-outlined-input"
            />
            <StyledTextField
              label="Senha"
              variant="outlined"
              id="senha-outlined-input"
              type="password"
            />
            <StyledButton>Continuar</StyledButton>
            <forgotPasswordText>
              <Link to="/">Esqueceu a senha?</Link> Receba link de troca de
              senha no email cadastrado.
            </forgotPasswordText>
          </Form>
        </LoginContainer>
      </Main>
    </div>
  );
};

export default Login;
