/**
 * Databricks Node - Version 1
 * Discriminator: resource=genie, operation=startConversation
 */


interface Credentials {
  databricksApi: CredentialReference;
  databricksOAuth2Api: CredentialReference;
}

/** AI-powered data assistant. <a href="https://docs.databricks.com/genie/index.html" target="_blank">Learn more</a>. */
export type DatabricksV1GenieStartConversationParams = {
  resource: 'genie';
  operation: 'startConversation';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The ID of the Genie space
 */
    spaceId?: string | Expression<string> | PlaceholderValue;
/**
 * The initial message to start the conversation
 */
    initialMessage?: string | Expression<string> | PlaceholderValue;
};

export type DatabricksV1GenieStartConversationNode = {
  type: 'n8n-nodes-base.databricks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DatabricksV1GenieStartConversationParams>;
};