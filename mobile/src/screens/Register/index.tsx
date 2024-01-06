import { Controller, useForm } from "react-hook-form";
import { Text } from "react-native";
import { ErrorLabel } from "../../components/ErrorLabel";
import { Logo } from "../../components/Logo";
import { PasswordInput } from "../../components/PasswordInput";
import { TextInputStyled } from "../../components/TextInput";
import { Container, InputContainer } from "./styled";

export function Register() {

  const { 
    control,
    handleSubmit, 
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_name: '',
      login: '',
      password: '',
      repeat_password: ''
    }
  })
  
  return (
    <Container>
      <Logo />
      
      <InputContainer>
        <Text>Nome</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          name="user_name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputStyled
              placeholder="Jhon Doe"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={!!errors.user_name}
            />
          )}
        />
        { errors.user_name && <ErrorLabel>Campo obrigatório</ErrorLabel>}
      </InputContainer>
      <InputContainer>
        <Text>Usuário</Text>
        <TextInputStyled placeholder="exemplo123" />
      </InputContainer>
      <InputContainer>
        <Text>Crie uma senha</Text>
        <PasswordInput
          placeholder="********"
        />
      </InputContainer>
      <InputContainer>
        <Text>Digite novamente a senha</Text>
        <PasswordInput
          placeholder="********"
        />
      </InputContainer>
    </Container>
  )
}