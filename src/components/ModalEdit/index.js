import React from 'react';
import ReactDOM from 'react-dom';
import ClearIcon from '@material-ui/icons/Clear';
import { useUser } from '../../hooks/ContextApi';
import {
  ModalStyles,
  OverlayStyles,
  SubNavLanding,
  SubTextLanding,
  SelectInput,
  CheckBoxInput,
  EcommerceDiv,
  EcommerceLabel,
} from './styles';

function ModalEdit({ open, onClose }) {
  const {} = useUser();

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
          <CheckBoxInput color="primary" />
          <EcommerceLabel>
            Visibilidade em E-commerce a partir de:
          </EcommerceLabel>
        </EcommerceDiv>
        <SelectInput select label="Data" variant="outlined" />
        <EcommerceDiv>
          <CheckBoxInput color="primary" />
          <EcommerceLabel>
            Visibilidade em Call center a partir de:
          </EcommerceLabel>
        </EcommerceDiv>
        <SelectInput select label="Data" variant="outlined" />
      </ModalStyles>
    </>,
    document.getElementById('portal')
  );
}

export default ModalEdit;
