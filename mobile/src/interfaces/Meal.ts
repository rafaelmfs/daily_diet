export interface Meal {
  id: string;
  name: string;
  description?: string;
  in_diet: number | boolean;
  time: string;
}