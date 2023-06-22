import mongoose from "mongoose";

const accountStructure = mongoose.Schema(
    {
        email: String,
        password: Number
    }
)

const accountModel = mongoose.model("account" ,accountStructure)

export {accountModel};