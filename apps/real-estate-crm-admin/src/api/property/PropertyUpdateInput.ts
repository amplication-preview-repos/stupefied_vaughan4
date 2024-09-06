import { AgentAssignmentUpdateManyWithoutPropertiesInput } from "./AgentAssignmentUpdateManyWithoutPropertiesInput";
import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  agentAssignments?: AgentAssignmentUpdateManyWithoutPropertiesInput;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  location?: string | null;
  name?: string | null;
  price?: number | null;
  size?: number | null;
};
