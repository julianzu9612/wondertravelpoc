'use client';

const token =
  typeof window !== 'undefined' && localStorage.getItem('accessToken');
const headers = new Headers();
headers.append('Content-Type', 'application/json');

headers.append('Authorization', `Bearer ${token}`);

export default headers;
