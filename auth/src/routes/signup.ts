import express, {Request, Response} from 'express';
import { body } from 'express-validator';
import { User } from '../models/user';
import { BadRequestError } from '../ errors/bad-request-error';
import  jwt  from 'jsonwebtoken';
import { validateRequest } from '../middlewares/validate-request';

const router = express.Router();

router.post('/api/users/signup', [
  body('email')
    .isEmail()
    .withMessage('Email must be valid'),
  body('password')
    .trim()
    .isLength({min : 4, max: 20})
    .withMessage('Password must between 4 and 20 characters')
],
validateRequest,
async (req : Request,res : Response) =>{
  
  const {email, password} =req.body;

  const exsitingUser = await User.findOne({email});

  if(exsitingUser){
   throw new BadRequestError('Email in use!!');
  }

  const user = User.build({email, password});
  await user.save();

  // Genertate JWT

  const userJwt = jwt.sign({
    id: user.id,
    email: user.email
  }, process.env.JWT_KEY!); // "!" tells Typrscript that we have checked the variable  
                            // otherwise there will be a  wavy line!
  

  //Store it on session object
  req.session = {
    jwt: userJwt
  };

  res.status(201).send(user);  
});

export {router as signupRouter}; 