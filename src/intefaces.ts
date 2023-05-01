export interface JWTUser {
  id: string;
  email: string;
}

export interface GraphqlContext {
  user?: JWTUser;
}
