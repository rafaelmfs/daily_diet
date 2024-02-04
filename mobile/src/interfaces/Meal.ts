export interface Meal {
  id: string;
  name: string;
  description?: string;
  in_diet: number;
  time: string;
  created_at: string;
  user_id: string;
}