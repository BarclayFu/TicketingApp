import express, {Request, Response} from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.post('/api/users/currentuser', [
  body('email')
    .isEmail()
    .withMessage('Email must be valid'),
  body('password')
    .trim()
    .isLength({min : 4, max: 20})
    .withMessage('Password must between 4 and 20 characters')
],
(req : Request,res : Response) =>{
  const{ email, password } = req.body;

  if(!email || typeof email !== 'string'){
    res.status(400).send('Provide via email!')
  }
});

export {router as signupRouter}; 