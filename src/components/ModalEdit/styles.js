import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';

export const ModalStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 448px;
  height: 356px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  z-index: 1000;
`;
export const OverlayStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
export const SubNavLanding = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #e0dde5;
  height: 40px;
  background: white;
  width: 448px;
  align-items: center;
  svg {
    height: 14px;
    width: 14.000000953674316px;
    border-radius: 0px;
    margin-left: 90px;
    cursor: pointer;
  }
`;
export const SubTextLanding = styled.span`
  font-weight: bold;
  font-size: 12px;
  color: #a3a3a3;
  padding-left: 20px;
  width: 325px;
`;
export const CancelButton = styled.button`
  margin-top: 20px;
  border-radius: 90px;
  margin-right: 20px;
  height: 36px;
  width: 125px;
  background-color: transparent;
  color: #fff;
  margin-left: 40px;
  border: 1px solid #22e0a1;
  outline: none;
  cursor: pointer;
  transition: background 1s;
  color: #22e0a1;
  &:hover {
    background: linear-gradient(90.17deg, #034afd 0%, #22e0a1 100%);
    color: #ffffff;
    opacity: 0.8;
  }
`;
export const SaveButton = styled.button`
  margin-top: 20px;
  border-radius: 90px;
  height: 36px;
  width: 125px;
  background-color: #22e0a1;
  color: #fff;
  border: 1px solid #22e0a1;
  outline: none;
  cursor: pointer;
  transition: background 1s;
  color: #ffffff;
  &:hover {
    background: linear-gradient(90.17deg, #034afd 0%, #22e0a1 100%);
    color: #ffffff;
    opacity: 0.8;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  margin-left: 90px;
  margin-top: 40px;
`;
export const Text = styled.div`
  cursor: pointer;
  width: 480px;
  height: 46px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: #424242;
  text-align: center;
  margin-left: 60px;
  margin-top: 30px;
`;
export const EcommerceDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 100px;
  width: 425px;
  margin-top: 20px;
  justify-content: center;
  margin-bottom: 20px;
`;
export const SelectInput = styled(TextField)`
  display: flex;
  flex-direction: row;
  width: 400px;
  justify-content: center;
  height: 36px;
  padding-left: 20px;
  margin-left: 100px;
`;
export const CheckBoxInput = styled(Checkbox)`
  height: 18px;
  width: 18px;
  border-radius: 0px;
  margin-right: 10px;
`;
export const EcommerceLabel = styled.p`
  height: 14px;
  width: 268px;
  font-size: 12px;
`;
