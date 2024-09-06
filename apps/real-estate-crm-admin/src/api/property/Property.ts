import { AgentAssignment } from "../agentAssignment/AgentAssignment";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  agentAssignments?: Array<AgentAssignment>;
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  price: number | null;
  size: number | null;
  updatedAt: Date;
};
