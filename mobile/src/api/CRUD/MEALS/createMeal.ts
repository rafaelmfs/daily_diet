import { api } from "../../axios";

interface NewMealParams {
  name: string;
  description: string;
  in_diet: number;
  time: string;
}

export async function createMeal({
  name,
  description,
  in_diet,
  time
}: NewMealParams){
  try {
    const newMealResponse = await api.post('/meals', {
      name,
      description,
      in_diet,
      time
    })

    return newMealResponse;
  } catch (error) {
    throw error
  }
}