import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

const Label = styled.label`
  margin-right: ${({ theme }) => theme.margin.label}px;
  font-size: ${({ theme }) => theme.fontSizes.label}px;
  font-weight: ${({ theme }) => theme.fontWeight.label};
  // color: ${({ theme }) => theme.colors.label};
`

export const SexSelect = ({ register, error }) => (
  <Container>
    <Label htmlFor="sex">Sex</Label>
    <select id="sex" 
      {...register("gender", { required: 'Gender is required' })}
    >
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>

    {error && <p>{error.message}</p>}
  </Container>
);