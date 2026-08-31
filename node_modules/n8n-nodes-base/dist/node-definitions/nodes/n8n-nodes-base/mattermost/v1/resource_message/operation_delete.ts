/**
 * Mattermost Node - Version 1
 * Discriminator: resource=message, operation=delete
 */


interface Credentials {
  mattermostApi: CredentialReference;
}

/** Soft delete a channel */
export type MattermostV1MessageDeleteParams = {
  resource: 'message';
  operation: 'delete';
/**
 * ID of the post to delete
 */
    postId?: string | Expression<string> | PlaceholderValue;
};

export type MattermostV1MessageDeleteNode = {
  type: 'n8n-nodes-base.mattermost';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MattermostV1MessageDeleteParams>;
};