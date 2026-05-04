import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

// if there is no mdel exist then its create a new one
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;