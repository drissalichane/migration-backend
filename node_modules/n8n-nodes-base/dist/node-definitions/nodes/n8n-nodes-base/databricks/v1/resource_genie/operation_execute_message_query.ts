/**
 * Databricks Node - Version 1
 * Discriminator: resource=genie, operation=executeMessageQuery
 */


interface Credentials {
  databricksApi: CredentialReference;
  databricksOAuth2Api: CredentialReference;
}

/** AI-powered data assistant. <a href="https://docs.databricks.com/genie/index.html" target="_blank">Learn more</a>. */
export type DatabricksV1GenieExecuteMessageQueryParams = {
  resource: 'genie';
  operation: 'executeMessageQuery';
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
/**
 * The ID of the message attachment
 */
    attachmentId?: string | Expression<string> | PlaceholderValue;
};

export type DatabricksV1GenieExecuteMessageQueryNode = {
  type: 'n8n-nodes-base.databricks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DatabricksV1GenieExecuteMessageQueryParams>;
};