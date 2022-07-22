import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Input, Label } from '../styles/components';
import { useController } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSuggestResultSelector } from '../redux/selectors';
import { getAddress, setSuggestResultAction } from '../redux/actions';

const AdddressSuggest = styled.div`
  border-bottom: 1px solid black;
  width: 250px;
  padding: 0 ${({ theme }) => theme.padding.input}px;
  font-size: 12px;
  margin-bottom: 15px;
  position:relative; 
  z-index:1;
`

export const AddressInput = ({ error, control }) => {
  const { field } = useController({ name: 'address', rules: { required: 'Address is required' }, control, defaultValue: ''});
  const dispatch = useDispatch();
  let suggestions = useSelector(getSuggestResultSelector);
  const [selectedAdress, setSelectedAdress] = useState('');

  useEffect(() => {
    if (selectedAdress !== field.value) {
      dispatch(getAddress(field.value))
    }
  }, [dispatch, selectedAdress, field.value]);

  return (
    <>
      <Label htmlFor="address">Address</Label>
      <Input
        id="address"
        name="address"
        type="text"
        value={field.value}
        onChange={(event) => {
          field.onChange(event.target.value)
        }}
        placeholder="Address"
        {...field}
      />

      {error && <p>{error.message}</p>}

      {suggestions && suggestions.map(item => (
        <AdddressSuggest 
          key={item.id}
            onClick={() => {
            field.onChange(item.title);
            setSelectedAdress(item.title);
            dispatch(setSuggestResultAction([]));
          }}
        >
          {item.title}
        </AdddressSuggest>
      ))}
  </>
  )
};