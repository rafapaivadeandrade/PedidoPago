import React from 'react';
import ReactDOM from 'react-dom';
import ClearIcon from '@material-ui/icons/Clear';
import { useUser } from '../../hooks/ContextApi';
import {
  ModalStyles,
  OverlayStyles,
  SubNavLanding,
  SubTextLanding,
  RemoveButton,
  KeepButton,
  ButtonsWrapper,
  Text,
} from './styles';

function ModalRemove({ open, onClose, categoryName, categoryId }) {
  const { deleteCategory } = useUser();
  function handleCloseDelete() {
    onClose();
    deleteCategory(categoryId);
  }
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <OverlayStyles onClick={console.log('clicked')} />
      <ModalStyles>
        <SubNavLanding>
          <SubTextLanding>Remover Categoria</SubTextLanding>
          <ClearIcon onClick={onClose} />
        </SubNavLanding>
        <Text>
          Tem certeza que deseja remover a categoria{' '}
          <strong>{categoryName}? </strong> Esta ação não poderá ser desfeita
        </Text>
        <ButtonsWrapper>
          <RemoveButton onClick={handleCloseDelete}>
            remover Permanente
          </RemoveButton>
          <KeepButton onClick={onClose}>manter categoria</KeepButton>
        </ButtonsWrapper>
      </ModalStyles>
    </>,
    document.getElementById('portal')
  );
}

export default ModalRemove;
