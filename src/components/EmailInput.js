import React from "react";
import { Input, Label, ErrorMessage } from '../styles/components';

export const EmailInput = ({ register, error }) => (
  <>
    <Label htmlFor="email">Email</Label>
    <Input
      error={error}
      id="email"
      name="email"
      type="text"
      placeholder="Email"
      {...register("email", { 
        required: 'Email is required', 
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email',
        },
      })}
    />

    {error && <ErrorMessage>{error.message}</ErrorMessage>}
  </>
);
