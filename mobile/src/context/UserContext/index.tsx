import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { User } from "../../interfaces/User";
import { addTokenInStorage } from "../../storage/auth/addTokenInStorage";
import { getToken } from "../../storage/auth/getToken";

interface UserContextData{
  user?: User;
  authToken?: string;
  setUser: (user: User) => void
  setAuthToken: (token: string) => void
}

export const UserContext = createContext<UserContextData>({} as UserContextData)

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | undefined>()
  const [authToken, setAuthToken] = useState<string | undefined>('')

  function handleSetAuthToken(token: string) {
    addTokenInStorage(token)
    setAuthToken(token)
  }

  function handleSetUser(user: User) { 
    setUser(user)
  }

  async function getAuthToken() {
    const token = await getToken()

    if (token) {
      setAuthToken(token)
    }
  }

  useEffect(() => {
    getAuthToken()
  }, [authToken])

  return (
    <UserContext.Provider
      value={{
        authToken,
        user,
        setAuthToken: handleSetAuthToken,
        setUser: handleSetUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useAuthUser() {
  const userContext = useContext(UserContext)
  return userContext
}