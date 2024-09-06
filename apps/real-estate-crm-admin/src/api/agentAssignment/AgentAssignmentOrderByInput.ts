import { SortOrder } from "../../util/SortOrder";

export type AgentAssignmentOrderByInput = {
  agentName?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
