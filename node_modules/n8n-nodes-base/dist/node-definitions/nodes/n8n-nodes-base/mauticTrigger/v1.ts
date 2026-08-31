/**
 * Mautic Trigger Node - Version 1
 * Handle Mautic events via webhooks
 */


export interface MauticTriggerV1Params {
  authentication?: 'credentials' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @default []
 */
    events?: string[];
/**
 * Order direction for queued events in one webhook. Can be “DESC” or “ASC”.
 * @default ASC
 */
    eventsOrder?: 'ASC' | 'DESC' | Expression<string>;
}

export interface MauticTriggerV1Credentials {
  mauticApi: CredentialReference;
  mauticOAuth2Api: CredentialReference;
}

interface MauticTriggerV1NodeBase {
  type: 'n8n-nodes-base.mauticTrigger';
  version: 1;
  credentials?: MauticTriggerV1Credentials;
  isTrigger: true;
}

export type MauticTriggerV1ParamsNode = MauticTriggerV1NodeBase & {
  config: NodeConfig<MauticTriggerV1Params>;
};

export type MauticTriggerV1Node = MauticTriggerV1ParamsNode;