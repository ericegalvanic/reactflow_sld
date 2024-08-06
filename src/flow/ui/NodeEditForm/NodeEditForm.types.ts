import { RFNode } from "@/common/entities";

export type NodeEditFormUpdatePayload = RFNode;

export type NodeEditFormUpdateHandle = (
  payload: NodeEditFormUpdatePayload
) => void;
