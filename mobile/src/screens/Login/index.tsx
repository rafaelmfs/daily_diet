import { useNavigation } from '@react-navigation/native';
import { Text, View } from "react-native";
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { PasswordInput } from '../../components/PasswordInput';
import { TextInputStyled } from '../../components/TextInput';
import { Container } from "./style";



export function Login() {
  const navigation = useNavigation()
  
  function handleRegister() {
    navigation.navigate('register')
  }

  return (
    <Container>
      <Logo />
      <View style={{ width: '100%' }}>
        <Text>Login</Text>
        <TextInputStyled />
      </View>
      <View style={{ width: '100%' }}>
        <Text>Senha</Text>
        <PasswordInput />
      </View>

      <View style={{
        flexDirection: "row",
        gap: 16,
      }}>
        <Button
          text="Login"
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