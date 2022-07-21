import React, { useState, useEffect } from "react";
import { useController } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSuggestResultSelector } from '../redux/selectors';
import { getAddress, setSuggestResultAction } from '../redux/actions';

export const AddressInput = ({ error, control }) => {
  const { field } = useController({ name: 'address', rules: { required: 'Address is required' }, control, defaultValue: ''});
  const dispatch = useDispatch();
  let suggestions = useSelector(getSuggestResultSelector);
  const [selectedAdress, setSelectedAdress] = useState('');

  console.log(field.value);
  // console.log(suggestions);
  // console.log(selectedAdress);

  useEffect(() => {
    if (selectedAdress !== field.value) {
      dispatch(getAddress(field.value))
    }
  }, [dispatch, selectedAdress, field.value]);

  return (
    <div>
      <label htmlFor="address">Address</label>
      <input
        id="address"
        name="address"
        type="text"
        value={field.value}
        onChange={(event) => {
          field.onChange(event.target.value)
        }}
        // onChange={(event) => {
        //   setValue(event.target.value)
        // }}
        placeholder="Address"
        {...field}
      />
      {error && <p>{error.message}</p>}
      {suggestions && suggestions.map(item => (
        <div 
          key={item.id}
            onClick={() => {
            field.onChange(item.title);
            setSelectedAdress(item.title);
            dispatch(setSuggestResultAction([]));
          }}
        >
          {item.title}
        </div>
      ))}
  </div>
  )
};