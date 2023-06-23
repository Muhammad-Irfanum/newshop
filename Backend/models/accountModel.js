import mongoose from "mongoose";

const accountStructure = mongoose.Schema(
    {
        email: String,
        password: String
    }
)

const accountModel = mongoose.model("account" ,accountStructure)

export {accountModel};