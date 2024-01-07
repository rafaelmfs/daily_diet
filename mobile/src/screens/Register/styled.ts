import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  padding: 16px 32px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

export const InputContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`