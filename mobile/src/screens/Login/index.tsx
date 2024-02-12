import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from "react-native";
import { login } from '../../api/CRUD/AUTH';
import { api, configAuthAPI } from '../../api/axios';
import { Button } from '../../components/Button';
import { ErrorLabel } from '../../components/ErrorLabel';
import { Logo } from '../../components/Logo';
import { PasswordInput } from '../../components/PasswordInput';
import { TextInputStyled } from '../../components/TextInput';
import { useAuthUser } from '../../context/UserContext';
import { getToken } from '../../storage/auth/getToken';
import { Container } from "./style";



export function Login() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const { 
    control,
    handleSubmit, 
    formState: {
      errors,
    },
    setError
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    }
  })
  const { setAuthToken } = useAuthUser()
  
  function handleRegister() {
    navigation.navigate('register')
  }

  async function handleSubmitLogin(data: { 
    login: string;
    password: string;
  }) {
    try {
      const authToken = await login({
        login: data.login.trim(),
        password: data.password.trim()
      })
      if (authToken) {
        configAuthAPI(authToken)
        setAuthToken(authToken)
        navigation.navigate('home')
      }
    } catch (error) {
      console.error(error)
      setError("login", {
        message: ""
      })
      setError("password", {
        message: "Usário ou senha inválidos"
      })
    }
  }

  async function loadLastSession(){
    const token = await getToken()
    if(token){
      configAuthAPI(token)
      setAuthToken(token)
      navigation.navigate('home')
    }else{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    api.interceptors.request.clear()

    loadLastSession()
  }, [isLoading])

  if(isLoading){
    return <Container />
  }

  return (
    <Container>
      <Logo />
      <View style={{ width: '100%' }}>
        <Text>Login</Text>
        <Controller
          name='login'
          rules={{
            required: {
              value: true,
              message: "Campo obrigatório"
          }}}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputStyled
              autoCapitalize='none'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={!!errors.login}
            />
          )}
        />
        {errors?.login?.message && <ErrorLabel>{errors.login.message}</ErrorLabel>}
        
      </View>
      <View style={{ width: '100%' }}>
        <Text>Senha</Text>
        <Controller
          name='password'
          rules={{
            required: {
              value: true,
              message: "Campo obrigatório"
          }}}
          control={control}
          render={({ field: { onChange, onBlur, value}}) => (
            <PasswordInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={!!errors.password}
            />
          )}
        />
        {errors.password && <ErrorLabel>{errors.password.message}</ErrorLabel>}
      </View>

      <View style={{
        flexDirection: "row",
        gap: 16,
      }}>
        <Button
          text="Login"
          onPress={handleSubmit(handleSubmitLogin)}
        />
        <Button
          text="Cadastrar"
          variant='outline'
          onPress={handleRegister}
        />

      </View>
      

    </Container>
  )
}