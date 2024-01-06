import styled, { css } from "styled-components/native";

interface PasswordStyledTextInputProps{
  isFocusable?: boolean;
  isFilled?: boolean;
  error?: boolean;
}

export const Container = styled.View<PasswordStyledTextInputProps>`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  padding: 4px 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ theme, isFilled, isFocusable, error }) => {
    const isFocusedOrFilled = isFocusable && !isFilled ? theme.COLORS["gray-1"] : theme.COLORS["gray-5"]
    const borderColor = error ? theme.COLORS.error : isFocusedOrFilled
      
    return css`border: ${borderColor};`
  }}
`

export const PasswordStyledTextInput = styled.TextInput`
  flex: 1;
  border: 0;
  color: ${({ theme }) => theme.COLORS["gray-1"]};
`

export const InputButton = styled.TouchableOpacity`
    width: 32px;
    padding: 4px;
    align-items: center;
`