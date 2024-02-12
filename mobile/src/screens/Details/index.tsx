import { useNavigation, useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { useState } from "react";
import { Alert, Text, View } from "react-native";
import { removeMeal } from "../../api/CRUD/MEALS/removeMeal";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { InDietIndicator } from "../../components/InDietIndicator";
import { ModalWithOverlay } from "../../components/Modal";
import { Meal } from "../../interfaces/Meal";
import { ButtonContainer, DeleteModalContainer, DetailsContainer, Header, InDiet, MealDetails, Title } from "./styled";

export function Details(){
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const route: any = useRoute()
  const meal: Meal  = route.params.meal
  const success = !!meal.in_diet

  const { navigate } = useNavigation()

  async function handleRemove(){
    try {
      const response = await removeMeal(meal.id)

      if(response.status == 204){
        navigate("home")
      }
    } catch (error) {
      Alert.alert("Falha ao excluir")
      console.error(error)
    }
  }

  return(
    <DetailsContainer success={success}>
      <Header>
        <BackButton />
        <Text style={{ fontSize: 24, fontWeight: '500'}}>
          Refeição
        </Text>
        <View />
      </Header>

      <MealDetails>
        <View>
          <Title size="24">{meal.name}</Title>
          <Text>{meal.description}</Text>
        </View>
        <View>
          <Title size="18">Data e hora</Title>
          <Text>{dayjs(meal.time).format("DD/MM/YYYY [às] HH:mm")}</Text>
        </View>

        <InDiet>
          <InDietIndicator variant={success ? 'success' : 'danger'} />
          <Text>
          {
            success ? "Dentro da dieta" : "Fora da dieta"
          }
          </Text>
        </InDiet>

        <ButtonContainer>
          <Button icon={<PencilSimpleLine color="#FFF" />} variant="default" text="Editar refeição" onPress={() => navigate('meal', { meal })} />
          <Button icon={<Trash />} variant="outline" text="Excluir refeição" onPress={() => setShowDeleteModal(true)} />
        </ButtonContainer>
      </MealDetails>

      <ModalWithOverlay open={showDeleteModal} handleClose={() => setShowDeleteModal(false)}>
        <DeleteModalContainer>
          <Text style={{ fontSize: 24, fontWeight: '500', textAlign: "center"}}>Deseja realmente excluir o registro da refeição?</Text>
          <View style={{ flexDirection: 'row', gap: 12}}>
            <Button text="Cancelar" variant="outline" onPress={() => setShowDeleteModal(false)} />
            <Button text="Sim, excluir" variant="default" onPress={handleRemove} />
          </View>
        </DeleteModalContainer>
      </ModalWithOverlay>
    </DetailsContainer>
  )
}