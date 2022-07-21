import React from "react";

export const AgreementCheckbox = ({ register, error }) => (
  <div>
    <input
      id="agreement"
      name="agreement"
      type="checkbox"
      {...register("agreement", { required: 'Agreement is required' })}
    />
    <label htmlFor="agreement">I agree with terms and conditions</label>

    {error && <p>{error.message}</p>}
  </div>
);