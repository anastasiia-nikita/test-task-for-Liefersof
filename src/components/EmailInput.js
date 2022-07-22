import React from "react";
import { Input, Label } from '../styles/components';

export const EmailInput = ({ register, error }) => (
  <div>
    <Label htmlFor="email">Email</Label>
    <Input
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

    {error && <p>{error.message}</p>}
  </div>
);