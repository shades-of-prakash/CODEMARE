import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

userSchema.pre("save", async function () {
	if (!this.isModified("password")) return;
	this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.comparePassword = function (password) {
	return bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);
