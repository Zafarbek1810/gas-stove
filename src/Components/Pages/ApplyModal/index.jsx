import React from 'react';
import {useContextSelector} from "use-context-selector";
import {ModalContext} from "../../../Context/ModalContext/Context";
import {ModalWrapper} from "./ApplyModal.style";
import {Modal} from "antd";

const MyModal = ({ children }) => {
  const [isModalVisible, setIsModalVisible]=useContextSelector(ModalContext, (state)=>state)

  const showModal = () => {
    document.body.style.overflow = 'hidden'
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <ModalWrapper>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={900}>
        {children}
      </Modal>
    </ModalWrapper>
  );
};

export default MyModal;