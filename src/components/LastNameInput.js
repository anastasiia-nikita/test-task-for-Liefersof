import React from "react";

export const LastNameInput = ({ register, error }) => (
  <div>
    <label htmlFor="lastName">Last name</label>
    <input
      id="lastName"
      name="lastName"
      type="text"
      placeholder="Last name"
      {...register("lastName", { required: 'Last name is required' })}
    />

    {error && <p>{error.message}</p>}
  </div>
);