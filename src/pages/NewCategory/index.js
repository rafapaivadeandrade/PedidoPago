import React, { useState } from 'react';
import Header from '../../components/Header';
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

function NewCategory() {
  const history = useHistory();
  const { createCategory } = useUser();
  const [selectFile, setSelectFile] = useState();
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const reader = new FileReader();
  let nameCountArray = [];
  let descriptionCountArray = [];
  let [nameCount, setNameCount] = useState(0);
  let [descriptionCount, setDescriptionCount] = useState(0);
  async function handleNewCategoryPage() {
    await toBase64(selectFile);
    let today = new Date();
    console.log(today.toLocaleDateString('pt-BR'));
    try {
      createCategory({
        logo: reader.result,
        name: categoryName,
        description,
        from: today,
      });
      alert('Category created');
      history.push('/landing');
    } catch (err) {
      console.log(err);
      alert('Fail to create new category, try again');
    }
  }

  function changeCountName(value) {
    setCategoryName(value);
    nameCountArray = value.split('');
    for (let i = 0; i < nameCountArray.length; i++) {
      setNameCount(nameCount + 1);
    }
  }
  function changeCountDescription(value) {
    setDescription(value);
    descriptionCountArray = value.split('');
    for (let i = 0; i < descriptionCountArray.length; i++) {
      setDescriptionCount(descriptionCount + 1);
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
                changeCountName(e.target.value);
              }}
              inputProps={{ maxLength: 30 }}
            />
            <FirstCaractersLabel>
              {nameCount} / 30 caracteres
            </FirstCaractersLabel>
            <StyledTextField
              style={{ marginTop: '30px' }}
              label="Descrição Curta"
              variant="outlined"
              value={description}
              onChange={(e) => {
                changeCountDescription(e.target.value);
              }}
              inputProps={{ maxLength: 40 }}
            />
            <SecondCaractersLabel>
              {descriptionCount} / 40 caracteres
            </SecondCaractersLabel>
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
