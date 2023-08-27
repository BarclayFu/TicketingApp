import { Publisher, Subjects, TicketUpdatedEvent } from "@bsftickets/common/build";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}