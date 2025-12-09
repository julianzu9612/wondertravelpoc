// import { ISignIn, ISignUp } from '../../app/[lng]/(auth)/auth/types.model';
// import { API_ENDPOINTS } from '../endpoints';
// import { connect } from '@services/connect';
// import { IAuthSocialResponse, ResAccessToken } from './auth.model';
// const AUTH = API_ENDPOINTS.AUTH;

// export async function socialAuthTokenExchange({
//   socialProvider,
//   accessToken,
// }: {
//   socialProvider: string;
//   accessToken: string;
// }): Promise<IAuthSocialResponse | any> {
//   const apiUrl = `${AUTH}${socialProvider}/`;
//   const payload = { access_token: accessToken };

//   try {
//     const { data } = await connect.post(apiUrl, payload, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     return data;
//   } catch (e) {
//     console.error(e, 'error ocurred in AUTH Social');
//   }
// }

// export async function basicSignUp({
//   payload,
// }: {
//   payload: ISignUp;
// }): Promise<IAuthSocialResponse | any> {
//   const apiUrl = `${AUTH}registration/`;
//   const payloadFormat = {
//     email: payload.email,
//     password1: payload.password,
//     password2: payload.password,
//     first_name: payload.firstName,
//     last_name: payload.lastName,
//   };

//   const { data } = await connect.post(apiUrl, payloadFormat, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return data;
// }

// export async function basicSignIn({
//   payload,
// }: {
//   payload: ISignIn;
// }): Promise<IAuthSocialResponse> {
//   const apiUrl = `${AUTH}login/`;

//   const { data } = await connect.post(apiUrl, payload, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return data;
// }

// export async function logout(): Promise<IAuthSocialResponse | any> {
//   const apiUrl = `${AUTH}logout/`;

//   try {
//     const { data } = await connect.post(apiUrl, null, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     return data;
//   } catch (e) {
//     console.error(e, 'error ocurred in BASIC Social');
//   }
// }

// export async function refreshAccessToken(): Promise<ResAccessToken> {
//   const refreshToken =
//     typeof window !== 'undefined' && localStorage.getItem('refreshToken');
//   const apiUrl = `${AUTH}token/refresh/`;
//   const tokenRefresh = (
//     await connect.post<ResAccessToken>(apiUrl, { refresh: refreshToken })
//   ).data;

//   localStorage.setItem('accessToken', tokenRefresh.access);
//   return tokenRefresh;
// }
