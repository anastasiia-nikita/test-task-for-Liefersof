import styled from 'styled-components';

export const Label = styled.label`
  display: ${({ theme }) => theme.display.label};
  margin-bottom: ${({ theme }) => theme.margin.label}px;
  font-size: ${({ theme }) => theme.fontSizes.label}px;
  font-weight: ${({ theme }) => theme.fontWeight.label};
  // color: ${({ theme }) => theme.colors.label};
`

export const Input = styled.input`
  border: 1px solid #154360;
  border-radius: 8px;
  // width: ${({ theme }) => theme.sizes.input.width}%;
  height: ${({ theme }) => theme.sizes.input.height}px;
  margin-bottom: ${({ theme }) => theme.margin.input}px;
  font-size: ${({ theme }) => theme.fontSizes.input}px;
  padding: 0 ${({ theme }) => theme.padding.input}px;
  // padding-left: 5px;
  width: 100%;
`

export const Form = styled.form`
  margin: 0;
`

export const Select = styled.select`
  width: 100%;
  height: 30px;
  border-radius: 8px;
  padding: 0 ${({ theme }) => theme.padding.input}px;
  font-size: ${({ theme }) => theme.fontSizes.input}px;
  margin-bottom: 15px;
`