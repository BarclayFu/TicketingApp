import { Subjects, Publisher, ExpirationCompleteEvent } from "@bsftickets/common/build";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
};