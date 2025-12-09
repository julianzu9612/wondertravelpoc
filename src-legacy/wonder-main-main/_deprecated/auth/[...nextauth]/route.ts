// 'use server';
import NextAuth from 'next-auth';
import { authOptions2 } from './authOptions';

const handler = NextAuth(authOptions2);

export { handler as GET, handler as POST };
