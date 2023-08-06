import express from 'express';
import jwt  from 'jsonwebtoken';

const router = express.Router();

router.get('/api/users/currentuser', (req,res) =>{
  // You will see an error here if there is no "?"
  // because we have to check req do exist ( !req.seesion || !req.sesson.jwt)
  // using "?" equals to !req.session
  if(!req.session?.jwt){
    return res.send({currentUser: null});
  }
  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!);
    res.send({currentUser: payload});
  } catch (error) {
    res.send({currentUser: null});
  }
  
});

export {router as currentuserRouter}; 