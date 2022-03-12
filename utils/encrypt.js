import bcrypt from 'bcrypt';

const saltRounds = 10;

export const encrypt = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};

export const decrypt = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
