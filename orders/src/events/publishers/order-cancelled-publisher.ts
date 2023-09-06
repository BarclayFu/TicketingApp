import { Subjects, Publisher, OrderCancelledEvent } from "@bsftickets/common/build";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}