
declare module 'knex/types/tables' {
  export interface Tables{
    users: {
      id: string
      name: string
      login: string
      password: string
      created_at: string
      updated_at?: string
      picture?: string
    }
    users_session: {
      id: string
      user_id: string
      logged_in: number
    }
  }
}
