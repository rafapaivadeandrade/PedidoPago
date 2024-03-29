import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
`;

export const CategoryListContainer = styled.div``;
export const CategoryActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

export const CategoryListTitle = styled.div`
  margin-left: 100px;
  margin-top: 50px;
  font-weight: bold;
  font-size: 25px;
  color: #a3a3a3;
`;
export const SearchCategoryInput = styled.input`
  background-color: transparent;
  border: 0px solid #a3a3a3;
  border-radius: 90px;
  outline: none;
  height: 60px;
  width: 600px;
  text-indent: 20px;
`;

export const InputDiv = styled.div`
  margin-top: 40px;
  height: 60px;
  width: 600px;
  border: 2px solid #a3a3a3;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 90px;

  svg {
    color: #00e095;
  }
`;
export const NewCategoryButton = styled.button`
  margin-top: 40px;
  border-radius: 90px;
  height: 60px;
  width: 350px;
  background-color: #22e0a1;
  color: #fff;
  margin-right: 120px;
  margin-left: -600px;
  border: 0px solid transparent;
  outline: none;
  cursor: pointer;
  transition: background 1s;

  &:hover {
    background: linear-gradient(90.17deg, #034afd 0%, #22e0a1 100%);
    opacity: 0.8;
  }
`;
export const ImageLogo = styled.img`
  height: 32px;
  width: 32px;
  left: 8px;
  top: 8px;
  border-radius: 0px;
  margin-right: 20px;
`;
