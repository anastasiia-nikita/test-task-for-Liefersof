import React, { useEffect } from "react";
import { Form } from '../styles/components';
import { useForm } from "react-hook-form";
import { setAddUserAction } from '../../src/redux/actions';
import { NameInput } from "./NameInput"; 
import { LastNameInput } from "./LastNameInput"; 
import { PhoneInput } from "./PhoneInput";
import { EmailInput } from "./EmailInput";
import { SexSelect } from "./SexSelect";
import { AddressInput } from "./AddressInput";
import { AgreementCheckbox } from "./AgreementCheckbox";
import { useDispatch } from "react-redux";

export const FormRegister = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, control, formState: { errors }, formState: { isSubmitSuccessful } } 
  = useForm({ defaultValues: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    gender: '',
    address: '',
  }});

  const onSumbit = (data) => {
    dispatch(setAddUserAction(data));
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset])

  return (
  <Form onSubmit={handleSubmit(onSumbit)}>
    <NameInput register={register} error={errors.firstName} />
    <LastNameInput register={register} error={errors.lastName} />
    <PhoneInput register={register} error={errors.phone} />
    <EmailInput register={register} error={errors.email} />
    <SexSelect register={register} error={errors.gender} />
    <AddressInput error={errors.address} control={control} />
    <AgreementCheckbox register={register} error={errors.agreement} />

    <button type="submit">Register</button>
  </Form>
  );
};