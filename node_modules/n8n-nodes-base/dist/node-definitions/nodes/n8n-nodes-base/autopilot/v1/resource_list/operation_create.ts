/**
 * Autopilot Node - Version 1
 * Discriminator: resource=list, operation=create
 */


interface Credentials {
  autopilotApi: CredentialReference;
}

/** Create a list */
export type AutopilotV1ListCreateParams = {
  resource: 'list';
  operation: 'create';
/**
 * Name of the list to create
 */
    name?: string | Expression<string> | PlaceholderValue;
};

export type AutopilotV1ListCreateNode = {
  type: 'n8n-nodes-base.autopilot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AutopilotV1ListCreateParams>;
};