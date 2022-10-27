import { model, Document, Schema, Model } from "mongoose";

export interface UserAttrs {
  name: string;
  email: string;
  password: string;
}

export interface UserDoc extends Document, UserAttrs {
  createdAt: Date;
  updatedAt: Date;
  version: number;
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    passwordResetSecret: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;

        delete ret.password;

        return ret;
      },
    },
  }
);

UserSchema.index({ email: 1 });

const User = model<UserDoc>("User", UserSchema);
export default User;
