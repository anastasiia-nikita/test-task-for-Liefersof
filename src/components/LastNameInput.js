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

export const LastNameInput = ({ register, error }) => (
  <div>
    <Label htmlFor="lastName">Last name</Label>
    <Input
      id="lastName"
      name="lastName"
      type="text"
      placeholder="Last name"
      {...register("lastName", { required: 'Last name is required' })}
    />

    {error && <p>{error.message}</p>}
  </div>
);