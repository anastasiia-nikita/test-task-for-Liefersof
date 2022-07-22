import React from "react";
import styled from 'styled-components';
import { Label, ErrorMessage } from '../styles/components';

export const AgreementCheckbox = ({ register, error }) => (
  <>
    <InputCheckbox
      id="agreement"
      name="agreement"
      type="checkbox"
      {...register("agreement", { required: 'Agreement is required' })}
    />
    <LabelCheckbox htmlFor="agreement">I agree with terms and conditions</LabelCheckbox>

    {error && <ErrorCheckbox>{error.message}</ErrorCheckbox>}
  </>
);

const LabelCheckbox = styled(Label)`
  display: inline-block;
  font-size: 12px;
  margin-bottom: 20px;
`
const InputCheckbox = styled.input`
  margin-right: 10px;
`
const ErrorCheckbox = styled(ErrorMessage)`
  padding: 0 25px;
`