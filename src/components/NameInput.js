import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: ${({ theme }) => theme.display.label};
  margin-bottom: ${({ theme }) => theme.margin.label}px;
  font-size: ${({ theme }) => theme.fontSizes.label}px;
  font-weight: ${({ theme }) => theme.fontWeight.label};
  // color: ${({ theme }) => theme.colors.label};
`

const Input = styled.input`
  border: 1px solid #154360;
  border-radius: 8px;
  width: ${({ theme }) => theme.sizes.input.width}%;
  height: ${({ theme }) => theme.sizes.input.height}px;
  margin-bottom: ${({ theme }) => theme.margin.input}px;
  font-size: ${({ theme }) => theme.fontSizes.input}px;
  padding: 0 ${({ theme }) => theme.padding.input}px;
`

export const NameInput = ({ register, error }) => (
  <div>
    <Label htmlFor="firstName">First name</Label>
    <Input
      id="firstName"
      name="firstName"
      type="text"
      placeholder="First name"
      {...register("firstName", { required: 'First name is required' })}
    />

    {error && <p>{error.message}</p>}
  </div>
);