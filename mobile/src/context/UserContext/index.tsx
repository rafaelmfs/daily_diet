import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import { User } from "../../interfaces/User";
import { addTokenInStorage } from "../../storage/auth/addTokenInStorage";
import { getToken } from "../../storage/auth/getToken";
import { removeToken } from "../../storage/auth/removeToken";

interface UserContextData{
  user?: User;
  authToken?: string;
  removeAuthToken: () => Promise<void>
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

  async function removeAuthToken(){
    await removeToken()
    setAuthToken(undefined)
    setUser(undefined)
  }

  const contextData = useMemo(() => (
    {
      authToken,
      user,
      removeAuthToken,
      setAuthToken: handleSetAuthToken,
      setUser: handleSetUser,
    }
  ), [user?.id])


  useEffect(() => {
    getAuthToken()
  }, [authToken])

  return (
    <UserContext.Provider
      value={contextData}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useAuthUser() {
  const userContext = useContext(UserContext)
  return userContext
}