import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
      height: 40px;
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
// export const StyledButton = styled(Button)`
//   background: linear-gradient(45deg, #22e0a1 30%, #22e0a1 90%);
//   background-color: black;
//   border: 0;
//   border-radius: 10px;
//   /* box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3); */
//   color: white;
//   height: 48;
//   width: 336px;
//   /* padding: 0 100px; */
// `;
export const StyledButton = styled.button`
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
export const forgotPasswordText = styled.div`
  width: 436px;
  height: 46px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: #424242;
  margin-left: 50px;
  text-align: center;
  align-items: center;
  text-align: center;
  a {
    text-decoration: none;
    font-style: none;
  }
`;

export const passwordLink = styled(Link)`
  /* width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center; */
`;
