import React from "react";
import { Input, Label, ErrorMessage } from '../../styles/components';

export const NameInput = ({ register, error }) => (
  <>
    <Label htmlFor="firstName">First name</Label>
    <Input
      error={error}
      id="firstName"
      name="firstName"
      type="text"
      placeholder="First name"
      {...register("firstName", { required: 'First name is required' })}
    />

    {error && <ErrorMessage>{error.message}</ErrorMessage>}
  </>
);