import shortUUID from 'short-uuid';
import { generateToken, validateToken } from './jwtService';

export class Authenticate{
  public validateAuthToken(token: string) { 
    try {
      const decode = validateToken(token)

      const session = UserSession.getSession(decode.jti)

      if (!session) {
        throw new Error('Sessão expirada, faça login novamente!') 
      }

      return {
        user_id: decode.user_id,
      }

    } catch (error: any) {
      if (error.name === 'TokenExpiredError') {
        return {
          message: 'Sessão expirada, faça login novamente!'
        }
      }

      throw error
    }

  }
  
  public generateToken(userId: string) {
    const tokenId = shortUUID.generate()
    const token = generateToken<{ user_id: string}>({ user_id: userId}, tokenId)
  
    return token;
  }
}