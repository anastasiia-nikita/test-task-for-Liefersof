import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Input, Label, ErrorMessage } from '../styles/components';
import { useController } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSuggestResultSelector } from '../redux/selectors';
import { getAddress, setSuggestResultAction } from '../redux/actions';

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
        error={error}
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

      {error && <ErrorMessage>{error.message}</ErrorMessage>}

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

const AdddressSuggest = styled.div`
  border-bottom: 1px solid black;
  padding: 0 15px;
  font-size: 12px;
  margin-bottom: 15px;
`