import { Publisher, OrderCreatedEvent, Subjects } from "@bsftickets/common/build";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}