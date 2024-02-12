import { api } from "../../axios";

interface MealParams {
  name: string;
  description: string;
  in_diet: number;
  time: string;
  id: string;
}

export async function updateMeal({
  description,
  id,
  in_diet,
  name,
  time
}: MealParams) {
  try {
    const mealResponse = await api.patch(`/meal/${id}`, {
      description,
      in_diet,
      name,
      time
    })

    return mealResponse
  } catch (error) {
    throw error
  }
}