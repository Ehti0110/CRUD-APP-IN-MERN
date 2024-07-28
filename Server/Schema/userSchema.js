import { Schema, model } from "mongoose";


const UserSchema = Schema({
    name : String,
    email: String,
    password: String,
    phone: String
});

const userModel = model("users",UserSchema);


export default userModel;