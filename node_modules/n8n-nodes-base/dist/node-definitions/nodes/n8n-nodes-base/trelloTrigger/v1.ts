/**
 * Trello Trigger Node - Version 1
 * Starts the workflow when Trello events occur
 */


export interface TrelloTriggerV1Params {
/**
 * ID of the model of which to subscribe to events
 */
    id?: string | Expression<string> | PlaceholderValue;
}

export interface TrelloTriggerV1Credentials {
  trelloApi: CredentialReference;
}

interface TrelloTriggerV1NodeBase {
  type: 'n8n-nodes-base.trelloTrigger';
  version: 1;
  credentials?: TrelloTriggerV1Credentials;
  isTrigger: true;
}

export type TrelloTriggerV1ParamsNode = TrelloTriggerV1NodeBase & {
  config: NodeConfig<TrelloTriggerV1Params>;
};

export type TrelloTriggerV1Node = TrelloTriggerV1ParamsNode;