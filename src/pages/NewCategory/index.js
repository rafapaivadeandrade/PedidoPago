import React, { useState } from 'react';
import Header from '../../components/Header';
import { Table, Button, Segment, Label } from 'semantic-ui-react';
import DropZone from '../../components/DropZone';
import {
  CategoryActionsContainer,
  CategoryListTitle,
  CategoryDataContainer,
  CategoryDataTitle,
  CategoryData,
  CategoryInputContainer,
  StyledTextField,
  FirstCaractersLabel,
  SecondCaractersLabel,
  NewCategoryButton,
} from './styles';
import { useUser } from '../../hooks/ContextApi';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

function NewCategory() {
  const history = useHistory();
  const { createCategory } = useUser();
  const [selectFile, setSelectFile] = useState();
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const reader = new FileReader();
  async function handleNewCategoryPage() {
    await toBase64(selectFile);
    let today = new Date();
    // const d2 = d.clone().utc().format('YYYY/MM/DD h:mm:ss');
    console.log(today.toLocaleDateString('pt-BR'));
    try {
      createCategory({
        logo: reader.result,
        name: categoryName,
        description,
        from: today,
      });
      alert('Category created');
      // history.push('/landing');
    } catch (err) {
      console.log(err);
      alert('Fail to create new category, try again');
    }
  }
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => reject(error);
    });

  return (
    <>
      <Header landing={true} newCategory={true}></Header>
      <CategoryActionsContainer>
        <CategoryListTitle>Emagrecimento</CategoryListTitle>
      </CategoryActionsContainer>
      <CategoryDataContainer>
        <CategoryDataTitle>Dados da Categoria</CategoryDataTitle>
        <CategoryData>
          <DropZone onFileUploaded={setSelectFile} />

          <CategoryInputContainer>
            <StyledTextField
              label="Nome da Categoria"
              variant="outlined"
              value={categoryName}
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
            />
            <FirstCaractersLabel>13 / 20 carateres</FirstCaractersLabel>
            <StyledTextField
              style={{ marginTop: '30px' }}
              label="Descrição Curta"
              variant="outlined"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <SecondCaractersLabel>11 / 40 caracteres</SecondCaractersLabel>
            <NewCategoryButton onClick={handleNewCategoryPage}>
              criar categoria
            </NewCategoryButton>
          </CategoryInputContainer>
        </CategoryData>
      </CategoryDataContainer>
    </>
  );
}

export default NewCategory;
