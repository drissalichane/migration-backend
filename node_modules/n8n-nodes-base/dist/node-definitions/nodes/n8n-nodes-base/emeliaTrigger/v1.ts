/**
 * Emelia Trigger Node - Version 1
 * Handle Emelia campaign activity events via webhooks
 */


export interface EmeliaTriggerV1Params {
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    campaignId?: string | Expression<string>;
  events?: Array<'bounced' | 'opened' | 'replied' | 'sent' | 'clicked' | 'unsubscribed'>;
}

export interface EmeliaTriggerV1Credentials {
  emeliaApi: CredentialReference;
}

interface EmeliaTriggerV1NodeBase {
  type: 'n8n-nodes-base.emeliaTrigger';
  version: 1;
  credentials?: EmeliaTriggerV1Credentials;
  isTrigger: true;
}

export type EmeliaTriggerV1ParamsNode = EmeliaTriggerV1NodeBase & {
  config: NodeConfig<EmeliaTriggerV1Params>;
};

export type EmeliaTriggerV1Node = EmeliaTriggerV1ParamsNode;