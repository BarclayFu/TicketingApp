import express from "express";
import { json } from "body-parser";
import 'express-async-errors';
import mongoose from "mongoose";
import cookieSession from "cookie-session";

import { currentuserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./ errors/not-found-err";

const app = express();
app.settings('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true
  })
);


app.use(currentuserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async(req, res)=>{
  throw new NotFoundError();
});

app.use(errorHandler);

const start =async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }

  app.listen(3000,() => {
    console.log('Listening on port 3000!');
    console.log('HI!');
  });
  
};

start();