import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import Header from '../../components/Header';
import ModalRemove from '../../components/ModalRemove';
import ModalEdit from '../../components/ModalEdit';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Badge } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { useUser } from '../../hooks/ContextApi';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import {
  Container,
  CategoryActionsContainer,
  CategoryListTitle,
  SearchCategoryInput,
  InputDiv,
  NewCategoryButton,
  ImageLogo,
} from './styles';

function Landing() {
  const history = useHistory();
  const { getCategory, category } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isEyeVisible, setEyeVisible] = useState(!category.visible);

  useEffect(() => {
    getCategory();
  }, []);

  function handleNewCategoryPage() {
    history.push('/newCategory');
  }
  function handleDelete() {
    setIsOpen(true);
  }
  function handleEdit() {
    setIsOpenEdit(true);
  }
  const renderCategory = (category) => {
    console.log(category.visible);
    if (category.length === 0) {
      return null;
    } else {
      return (
        <>
          <Table.Row style={{ backgroundColor: '#e5e5e5' }}>
            <Table.Cell
              style={{
                paddingLeft: '20px',
                height: '50px',
              }}
            >
              <ImageLogo src={category.logo} />
              {category.name}
            </Table.Cell>
            <Table.Cell
              style={{ paddingLeft: '20px', height: '50px', width: '200px' }}
            >
              {moment(category.created_at).format('DD-MM-YYYY')}
            </Table.Cell>
            <Table.Cell
              collapsing
              textAlign="right"
              style={{ paddingLeft: '20px', height: '50px', width: '250px' }}
            >
              <IconButton onClick={() => setEyeVisible(!isEyeVisible)}>
                <Badge>
                  {isEyeVisible ? (
                    <VisibilityIcon style={{ fontSize: 30, marginRight: 30 }} />
                  ) : (
                    <VisibilityOffIcon
                      style={{ fontSize: 30, marginRight: 30 }}
                    />
                  )}
                </Badge>
              </IconButton>
              <IconButton onClick={handleEdit}>
                <Badge>
                  <EditIcon style={{ fontSize: 30, marginRight: 30 }} />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge>
                  <ClearIcon style={{ fontSize: 30 }} onClick={handleDelete} />
                </Badge>
              </IconButton>
            </Table.Cell>
          </Table.Row>
        </>
      );
    }
  };
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
        <ModalRemove
          open={isOpen}
          onClose={() => setIsOpen(false)}
          categoryName={category.name}
          categoryId={category.id}
        />
        <ModalEdit
          open={isOpenEdit}
          onClose={() => setIsOpenEdit(false)}
          categoryId={category.id}
          categoryCreated={moment(category.created_at).format('YYYY-MM-DD')}
          name={category.name}
          description={category.description}
          new_logo_image={category.logo}
          visible={isEyeVisible}
        />
        <Table.Body>{renderCategory(category)}</Table.Body>
      </Table>
    </Container>
  );
}

function CustomSearchIcon() {
  return <SearchIcon style={{ fontSize: 30 }} />;
}
export default Landing;
