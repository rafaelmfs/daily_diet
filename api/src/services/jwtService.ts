import jwt from 'jsonwebtoken';

/**
 * Valida um tokenJWT enviado.
 * @param token Token para validar
 * @param maxAge Numero maximo para validade do token em dias (Default: 30)
 * @returns Conteudo do token
 */
export function validateToken(token: string, maxAge: number = 30) {
  try {
    const decode = jwt.verify(token, 'secret', {
      maxAge: `${maxAge} days`
    }) as jwt.JwtPayload
  
    return decode
    
  } catch (error) {
    throw error
  }
}

/**
 * Gera um token JWT
 * @param content Conteudo do token
 * @param tokenId Id para o token (Opcional)
 * @returns token JWT
 */
export function generateToken<ContentType>(content: ContentType, tokenId?: string) {
  const token = jwt.sign({
    content,
    }, 'secret', {
    jwtid: tokenId
  })

  return token
}