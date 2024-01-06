import { Eye, EyeClosed } from "phosphor-react-native";
import { ComponentProps, useState } from "react";
import { useTheme } from "styled-components/native";
import { Container, InputButton, PasswordStyledTextInput } from "./styled";

interface PasswordInputProps extends ComponentProps<typeof PasswordStyledTextInput>{
  error?: boolean;
}

export function PasswordInput({
  error,
  ...props
}:PasswordInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [secureTextVisible, setSecureTextVisible] = useState(false)
  const { COLORS } = useTheme()


  return (
    <Container
      isFocusable={isFocused}
      isFilled={isFilled}
      error={error}
    >
      <PasswordStyledTextInput
        {...props}
        secureTextEntry={!secureTextVisible}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={(e) => {
          setIsFilled(!!e)
          if (props?.onChangeText) {
            props.onChangeText(e)
          }
        }}
      />

      {
        secureTextVisible ?
          <InputButton
            // activeOpacity={70}
            onPress={() => setSecureTextVisible(false)}
          >
            <EyeClosed
              size={14}
              color={isFocused ? COLORS["gray-2"] : COLORS["gray-4"]}
            />
          </InputButton>
          :
          <InputButton
            // activeOpacity={70}
            onPress={() => setSecureTextVisible(true)}
          >
            <Eye
              size={24}
              color={isFocused ? COLORS["gray-2"] : COLORS["gray-4"]}
            />
          </InputButton>
      }
    </Container>
    )
}