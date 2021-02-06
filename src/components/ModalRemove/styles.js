import styled from 'styled-components';

export const ModalStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 592px;
  height: 219px;
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
  width: 592px;
  align-items: center;
  svg {
    height: 14px;
    width: 14.000000953674316px;
    border-radius: 0px;

    margin-left: 220px;
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
export const RemoveButton = styled.button`
  margin-top: 20px;
  border-radius: 90px;
  margin-right: 20px;
  height: 36px;
  width: 280px;
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
export const KeepButton = styled.button`
  margin-top: 20px;
  border-radius: 90px;
  height: 36px;
  width: 196px;
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
