import React from 'react';
import {FormModalWrapper} from "./FormModal.style";
import {useForm} from "react-hook-form";

const FormModal = () => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <FormModalWrapper>
      <div className="left">
        <h3>Заявка на получение информации</h3>
      </div>
    </FormModalWrapper>
  );
};

export default FormModal;