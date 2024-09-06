import { AgentAssignmentCreateNestedManyWithoutPropertiesInput } from "./AgentAssignmentCreateNestedManyWithoutPropertiesInput";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutPropertiesInput;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  location?: string | null;
  name?: string | null;
  price?: number | null;
  size?: number | null;
};
