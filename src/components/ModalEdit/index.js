import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ClearIcon from '@material-ui/icons/Clear';
import { useUser } from '../../hooks/ContextApi';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import moment from 'moment';

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
}) {
  const classes = useStyles();
  const [ecommerceVisible, setEcommerceVisible] = useState(ecommerceStatus);
  const [callcenterIsVisible, setCallCenterVisible] = useState(
    callcenterStatus
  );
  const {} = useUser();

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
          select
          label="Data"
          variant="outlined"
          className={classes.margin}
        >
          {' '}
          <MenuItem>{moment(categoryCreated).format('DD-MM-YYYY')}</MenuItem>
          <MenuItem>{moment(categoryCreated).format('DD-MM-YYYY')}</MenuItem>
          <MenuItem>{moment(categoryCreated).format('DD-MM-YYYY')}</MenuItem>
        </SelectInput>
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
          select
          label="Data"
          variant="outlined"
          className={classes.margin}
        >
          {' '}
          <MenuItem>
            <em>None</em>
          </MenuItem>
        </SelectInput>
        <ButtonsWrapper>
          <CancelButton onClick={onClose}>cancelar</CancelButton>
          <SaveButton>salvar</SaveButton>
        </ButtonsWrapper>
      </ModalStyles>
    </>,
    document.getElementById('portal')
  );
}

export default ModalEdit;
