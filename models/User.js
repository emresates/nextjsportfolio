import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
