import React, { useEffect } from "react";
import styled from "styled-components";
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
    <Title1>Sign up</Title1>

      <NameInput register={register} error={errors.firstName} />
      <LastNameInput register={register} error={errors.lastName} />
      <PhoneInput register={register} error={errors.phone} />
      <EmailInput register={register} error={errors.email} />
      <SexSelect register={register} error={errors.gender} />
      <AddressInput control={control} error={errors.address} />
      <AgreementCheckbox register={register} error={errors.agreement} />

      <Button type="submit">Register</Button>
  </Form>
  );
};

  const Form = styled.form`
    margin: 0px;
  `
  const Button = styled.button`
    display: block;
    background-color: #85C1E9;
    border: none;
    padding: 20px 20px;
    line-height: 0px;
    height: 30px;
    border-radius: 8px;
    margin: 0 auto;
    font-size: 16px;
    font-weight: bold;
  `

  const Title1 = styled.h1`
    text-align: center;
  `