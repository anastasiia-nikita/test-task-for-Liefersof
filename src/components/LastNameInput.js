import React from "react";
import { Input, Label } from '../styles/components';

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