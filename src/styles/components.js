import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: 3px;
  font-size: 14px;
  font-weight: bold;
`

export const Input = styled.input`
  border: 1px solid;
  border-color: ${({ error }) => error ? 'red' : '#154360'};
  border-radius: 8px;
  height: 30px;
  margin-bottom: 15px;
  font-size: 16px;
  padding: 0 15px;
  width: 100%;
`

export const ErrorMessage = styled.p`
  margin: -15px 0 10px;
  font-size: 12px;
  padding: 0 15px;
  color: red;
`