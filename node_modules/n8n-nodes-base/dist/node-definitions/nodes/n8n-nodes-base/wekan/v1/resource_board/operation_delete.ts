/**
 * Wekan Node - Version 1
 * Discriminator: resource=board, operation=delete
 */


interface Credentials {
  wekanApi: CredentialReference;
}

/** Delete a board */
export type WekanV1BoardDeleteParams = {
  resource: 'board';
  operation: 'delete';
/**
 * The ID of the board to delete
 */
    boardId?: string | Expression<string> | PlaceholderValue;
};

export type WekanV1BoardDeleteNode = {
  type: 'n8n-nodes-base.wekan';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WekanV1BoardDeleteParams>;
};