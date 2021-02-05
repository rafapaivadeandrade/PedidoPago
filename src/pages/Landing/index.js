import React from 'react';
import Header from '../../components/Header';
import {
  CategoryListContainer,
  CategoryActionsContainer,
  CategoryListTitle,
  SearchCategoryInput,
  InputDiv,
  NewCategoryButton,
} from './styles';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Badge } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

function Landing() {
  const history = useHistory();

  function handleNewCategoryPage() {
    history.push('/');
  }
  return (
    <>
      <Header landing={true}></Header>
      <CategoryListContainer>
        <CategoryActionsContainer>
          <CategoryListTitle>Lista de Categorias</CategoryListTitle>
          <InputDiv>
            <SearchCategoryInput placeholder="buscar categoria" />
            <IconButton disabled>
              <Badge>
                <CustomSearchIcon />
              </Badge>
            </IconButton>
          </InputDiv>

          <NewCategoryButton onClick={handleNewCategoryPage}>
            criar nova categoria
          </NewCategoryButton>
        </CategoryActionsContainer>
      </CategoryListContainer>
    </>
  );
}

function CustomSearchIcon() {
  return <SearchIcon style={{ fontSize: 30 }} />;
}
export default Landing;
{
  /* <img
src="data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7"
alt="star"
width="16"
height="16"
/> */
}
