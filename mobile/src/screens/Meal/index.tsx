import { useNavigation, useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Text, View } from 'react-native';
import { createMeal } from '../../api/CRUD/MEALS/createMeal';
import { updateMeal } from '../../api/CRUD/MEALS/updateMeal';
import { BackButton } from "../../components/BackButton";
import { Button } from '../../components/Button';
import { DatePicker } from '../../components/DatePicker';
import { DateTimePicker } from '../../components/DateTimePicker';
import { ErrorLabel } from '../../components/ErrorLabel';
import { StyledInput } from '../../components/TextInput';
import { Meal as TypeMeal } from '../../interfaces/Meal';
import {
  FormContainer,
  Grid,
  InDietButton,
  InDietIndicator,
  InputLabel,
  MealContaier,
  MealContentContainer,
  MealHeader
} from "./styled";

export function Meal(){
  const { params } = useRoute<any>()
  const meal: TypeMeal | undefined = params?.meal

  const navigation = useNavigation()

  const { 
    control,
    watch,
    handleSubmit, 
    formState: { errors: formErrors, dirtyFields },
  } = useForm({
    defaultValues: {
      name: meal?.name ?? '',
      description: meal?.description ?? "",
      date: dayjs(meal?.time ?? "").toString(),
      time: dayjs(meal?.time ?? "").toISOString(),
      in_diet: meal?.in_diet ?? -1,
    }
  })
  const inDiet = watch("in_diet")

  async function onSubmit(data: any){

    const dateField = dayjs(data.date).format("YYYY-MM-DD");
    let timeField = dayjs(data.time).format("HH:mm");

    if(dirtyFields.time){
      timeField = data.time
    }
    try {
      if(meal?.id){
        const mealResponse = await updateMeal({
          id: meal.id,
          name: data.name,
          description: data.description,
          in_diet: data.in_diet,
          time: dayjs(`${dateField} ${timeField}`).toISOString() 
        })
  
        if(mealResponse.status == 200){
          navigation.navigate('overview')
        }
      }else{
        const mealResponse = await createMeal({
          name: data.name,
          description: data.description,
          in_diet: data.in_diet,
          time: dayjs(`${dateField} ${timeField}`).toISOString() 
        })
  
        if(mealResponse.status == 201){
          navigation.navigate('overview')
        }
      }
    } catch (error) {
      console.error(error)
      Alert.alert("Falha ao salvar refeição", "Ocorreu um erro ao tentar salvar, tente novamente!")
    }
  }


  return (
    <MealContaier>
      <MealHeader>
        <BackButton />
        <Text style={{ fontSize: 24, fontWeight: '500'}}>Nova refeição</Text>
        <View />
      </MealHeader>
      <MealContentContainer>
        <FormContainer>
          <View>
            <InputLabel>Nome</InputLabel>
            <Controller 
              name='name'
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Campo obrigatório"
                },
              }}
              render={({ field: { value, onChange, onBlur}}) => (
                <StyledInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            {
              formErrors.name && <ErrorLabel>{formErrors.name.message}</ErrorLabel>
            }
          </View>
          <View>
            <InputLabel>Descrição</InputLabel>
            <Controller
              name='description'
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Campo obrigatório"
                }
              }}
              render={({ field: { value, onChange, onBlur} }) => (
                <StyledInput  
                  multiline 
                  numberOfLines={8} 
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  style={{ textAlignVertical: "top"}} 
                />
              )}
            />
            {
              formErrors.description && <ErrorLabel>{formErrors.description.message}</ErrorLabel>
            }
          </View>
          <View>
            <Grid>          
              <View style={{
                width: "50%"
              }}>
                <InputLabel>Data</InputLabel>
                <Controller
                  name='date'
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Selecione uma data"
                    }
                  }}
                  render={({ field: { onChange, value}}) => (
                    <DatePicker dateValue={new Date(value)} onDateChange={onChange} />
                  )}
                />
              </View>
              <View style={{
                width: "50%"
              }}>
                <InputLabel>Hora</InputLabel>
                <Controller 
                  name='time'
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Selecione um horário"
                    }
                  }}
                  render={({ field: { value, onChange}}) => (
                    <DateTimePicker dateValue={new Date(value)} onDateChange={onChange} />
                  )}
                />
              </View>
            </Grid>

            { formErrors.time && <ErrorLabel>{formErrors.time.message}</ErrorLabel> }
            { formErrors.date && <ErrorLabel>{formErrors.date.message}</ErrorLabel> }
          </View>

          <View>
            <InputLabel>Está dentro da dieta ?</InputLabel>
            <Controller 
              name='in_diet'
              control={control}
              rules={{
                validate: (value) => value > -1 || "Escolha uma opção"
              }}
              render={({ field: { value, onChange}}) => (
              <Grid>
                <InDietButton onPress={() => onChange(1)} variant={value === 1 ? "success" : "default"}>
                  <InDietIndicator variant='success' />
                  <InputLabel>Sim</InputLabel>
                </InDietButton>
                <InDietButton onPress={() => onChange(0)} variant={value === 0 ? "danger" : "default"}>
                  <InDietIndicator variant='danger' />
                  <InputLabel>Não</InputLabel>
                </InDietButton>
              </Grid>
              )}
            />
          </View>
          { formErrors.in_diet && <ErrorLabel>{formErrors.in_diet.message}</ErrorLabel> }

        </FormContainer>

        <Button onPress={handleSubmit(onSubmit)} disabled={inDiet === -1} variant='default' text='Cadastrar Refeição'/>
      </MealContentContainer>

    </MealContaier>
  )
}