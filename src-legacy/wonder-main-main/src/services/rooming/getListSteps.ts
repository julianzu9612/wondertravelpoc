export interface UserData {
  filledData: number;
  totalData: number;
}

const userData = {
  1: { filledData: 2, totalData: 4 },
  2: { filledData: 3, totalData: 4, totalData1: 4, },
};
const userDataService = async (userId: keyof typeof userData ): Promise<UserData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userData[userId]);
    }, 1000);
  });
};

export default userDataService;