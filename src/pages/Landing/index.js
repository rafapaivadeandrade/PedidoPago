import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import Header from '../../components/Header';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Badge } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
  Container,
  CategoryListContainer,
  CategoryActionsContainer,
  CategoryListTitle,
  SearchCategoryInput,
  InputDiv,
  NewCategoryButton,
} from './styles';

function Landing() {
  const history = useHistory();

  function handleNewCategoryPage() {
    history.push('/newCategory');
  }
  function renderRun() {
    return (
      <>
        <Table.Row style={{ backgroundColor: '#e5e5e5' }}>
          <Table.Cell
            colspan="3"
            style={{ paddingLeft: '20px', height: '50px' }}
          >
            node_modules
          </Table.Cell>
          <Table.Cell style={{ paddingLeft: '20px', height: '50px' }}>
            Initial commit
          </Table.Cell>
          <Table.Cell
            collapsing
            textAlign="right"
            style={{ paddingLeft: '20px', height: '50px' }}
          >
            10 hours ago
            <p>icon</p>
            <p>icon</p>
          </Table.Cell>
        </Table.Row>
        <Table.Row style={{ backgroundColor: '#FFFFFF' }}>
          <Table.Cell
            colspan="3"
            style={{ paddingLeft: '20px', height: '50px' }}
          >
            node_modules
          </Table.Cell>
          <Table.Cell style={{ paddingLeft: '20px', height: '50px' }}>
            Initial commit
          </Table.Cell>
          <Table.Cell
            collapsing
            textAlign="right"
            style={{ paddingLeft: '20px', height: '50px' }}
          >
            10 hours ago
          </Table.Cell>
        </Table.Row>
      </>
    );
  }
  return (
    <Container>
      <Header landing={true}></Header>
      <>
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
      </>
      <Table
        celled
        style={{
          width: '90%',
          backgroundColor: '#FFFFFF',
          marginLeft: '90px',
          border: '1px solid #e0dde5',
          borderRadius: '10px',
          marginTop: '30px',
        }}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              style={{
                borderRight: '1px solid #e0dde5',
                borderBottom: '1px solid #e0dde5',
                textAlign: 'left',
                paddingLeft: '20px',
                height: '50px',
              }}
              colSpan="3"
            >
              Nome da Categoria
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{
                borderRight: '1px solid #e0dde5',
                borderBottom: '1px solid #e0dde5',
                textAlign: 'left',
                paddingLeft: '20px',
                height: '50px',
              }}
            >
              Criação
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{
                borderBottom: '1px solid #e0dde5',
                textAlign: 'left',
                paddingLeft: '20px',
                height: '50px',
              }}
            >
              Ações
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{renderRun()}</Table.Body>
      </Table>
    </Container>
  );
}

function CustomSearchIcon() {
  return <SearchIcon style={{ fontSize: 30 }} />;
}
export default Landing;
