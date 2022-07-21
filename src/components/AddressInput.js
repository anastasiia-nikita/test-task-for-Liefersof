import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSuggestResultSelector } from '../redux/selectors';
import { getAddress, setSuggestResultAction } from '../redux/actions';

const Label = styled.label`
  display: ${({ theme }) => theme.display.label};
  margin-bottom: ${({ theme }) => theme.margin.label}px;
  font-size: ${({ theme }) => theme.fontSizes.label}px;
  font-weight: ${({ theme }) => theme.fontWeight.label};
  // color: ${({ theme }) => theme.colors.label};
`

const Input = styled.input`
  border: 1px solid #154360;
  border-radius: 8px;
  width: ${({ theme }) => theme.sizes.input.width}%;
  height: ${({ theme }) => theme.sizes.input.height}px;
  margin-bottom: ${({ theme }) => theme.margin.input}px;
  font-size: ${({ theme }) => theme.fontSizes.input}px;
  padding: 0 ${({ theme }) => theme.padding.input}px;
`

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
      <Label htmlFor="address">Address</Label>
      <Input
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