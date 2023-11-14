import bcrypt from 'bcrypt';

/**
 * Cria um Hash para a string informada
 * @param password String para que seja criado uma hash
 * @returns string Hash
 */
export function generateHash(password: string) {
  let generatedHash = ''
  const saltRounds = 10

  bcrypt.hash(password, saltRounds, (error, hash) => generatedHash = hash)

  return generatedHash
}

/**
 * Faz a comparação de duas HASH para ver são iguais
 * @param hash 
 * @param compare 
 * @returns True se forem iguais
 */
export function compareHash(hash: string, compare: string): boolean { 
  let isValid = false;

  bcrypt.compare(hash, compare)
    .then((result) => isValid = result)

  return isValid
}