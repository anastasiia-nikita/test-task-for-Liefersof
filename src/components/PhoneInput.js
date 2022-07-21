import React from "react";

export const PhoneInput = ({ register, error }) => (
  <div>
    <label htmlFor="phone">Phone</label>
    <input
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
        // validate: (value) => {
        //   // return /^\d+$/.test(value) || "must include lower, upper, number, and special chars"
        //   return value.match(/\D+/g, '') || "must include lower, upper, number, and special chars"
        // },
      })}
    />

    {error && <p>{error.message}</p>}
  </div>
);