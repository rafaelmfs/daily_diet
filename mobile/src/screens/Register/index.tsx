import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { login, register } from "../../api/CRUD/AUTH";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { ErrorLabel } from "../../components/ErrorLabel";
import { Logo } from "../../components/Logo";
import { PasswordInput } from "../../components/PasswordInput";
import { TextInputStyled } from "../../components/TextInput";
import { useAuthUser } from "../../context/UserContext";
import { Container, InputContainer } from "./styled";

interface RegisterData {
  user_name: string;
  login: string;
  password: string;
}
export function Register() {
  const { 
    control,
    watch,
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

  const navigation = useNavigation()

  const passwordValue = watch('password')
  const { 
    setAuthToken,
  } = useAuthUser()

  async function loginUser(data: {
    login: string;
    password: string;
  }) {
    try {
      const authToken = await login(data)

      if (authToken) {
        setAuthToken(authToken)
        navigation.navigate("home")
      }
    } catch (error) {
      
    }
  }

  async function onSubmit(data: RegisterData) {
    try {
      await register({
        login: data.login,
        password: data.password,
        name: data.user_name
      })

      loginUser({
        login: data.login,
        password: data.password
      })
    } catch (e) {
      console.error(e)
    }
  }
  
  return (
    <Container>
      <View
        style={{
          width: '100%',
          marginBottom: 80

        }}
      >
        <TouchableOpacity>
          <BackButton />
        </TouchableOpacity>
      </View>
      <Logo />
      
      <InputContainer>
        <Text>Nome</Text>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: "Campo obrigatório"
          }}}
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
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: "Campo obrigatório"
          }}}
          name="login"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputStyled
              placeholder="exemplo123"
              autoCapitalize='none'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={!!errors.login}
            />

          )}
        />
        { errors.login && <ErrorLabel>Campo obrigatório</ErrorLabel>}

      </InputContainer>
      <InputContainer>
        <Text>Crie uma senha</Text>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Campo Obrigatório'
            },
            minLength: {
              value: 8,
              message: 'Digite uma senha com no mínimo 8 caracteres'
            }
          }}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <PasswordInput
              placeholder="********"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={!!errors.password}
            />

          )}
        />
        {errors.password && <ErrorLabel>{errors.password.message}</ErrorLabel>}
      </InputContainer>
      <InputContainer>
        <Text>Digite novamente a senha</Text>
        <Controller
          control={control}
          rules={{
            validate: (value) => value === passwordValue || 'Senhas não conferem.'
          }}
          name="repeat_password"
          render={({ field: { onChange, onBlur, value } }) => (
            <PasswordInput
              placeholder="********"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={!!errors.repeat_password}
            />
          )}
        />
        {errors.repeat_password && <ErrorLabel>{errors.repeat_password.message}</ErrorLabel>}
      </InputContainer>
      <InputContainer
        style={{ flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center', marginTop: 24}}
      >
        <Button
          text="Cadastrar"
          style={{
            width: '100%'
          }}
          onPress={handleSubmit(onSubmit)}
        />
      </InputContainer>
    </Container>
  )
}