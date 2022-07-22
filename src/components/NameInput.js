import React from "react";
import { Input, Label } from '../styles/components';

export const NameInput = ({ register, error }) => (
  <>
    <Label htmlFor="firstName">First name</Label>
    <Input
      id="firstName"
      name="firstName"
      type="text"
      placeholder="First name"
      {...register("firstName", { required: 'First name is required' })}
    />

    {error && <p>{error.message}</p>}
  </>
);