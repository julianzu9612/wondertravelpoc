export interface ISocialSession{
  accessToken: string | null;
}

export interface IUserSession{
  isLogged: boolean,
  access_token: string | null,
  refresh_token: string | null,
  user?: {
    pk: number | null,
    username: string | null,
    email: string | null,
    first_name: string | null,
    last_name: string | null
  }
}

