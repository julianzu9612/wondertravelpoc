import { connect } from '@services/connect';

export const Verify = async (): Promise<number> => {
  const refreshToken =
    typeof window !== 'undefined' && localStorage.getItem('refreshToken');
  const { status } = await connect.post(
    'auth/token/verify/',
    {
      token: refreshToken,
    },
    {
      'axios-retry': {
        retryCondition: () => false,
      },
    }
  );
  return status;
};
