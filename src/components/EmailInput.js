import React from "react";

export const EmailInput = ({ register, error }) => (
  <div>
    <label htmlFor="email">Email</label>
    <input
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