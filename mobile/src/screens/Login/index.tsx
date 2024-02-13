import { useNavigation, useRoute } from '@react-navigation/native';
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
import { addTokenInStorage } from '../../storage/auth/addTokenInStorage';
import { getToken } from '../../storage/auth/getToken';
import { Container } from "./style";



export function Login() {
  const navigation = useNavigation();
  const route: any = useRoute();

  const [isLoading, setIsLoading] = useState(true)
  const { 
    control,
    handleSubmit, 
    reset,
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
        addTokenInStorage(authToken)
        navigation.navigate('home')
        reset()
      }
    } catch (error) {
      console.error(error)
      console.log(JSON.stringify(error, null, 2))
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
    const sessionExpired = route.params?.session_expired

    if(token && !sessionExpired){
      configAuthAPI(token)
      addTokenInStorage(token)
      navigation.navigate('home')
    }else{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    api.interceptors.request.clear()

    loadLastSession()
  }, [isLoading, route.params])

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