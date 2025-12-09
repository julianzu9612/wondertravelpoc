export const getArrayItemRandom = (arr: any) => {
  if (!arr) return;
  return arr[Math.floor(Math.random() * arr.length)];
};
