/**
 * LoneScale Trigger Node - Version 1
 * Trigger LoneScale Workflow
 */


export interface LoneScaleTriggerV1Params {
/**
 * Select one workflow. Choose from the list
 */
    workflow?: string;
}

export interface LoneScaleTriggerV1Credentials {
  loneScaleApi: CredentialReference;
}

interface LoneScaleTriggerV1NodeBase {
  type: 'n8n-nodes-base.loneScaleTrigger';
  version: 1;
  credentials?: LoneScaleTriggerV1Credentials;
  isTrigger: true;
}

export type LoneScaleTriggerV1ParamsNode = LoneScaleTriggerV1NodeBase & {
  config: NodeConfig<LoneScaleTriggerV1Params>;
};

export type LoneScaleTriggerV1Node = LoneScaleTriggerV1ParamsNode;