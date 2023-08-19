import express, {Request, Response} from 'express';
import { body } from 'express-validator';
import { validateRequest, NotAuthorizedError, NotFoundError, requireAuth } from '@bsftickets/common/build';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.put('/api/tickets/:id', requireAuth, async (req:Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id);

  if(!ticket){
    throw new NotFoundError();
  }

  res.send(ticket);
});

export {router as updateTicketRouter};