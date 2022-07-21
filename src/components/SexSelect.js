import React from "react";

export const SexSelect = ({ register, error }) => (
  <div>
    <label htmlFor="sex">Sex</label>
    <select id="sex" 
      {...register("gender", { required: 'Gender is required' })}
    >
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>

    {error && <p>{error.message}</p>}
  </div>
);