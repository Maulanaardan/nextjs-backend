import {Schema, model, models} from "mongoose";

const user_schema = new Schema({
    email : {type : String, required : true, unique : true},
    username : {type : String, required : true},
    password : {type : String, required : true},
}, {
    timestamps : true
}
)

const User = models.User || model("User", user_schema);

export default User;