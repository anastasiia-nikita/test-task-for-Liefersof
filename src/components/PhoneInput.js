import React from "react";
import { Input, Label, ErrorMessage } from '../styles/components';

export const PhoneInput = ({ register, error }) => (
  <>
    <Label htmlFor="phone">Phone</Label>
    <Input
      error={error}
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
      })}
    />

    {error && <ErrorMessage>{error.message}</ErrorMessage>}
  </>
);