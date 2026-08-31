/**
 * Home Assistant Node - Version 1
 * Discriminator: resource=state, operation=get
 */


interface Credentials {
  homeAssistantApi: CredentialReference;
}

/** Get the configuration */
export type HomeAssistantV1StateGetParams = {
  resource: 'state';
  operation: 'get';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    entityId?: string | Expression<string>;
};

export type HomeAssistantV1StateGetOutput = {
  attributes?: {
    device_class?: string;
    friendly_name?: string;
  };
  context?: {
    id?: string;
  };
  entity_id?: string;
  last_changed?: string;
  last_reported?: string;
  last_updated?: string;
  state?: string;
};

export type HomeAssistantV1StateGetNode = {
  type: 'n8n-nodes-base.homeAssistant';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HomeAssistantV1StateGetParams>;
  output?: Items<HomeAssistantV1StateGetOutput>;
};