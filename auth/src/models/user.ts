import mongoose from "mongoose";

// An interface that describes the properties
// that are reqiured to create a new user
interface UserAttrs{
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

const buildUser = (attrs: UserAttrs) =>{
  return new User(attrs);
};

// we don't use this because it cannot actually check,

// new User({
//  email:'test@test.com',
//  password: 'asdasd'
// });

// we use buildUser function to check

// buildUser({
//   email: 'test@test.com',
//   password: 'password'
// });

export {User, buildUser};