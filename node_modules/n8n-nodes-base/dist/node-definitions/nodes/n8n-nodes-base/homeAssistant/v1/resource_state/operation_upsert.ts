/**
 * Home Assistant Node - Version 1
 * Discriminator: resource=state, operation=upsert
 */


interface Credentials {
  homeAssistantApi: CredentialReference;
}

/** Create a new record, or update the current one if it already exists (upsert) */
export type HomeAssistantV1StateUpsertParams = {
  resource: 'state';
  operation: 'upsert';
/**
 * The entity ID for which a state will be created. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    entityId?: string | Expression<string>;
/**
 * State
 */
    state?: string | Expression<string> | PlaceholderValue;
/**
 * State Attributes
 * @default {}
 */
    stateAttributes?: {
        /** Attributes
     */
    attributes?: Array<{
      /** Name of the attribute
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Value of the attribute
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type HomeAssistantV1StateUpsertOutput = {
  context?: {
    id?: string;
    parent_id?: null;
    user_id?: string;
  };
  entity_id?: string;
  last_changed?: string;
  last_reported?: string;
  last_updated?: string;
  state?: string;
};

export type HomeAssistantV1StateUpsertNode = {
  type: 'n8n-nodes-base.homeAssistant';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HomeAssistantV1StateUpsertParams>;
  output?: Items<HomeAssistantV1StateUpsertOutput>;
};