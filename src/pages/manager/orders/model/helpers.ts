import { userData } from '@/shared/store/slices/profile/types';

export const getLogin = (arr: userData[]) => {
  const res: string[] = ['public'];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].login);
  }
  return res;
};
