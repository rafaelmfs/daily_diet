import { useNavigation, useRoute } from "@react-navigation/native"
import { Text } from "react-native"
import { Button } from "../../components/Button"
import { DangerIllustration } from "./components/DangerIllustration"
import { SuccessIllustration } from "./components/SuccessIllustration"
import { FeedbackContainer, Title } from "./styled"

export function Feedback(){
  const { params } = useRoute<any>()
  const navigation = useNavigation()
  const success: boolean = params?.success

  if(!success){
    return (
      <FeedbackContainer>
        <Title>
          Que pena!
        </Title>
        <Text style={{ textAlign: "center"}}>
          Você <Text style={{ fontWeight: 'bold'}}>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!
        </Text>

        <DangerIllustration />

        <Button
          text="Ir para a página inicial"
          onPress={() => navigation.navigate("home")}
        />
      </FeedbackContainer>  
    )
  }

  return (
    <FeedbackContainer>
      <Title success>
        Continue assim!
      </Title>
      <Text style={{ textAlign: "center"}}>
        Você continua <Text style={{ fontWeight: 'bold'}}>dentro da dieta.</Text> Muito bem!
      </Text>

      <SuccessIllustration />

      <Button
        text="Ir para a página inicial"
        onPress={() => navigation.navigate("home")}
      />
    </FeedbackContainer>
  )
}