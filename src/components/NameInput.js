import React from "react";

export const NameInput = ({ register, error }) => (
  <div>
    <label htmlFor="firstName">First name</label>
    <input
      id="firstName"
      name="firstName"
      type="text"
      placeholder="First name"
      {...register("firstName", { required: 'First name is required' })}
    />

    {error && <p>{error.message}</p>}
  </div>
);