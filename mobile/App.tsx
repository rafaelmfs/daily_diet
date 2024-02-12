import { StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

import { Nunito_400Regular, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  if (!fontsLoaded) {
    return (
      <View style={{
        flex: 1,
        backgroundColor: theme.COLORS['gray-1']
      }}>
        <Text style={{
          fontSize: Number(theme.FONT_SIZE.xl.replace('px', '')),
          color: theme.COLORS['gray-6']
        }}>
          Carregando...
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
          animated
        />

        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}