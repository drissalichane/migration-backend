/**
 * Execute Workflow Trigger Node - Version 1
 * Helpers for calling other n8n workflows. Used for designing modular, microservice-like workflows.
 */


export interface ExecuteWorkflowTriggerV1Params {
  events?: unknown;
}

interface ExecuteWorkflowTriggerV1NodeBase {
  type: 'n8n-nodes-base.executeWorkflowTrigger';
  version: 1;
  isTrigger: true;
}

export type ExecuteWorkflowTriggerV1ParamsNode = ExecuteWorkflowTriggerV1NodeBase & {
  config: NodeConfig<ExecuteWorkflowTriggerV1Params>;
};

export type ExecuteWorkflowTriggerV1Node = ExecuteWorkflowTriggerV1ParamsNode;