import request from "supertest";
import { app } from "../../app";

it('has a route handler listening to /api/tickets for posts for post requests',async () => {
  const response = await request(app)
    .post('/api/tickets')
    .send({});
  expect(response.status).not.toEqual(404);
});

it('can only be accessed if thr user is signed in', async ()=> {
  
});

it('return s an erroe if an invalid title is provided', async () => {
  
});

it('return s an erroe if an invalid price is provided', async () => {
  
});

it('creates a tickets with valid inputs',async () => {
  
});