// 'use client';

// import React from 'react';
// import { SessionProvider } from 'next-auth/react';
// import ProfileContext from './store/ProfileContext';
// import parseInitialState from './store/parseInitialState';
// import { reducerProfile } from '@store/reducerProfile';
// import INITIAL_STATE from '@store/initialState';
// import { useReducer } from 'react';

// export function Providers({children} : { children : React.ReactNode}){
//   const [state, dispatch] = useReducer(
//     reducerProfile,
//     INITIAL_STATE,
//     parseInitialState
//   );

//   return (
//     <ProfileContext.Provider value={{ state, dispatch }}>
//       <SessionProvider>
//         { children }
//       </SessionProvider>
//     </ProfileContext.Provider>
//   );
// }