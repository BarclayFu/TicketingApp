import { Subjects, Publisher, PaymentCreatedEvent } from "@bsftickets/common/build";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}