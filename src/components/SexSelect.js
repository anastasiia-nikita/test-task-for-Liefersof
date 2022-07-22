import React from "react";
import styled from "styled-components";
import { Label, Select } from '../styles/components';

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 15px;
// `

// const Label = styled.label`
//   margin-right: ${({ theme }) => theme.margin.label}px;
//   font-size: ${({ theme }) => theme.fontSizes.label}px;
//   font-weight: ${({ theme }) => theme.fontWeight.label};
//   // color: ${({ theme }) => theme.colors.label};
// `

const Option = styled.option`
  font-size: 14px;
`

export const SexSelect = ({ register, error }) => (
  <>
    <Label htmlFor="sex">Gender</Label>
    <Select id="gender" 
      {...register("gender", { required: 'Gender is required' })}
    >
      <Option value="">Select Gender</Option>
      <Option value="male">Male</Option>
      <Option value="female">Female</Option>
    </Select>

    {error && <p>{error.message}</p>}
  </>
);