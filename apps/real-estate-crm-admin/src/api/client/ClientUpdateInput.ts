import { AgentAssignmentUpdateManyWithoutClientsInput } from "./AgentAssignmentUpdateManyWithoutClientsInput";
import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  agentAssignments?: AgentAssignmentUpdateManyWithoutClientsInput;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
