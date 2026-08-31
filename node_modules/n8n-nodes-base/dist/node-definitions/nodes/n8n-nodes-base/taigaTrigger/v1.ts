/**
 * Taiga Trigger Node - Version 1
 * Handle Taiga events via webhook
 */


export interface TaigaTriggerV1Params {
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    projectId?: string | Expression<string>;
/**
 * Resources to listen to
 * @default ["all"]
 */
    resources?: Array<'all' | 'issue' | 'milestone' | 'task' | 'userstory' | 'wikipage'>;
/**
 * Operations to listen to
 * @default ["all"]
 */
    operations?: Array<'all' | 'create' | 'delete' | 'change'>;
}

export interface TaigaTriggerV1Credentials {
  taigaApi: CredentialReference;
}

interface TaigaTriggerV1NodeBase {
  type: 'n8n-nodes-base.taigaTrigger';
  version: 1;
  credentials?: TaigaTriggerV1Credentials;
  isTrigger: true;
}

export type TaigaTriggerV1ParamsNode = TaigaTriggerV1NodeBase & {
  config: NodeConfig<TaigaTriggerV1Params>;
};

export type TaigaTriggerV1Node = TaigaTriggerV1ParamsNode;