/**
 * Cal.com Trigger Node - Version 2
 * Handle Cal.com events via webhooks
 */


export interface CalTriggerV2Params {
  events?: Array<'BOOKING_CANCELLED' | 'BOOKING_CREATED' | 'BOOKING_RESCHEDULED' | 'MEETING_ENDED'>;
/**
 * API Version
 * @default 2
 */
    version?: 1 | 2 | Expression<number>;
  options?: {
    /** The ID of the App to monitor
     */
    appId?: string | Expression<string> | PlaceholderValue;
    /** The EventType to monitor. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    eventTypeId?: string | Expression<string>;
    /** Template to customize the webhook payload
     */
    payloadTemplate?: string | Expression<string> | PlaceholderValue;
  };
}

export interface CalTriggerV2Credentials {
  calApi: CredentialReference;
}

interface CalTriggerV2NodeBase {
  type: 'n8n-nodes-base.calTrigger';
  version: 2;
  credentials?: CalTriggerV2Credentials;
  isTrigger: true;
}

export type CalTriggerV2ParamsNode = CalTriggerV2NodeBase & {
  config: NodeConfig<CalTriggerV2Params>;
};

export type CalTriggerV2Node = CalTriggerV2ParamsNode;