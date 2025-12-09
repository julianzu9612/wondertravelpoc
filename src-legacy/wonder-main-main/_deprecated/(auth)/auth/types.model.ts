export interface ISignUp{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ISignIn{
  email: string;
  password: string;
}


export enum State {
  SIGNUP = 'signup',
  SIGNIN = 'signin',
}