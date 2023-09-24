import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';
import { Order } from '../../models/order';
import { OrderStatus } from '@bsftickets/common/build';

it('return a 404 when purchasing an order that does not exist', async ()=>{
  await request(app)
    .post('/api/payments')
    .set('Cookie', global.signin())
    .send({
      token:'asdasd',
      orderId: new mongoose.Types.ObjectId().toHexString()
    })
    .expect(404);
});

it('return a 401 when purchasing an order that does not belong to user', async ()=>{
  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    userId : new mongoose.Types.ObjectId().toHexString(),
    version: 0,
    price: 20,
    status: OrderStatus.Created
  });

  await order.save();

  await request(app)
    .post('/api/payments')
    .set('Cookie', global.signin())
    .send({
      token:'asdasd',
      orderId: order.id
    })
    .expect(401);
});

it('return a 400 when purchasing a cancelled order', async ()=>{

});
