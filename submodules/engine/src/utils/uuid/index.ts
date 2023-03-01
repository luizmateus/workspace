import { v4 as uuidv4 } from 'uuid';

const v4 = () => {
  return uuidv4();
};

export const uuid = {
  v4,
};
