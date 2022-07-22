import React from "react";
import styled from 'styled-components';
import { Label } from '../styles/components';

const Input = styled.input`
  position:relative; 
`

export const AgreementCheckbox = ({ register, error }) => (
  <>
    <Input
      id="agreement"
      name="agreement"
      type="checkbox"
      {...register("agreement", { required: 'Agreement is required' })}
    />
    <Label htmlFor="agreement">I agree with terms and conditions</Label>

    {error && <p>{error.message}</p>}
  </>
);