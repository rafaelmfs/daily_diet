import { knex } from '../database';
import { UserInterface } from "../interfaces/User";
//

export async function createUser(user: Omit<UserInterface, 'id'>) {
  try {
    await knex('users').insert(user)
  } catch (error) {
    throw error 
  }
}

export async function getUserByLogin(login: string): Promise<UserInterface | undefined> {
  try {
    const user: UserInterface | undefined = await knex('users')
      .select('*')
      .where({
        login
      })
      .first()

    if (user) {
      return user
    }

    throw new Error('Usuário não encontrado')
      
  } catch (error) {
    throw error
  }
}

export async function getUserById(id: string): Promise<UserInterface | undefined> {
  try {
    const user: UserInterface = await knex('users')
      .select('id', 'name', 'login', 'picture')
      .where({
        id
      })
      .first()

    if (user) {
      return user
    }

    throw new Error('Usuário não encontrado')
      
  } catch (error) {
    throw error
  }
}

export async function updateUser(user: Partial<UserInterface> & { id: string }): Promise<UserInterface>{
  return {} as UserInterface
}

//
export async function deleteUser(userId: string): Promise<void> { 
}