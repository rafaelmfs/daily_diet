import { api } from "../../axios";

export async function getMealsInDietCount(){
  try {
    const response = await api.get<{ count: number}>("/meals/count", {
      params: {
        in_diet: 1
      }
    })

    if(response.status != 200){
      throw new Error("Falha ao buscar os dados")
    }

    return response.data
  } catch (error) {
    throw error
  }
}