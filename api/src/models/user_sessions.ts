interface Session{
  user_id: string;
  id: string;
  logged_in: boolean;
}

export async function newSession(session: Session) {
  //
}

export async function getSession(sessionId: string) {
  //
}

export async function deleteSession(sessionId: string) { 
  //
}