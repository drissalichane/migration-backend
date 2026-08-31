/**
 * Taiga Node - Version 1
 * Discriminator: resource=epic, operation=delete
 */


interface Credentials {
  taigaApi: CredentialReference;
}

/** Delete an epic */
export type TaigaV1EpicDeleteParams = {
  resource: 'epic';
  operation: 'delete';
/**
 * ID of the epic to delete
 */
    epicId?: string | Expression<string> | PlaceholderValue;
};

export type TaigaV1EpicDeleteNode = {
  type: 'n8n-nodes-base.taiga';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TaigaV1EpicDeleteParams>;
};