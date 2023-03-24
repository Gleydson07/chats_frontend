import React from 'react';
import ReactPortal from '../ReactPortal';

import {
  Button,
  Container, Description, Footer, OverLayer, Title
} from './styles';

export type ButtonTheme = 'confirm' | 'danger' | 'default';

interface ModalProps {
  isOpen: boolean,
  title: string,
  description: string,
  cancelDisabled?: boolean,
  confirmDisabled?: boolean,
  cancelLabel?: string,
  confirmLabel?: string,
  cancelTheme?: ButtonTheme,
  confirmTheme?: ButtonTheme,
  onConfirm: () => void;
  onClose: () => void;
}

export const Modal:React.FC<ModalProps> = ({
  isOpen,
  title,
  description,
  cancelDisabled,
  confirmDisabled,
  cancelLabel = 'Cancelar',
  confirmLabel = 'Confirmar',
  cancelTheme = 'default',
  confirmTheme = 'confirm',
  onConfirm,
  onClose,
}) => {
  if (!isOpen) return <></>;

  return (
    <ReactPortal portalId='chat-box'>
      <OverLayer>
        <Container>
          <Title>{title}</Title>
          <Description>{description}</Description>

          <Footer>
            <Button
              disabled={cancelDisabled}
              theme={cancelTheme}
              onClick={onClose}
            >
              {cancelLabel}
            </Button>

            <Button
              disabled={confirmDisabled}
              theme={confirmTheme}
              onClick={onConfirm}
            >
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </OverLayer>
    </ReactPortal>
  )
}
