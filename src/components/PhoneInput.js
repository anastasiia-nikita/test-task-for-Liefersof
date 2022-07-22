import React from "react";
// import styled from "styled-components";
import { Input, Label } from '../styles/components';

// const Label = styled.label`
//   display: ${({ theme }) => theme.display.label};
//   margin-bottom: ${({ theme }) => theme.margin.label}px;
//   font-size: ${({ theme }) => theme.fontSizes.label}px;
//   font-weight: ${({ theme }) => theme.fontWeight.label};
//   // color: ${({ theme }) => theme.colors.label};
// `

// const Input = styled.input`
//   border: 1px solid #154360;
//   border-radius: 8px;
//   // width: ${({ theme }) => theme.sizes.input.width}%;
//   height: ${({ theme }) => theme.sizes.input.height}px;
//   margin-bottom: ${({ theme }) => theme.margin.input}px;
//   font-size: ${({ theme }) => theme.fontSizes.input}px;
//   padding: 0 ${({ theme }) => theme.padding.input}px;
// `

export const PhoneInput = ({ register, error }) => (
  <div>
    <Label htmlFor="phone">Phone</Label>
    <Input
      id="phone"
      name="phone"
      type="tel"
      placeholder="Phone number"
      {...register("phone", { 
        required: 'Phone number is required', 
        pattern: {
          value: /^\d+$/,
          message: 'Phone must include only numbers',
        },
        // validate: (value) => {
        //   // return /^\d+$/.test(value) || "must include lower, upper, number, and special chars"
        //   return value.match(/\D+/g, '') || "must include lower, upper, number, and special chars"
        // },
      })}
    />

    {error && <p>{error.message}</p>}
  </div>
);