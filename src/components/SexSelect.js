import React from "react";
import styled from "styled-components";
import { Label, ErrorMessage } from '../styles/components';

export const SexSelect = ({ register, error }) => (
  <>
    <Label htmlFor="gender">Gender</Label>
    <Select error={error} id="gender" 
      {...register("gender", { required: 'Gender is required' })}
    >
      <Option value="">Select Gender</Option>
      <Option value="male">Male</Option>
      <Option value="female">Female</Option>
    </Select>

    {error && <ErrorMessage>{error.message}</ErrorMessage>}
  </>
);

const Select = styled.select`
  width: 100%;
  height: 30px;
  border-radius: 8px;
  border-color: ${({ error }) => error ? 'red' : '#154360'};
  font-size: 16px;
  padding: 0 15px;
  margin-bottom: 15px;
`

const Option = styled.option`
  font-size: 14px;
`