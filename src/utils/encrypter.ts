import crypto from "crypto";

// export const encrypt = (jwtToken: string) => {
//   const algorithm = 'aes256';
//   const key = `${process.env.ENCRYPTION_KEY}`;
//   const iv = `${process.env.IV}`;
//   var cipher = crypto.createCipheriv(algorithm, key,iv);
//   var encryptedToken = cipher.update(jwtToken, 'utf8', 'hex') + cipher.final('hex');
//   return encryptedToken;
// }


// export const decrypt = (encryptedJwtToken: string) => {
//   const algorithm = 'aes256';
//   const key = `${process.env.ENCRYPTION_KEY}`;
//   const iv = `${process.env.IV}`;
//   var decipher = crypto.createDecipheriv(algorithm, key, iv);
//   var decryptedToken = decipher.update(encryptedJwtToken, 'hex', 'utf8') + decipher.final('utf8');
//   return decryptedToken;
// }

class Encrypter {
  algorithm: string;
  key: Buffer;
  constructor() {
    this.algorithm = "aes-192-cbc";
    this.key = crypto.scryptSync(`${process.env.ENCRYPTION_KEY}`, "salt", 24);
  }

  encrypt(jwtToken:string) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);
    const encryptedJwtToken = cipher.update(jwtToken, "utf8", "hex");
    return [
      encryptedJwtToken + cipher.final("hex"),
      Buffer.from(iv).toString("hex"),
    ].join("|");
  }

  decrypt(encryptedJwtToken:string) {
    const [encryptedToken, iv] = encryptedJwtToken.split("|");
    if (!iv) throw new Error("IV not found");
    const decipher = crypto.createDecipheriv(
      this.algorithm,
      this.key,
      Buffer.from(iv, "hex")
    );
    return decipher.update(encryptedToken, "hex", "utf8") + decipher.final("utf8");
  }
}


export default Encrypter;

