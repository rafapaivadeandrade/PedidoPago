import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useUser } from '../../hooks/ContextApi';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import {
  ModalStyles,
  OverlayStyles,
  SubNavLanding,
  SubTextLanding,
  SelectInput,
  CheckBoxInput,
  EcommerceDiv,
  EcommerceLabel,
  CancelButton,
  SaveButton,
  ButtonsWrapper,
} from './styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginLeft: theme.spacing(3),
    borderRadius: '100px',
  },
}));
function ModalEdit({
  open,
  onClose,
  categoryCreated,
  ecommerceStatus,
  callcenterStatus,
  categoryId,
  name,
  description,
  new_logo_image,
  visible,
}) {
  const { editCategory, category } = useUser();
  const classes = useStyles();
  const [ecommerceVisible, setEcommerceVisible] = useState(false);
  const [callcenterIsVisible, setCallCenterVisible] = useState(false);
  const [ecommerceDate, setEcommerceDate] = useState();
  const [callcenterDate, setCallCenterDate] = useState();

  function handlerEditCategory() {
    console.log('edit');
    editCategory(
      categoryId,
      ecommerceVisible,
      callcenterIsVisible,
      ecommerceDate,
      callcenterDate,
      name,
      description,
      new_logo_image,
      visible
    );
    onClose();
  }

  function handleEcommerceVisible() {
    setEcommerceVisible(!ecommerceVisible);
  }
  function handleCallCenterIsVisible() {
    setCallCenterVisible(!callcenterIsVisible);
  }

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <OverlayStyles onClick={console.log('clicked')} />
      <ModalStyles>
        <SubNavLanding>
          <SubTextLanding>Alternar visibilidade</SubTextLanding>
          <ClearIcon onClick={onClose} />
        </SubNavLanding>
        <EcommerceDiv>
          <CheckBoxInput
            color="primary"
            checked={ecommerceVisible}
            onChange={handleEcommerceVisible}
          />
          <EcommerceLabel>
            Visibilidade em E-commerce a partir de:
          </EcommerceLabel>
        </EcommerceDiv>
        <SelectInput
          label="Data"
          type="date"
          defaultValue={categoryCreated}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          className={classes.margin}
          onChange={(date) => setEcommerceDate(date)}
        ></SelectInput>
        <EcommerceDiv>
          <CheckBoxInput
            color="primary"
            checked={callcenterIsVisible}
            onChange={handleCallCenterIsVisible}
          />
          <EcommerceLabel>
            Visibilidade em Call center a partir de:
          </EcommerceLabel>
        </EcommerceDiv>
        <SelectInput
          label="Data"
          type="date"
          defaultValue={categoryCreated}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          className={classes.margin}
          onChange={(date) => setCallCenterDate(date)}
        ></SelectInput>
        <ButtonsWrapper>
          <CancelButton onClick={onClose}>cancelar</CancelButton>
          <SaveButton onClick={handlerEditCategory}>salvar</SaveButton>
        </ButtonsWrapper>
      </ModalStyles>
    </>,
    document.getElementById('portal')
  );
}

export default ModalEdit;
