import { Schema, model } from "mongoose";

const AvatarSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  avatar: { type: String },
});

export default model("Avatar", AvatarSchema);
