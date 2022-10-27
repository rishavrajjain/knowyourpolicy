import Encrypter from "../utils/encrypter";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import userRepository from "../repository/user-repository";
import { status, message } from "../utils/httpresponses";
import { CustomError } from "../utils/types";
const encrypter = new Encrypter();

export const signup = async (name: string, email: string, password: string) => {
  var salt = bcrypt.genSaltSync(10);

  const user = await userRepository.Create.newUser({
    name,
    email,
    password: bcrypt.hashSync(password, salt),
  });

  const encryptedJwtToken = signAndEncryptToken(user._id.toString());

  return {
    user: user.toJSON(),
    encryptedJwtToken,
  };
};

export const login = async (email: string, password: string) => {
  const user = await userRepository.Read.byEmail(email);

  if (!user) {
    throw new CustomError(status.NOT_FOUND, message.USER_NOT_FOUND);
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new CustomError(status.UNAUTHORIZED, message.INCORRECT_CREDENTIALS);
  }

  const encryptedJwtToken = signAndEncryptToken(user._id.toString());

  return {
    ...user.toJSON(),
    encryptedJwtToken,
  };
};

export const signAndEncryptToken = (userId: string) => {
  const jwtSecretKey = `${process.env.JWT_SECRET}`;
  const jwtToken = jwt.sign(
    {
      _id: userId,
    },
    jwtSecretKey
  );

  const encryptedJwtToken = encrypter.encrypt(jwtToken);
  return encryptedJwtToken;
};
