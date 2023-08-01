import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

import { currentuserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

app.use(currentuserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.listen(3000,() => {
  console.log('Listening on port 3000!');
  console.log('HI!');
});
