import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const Main = styled.main`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;
export const LoginContainer = styled.div`
  display: flex;
  height: 448px;
  width: 448px;
  border-radius: 10px;
  border: 1px solid #e1e1e1;
  margin-top: 5%;
  box-sizing: border-box;
  flex-direction: column;
`;
export const LoginTitle = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.03em;
  margin-top: 40px;
  color: #424242;
`;

export const Description = styled.p`
  width: 251px;
  height: 36px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #424242;
  align-self: center;
  margin-top: 5%;
  margin-bottom: 5%;
`;
export const Form = styled.form`
  width: 336px;
  position: relative;
  height: 100%;
  margin-left: 50px;
`;

export const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: #e1e1e1;
  }
  .MuiOutlinedInput-root {
    width: 336px;
    margin-bottom: 10px;

    fieldset {
      margin-top: 5px;
      border-color: #e1e1e1;
      border-radius: 10px;
      width: 336px;
      height: 45px;
    }
    &:hover fieldset {
      border-color: #e1e1e1;
    }
    &.Mui-focused fieldset {
      margin-top: -2px;
      border-color: #e1e1e1;
    }
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  background: linear-gradient(45deg, #22e0a1 30%, #22e0a1 90%);
  background-color: black;
  border: 0;
  border-radius: 99px;
  color: white;
  height: 36px;
  width: 336px;
  font-size: 12px;
  padding: 20px, 40px, 20px, 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  outline: none;
`;
export const ForgotPasswordText = styled.div`
  cursor: pointer;
  padding-right: 70px;
  width: 436px;
  height: 46px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: #424242;
  text-align: center;
  a {
    text-decoration: none;
    font-style: none;
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid #e0dde5;
  display: flex;
  color: #737373;
  font-size: 15px;
  margin-top: 300px;
  align-items: center;
  height: 100px;
  width: 100%;
  p:nth-of-type(2) {
    cursor: pointer;
    margin-left: 20px;
    color: #cfcece;
    border-right: 1px solid #cfcece;
    padding-right: 20px;
  }
  p:nth-of-type(3) {
    cursor: pointer;
    margin-left: 20px;
    color: #cfcece;
    border-right: 1px solid #cfcece;
    padding-right: 20px;
  }
  p:nth-of-type(1) {
    cursor: pointer;
    margin-left: 100px;
    color: black;
    border-right: 1px solid #cfcece;
    padding-right: 20px;
  }
  p:nth-of-type(4) {
    margin-left: 1000px;
    color: black;
    svg {
      color: black;
    }
  }
`;
export const copyrightWrapper = styled.div`
  border-top: 1px solid #e0dde5;
  display: flex;
  color: #737373;
  font-size: 15px;
  margin-top: 300px;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: white;
`;
