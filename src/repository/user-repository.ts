import User, { UserAttrs } from "../models/user";

class Read {
  static async byId(userId: string) {
    return await User.findOne({ _id: userId.toString() });
  }

  static async byEmail(email: string) {
    return await User.findOne({ email });
  }
}

class Create {
  static async newUser(userAttrs: UserAttrs) {
    const user = new User(userAttrs);
    return await user.save();
  }
}

class Update {}

export default {
  Read,
  Create,
  Update,
};
