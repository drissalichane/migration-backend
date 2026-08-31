/**
 * Databricks Node - Version 1
 * Discriminator: resource=genie, operation=getMessage
 */


interface Credentials {
  databricksApi: CredentialReference;
  databricksOAuth2Api: CredentialReference;
}

/** AI-powered data assistant. <a href="https://docs.databricks.com/genie/index.html" target="_blank">Learn more</a>. */
export type DatabricksV1GenieGetMessageParams = {
  resource: 'genie';
  operation: 'getMessage';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The ID of the Genie space
 */
    spaceId?: string | Expression<string> | PlaceholderValue;
/**
 * The ID of the conversation
 */
    conversationId?: string | Expression<string> | PlaceholderValue;
/**
 * The ID of the message
 */
    messageId?: string | Expression<string> | PlaceholderValue;
};

export type DatabricksV1GenieGetMessageNode = {
  type: 'n8n-nodes-base.databricks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DatabricksV1GenieGetMessageParams>;
};