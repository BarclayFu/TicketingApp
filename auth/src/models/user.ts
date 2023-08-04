import mongoose from "mongoose";
import { Password } from "../services/password";

// An interface that describes the properties
// that are reqiured to create a new user
interface UserAttrs{
  email: string;
  password: string;
}

// An interface that describes the properties that
// a User model has
interface UserModel extends mongoose.Model<UserDoc>{
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document{
  email: string,
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

userSchema.pre('save', async function(done) {
   if(this.isModified('password')){
      const hashed = await Password.toHash(this.get('password'));
      this.set('password', hashed);
   }
   done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

User.build({
  email: 'tst@tst.com',
  password: 'password'
})
// const buildUser = (attrs: UserAttrs) =>{
//   return new User(attrs);
// };

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

export {User};