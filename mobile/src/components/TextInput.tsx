import { ComponentProps, useState } from "react";
import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface StyledTextInputProps extends ComponentProps<typeof TextInput>{
  isFocusable?: boolean;
  isFilled?: boolean;
  error?: boolean 
}

export const StyledInput = styled.TextInput<StyledTextInputProps>`
  ${({ theme, isFocusable, isFilled, error }) => {
  const isFocusedOrFilled = isFocusable && !isFilled ? theme.COLORS["gray-1"] : theme.COLORS["gray-5"]
  const borderColor = error ? theme.COLORS.error : isFocusedOrFilled
  
    return css`
      width: 100%;
      color: ${theme.COLORS["gray-1"]};
      border: 1px solid ${borderColor};
      border-radius: 6px;
      padding: 4px 8px;

      flex-direction: row;
      justify-content: space-between;
    `
  }}  

`

type TextInputProps = Omit<StyledTextInputProps, 'isFocusable' | 'isFilled'>

export function TextInputStyled(props: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  return (
    <StyledInput
      {...props}
      isFocusable={isFocused}
      isFilled={isFilled}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={(e) => {
        setIsFilled(!!e)
        if (props?.onChangeText) {
          props.onChangeText(e)
        }
      }}
    />
  )
}