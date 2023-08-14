import express, {Response, Request}  from "express";
import { requireAuth } from "@bsftickets/common/build";

const router = express.Router();

router.post('/api/tickets',requireAuth, (req: Request, res:Response) => {
  res.sendStatus(200);
});

export { router as createTicketRouter};