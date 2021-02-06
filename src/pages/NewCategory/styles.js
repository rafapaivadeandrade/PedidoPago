import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const CategoryActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  border-bottom: 1px solid #e0dde5;
  padding-bottom: 10px;
`;

export const CategoryListTitle = styled.div`
  margin-left: 100px;
  margin-top: 50px;
  font-weight: bold;
  font-size: 25px;
  color: #a3a3a3;
`;

export const CategoryDataContainer = styled.div`
  display: flex;
  height: 282px;
  width: 686px;
  border-radius: 5px;
  border: 1px solid #e1e1e1;
  margin-top: 5%;
  box-sizing: border-box;
  flex-direction: column;
  background-color: #ffffff;
  margin-left: 100px;
`;

export const CategoryDataTitle = styled.div`
  padding-left: 10px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 16px;
  color: #a3a3a3;
  height: 40px;
  width: 686px;
  border-bottom: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 5px 5px 0px 0px;
`;

export const CategoryData = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CategoryInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const StyledTextField = styled(TextField)`
  text-indent: 5px;

  label.Mui-focused {
    font-size: 16px;
    color: #e1e1e1;
  }
  .MuiOutlinedInput-root {
    width: 436px;
    padding-right: 30px;

    fieldset {
      margin-top: 2px;
      border-color: #e1e1e1;
      border-radius: 10px;
      width: 336px;
      width: 436px;
      height: 45px;
    }
    &:hover fieldset {
      border-color: #e1e1e1;
      width: 436px;
    }
    &.Mui-focused fieldset {
      width: 436px;
      border-color: #e1e1e1;
    }
  }
`;
export const FirstCaractersLabel = styled.p`
  margin-left: 350px;
  font-weight: bold;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: #a3a3a3;
`;
export const SecondCaractersLabel = styled.p`
  margin-left: 350px;
  font-weight: bold;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: #a3a3a3;
`;
export const NewCategoryButton = styled.button`
  border-radius: 90px;
  height: 30px;
  width: 150px;
  background-color: #22e0a1;
  color: #fff;
  margin-top: 10px;
  margin-left: 290px;
  border: 0px solid transparent;
  outline: none;
  cursor: pointer;
  transition: background 1s;
  padding-top: 3px;
  &:hover {
    background: linear-gradient(90.17deg, #034afd 0%, #22e0a1 100%);
    opacity: 0.8;
  }
`;
