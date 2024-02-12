import React, { ReactNode } from 'react';
import { Modal } from 'react-native';
import { ModalContainer, Overlay } from './styled';


interface ModalProps{
  open: boolean;
  handleClose: () => void;
  children: ReactNode
}

export function ModalWithOverlay ({
  open,
  handleClose,
  children
}: ModalProps){
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={open}
        onRequestClose={handleClose}
      >
        <ModalContainer>
          {children}
        </ModalContainer>
      </Modal>
      {open && <Overlay onPress={handleClose} />}
    </>
  );
};