import React from "react";
import { Input, Label, ErrorMessage } from '../styles/components';

export const LastNameInput = ({ register, error }) => (
  <>
    <Label htmlFor="lastName">Last name</Label>
    <Input
      error={error}
      id="lastName"
      name="lastName"
      type="text"
      placeholder="Last name"
      {...register("lastName", { required: 'Last name is required' })}
    />

    {error && <ErrorMessage>{error.message}</ErrorMessage>}
  </>
);