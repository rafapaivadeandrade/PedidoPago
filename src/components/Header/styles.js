import styled, { css } from 'styled-components';

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid #e0dde5;
  height: 84px;
`;
export const NavLanding = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #e0dde5;
  height: 64px;
  background: linear-gradient(90.17deg, #034afd 0%, #22e0a1 100%);
`;

export const LogoText = styled.span`
  align-self: center;
  font-weight: bold;
  font-size: 20px;
  color: #2f3138;
`;
export const LogoTextLanding = styled.span`
  margin-left: 100px;
  align-self: center;
  font-weight: bold;
  font-size: 25px;
  color: #ffffff;
`;
export const SubLogoTextLanding = styled.span`
  margin-left: 10px;
  align-self: center;
  font-weight: bold;
  font-size: 16px;
  color: #424242;

  ${(props) =>
    !props.secondSubLogo &&
    css`
      color: #ffffff;
    `}
`;
export const Period = styled.span`
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
  color: #424242;

  ${(props) =>
    !props.secondPeriod &&
    css`
      color: #ffffff;
      margin-top: 10px;
    `}
`;
export const SubNavLanding = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #e0dde5;
  height: 40px;
  background: white;
`;
export const SubTextLanding = styled.span`
  margin-left: 100px;
  align-self: center;
  font-weight: bold;
  font-size: 20px;
  color: #424242;
`;
export const SubPeriod = styled.span``;
