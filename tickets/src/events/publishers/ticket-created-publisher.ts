import { Publisher, Subjects, TicketCreatedEvent } from '@bsftickets/common/build';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
