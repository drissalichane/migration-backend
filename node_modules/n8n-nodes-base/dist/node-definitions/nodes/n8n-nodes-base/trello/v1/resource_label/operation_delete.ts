/**
 * Trello Node - Version 1
 * Discriminator: resource=label, operation=delete
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Delete an attachment */
export type TrelloV1LabelDeleteParams = {
  resource: 'label';
  operation: 'delete';
/**
 * The ID of the label to delete
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type TrelloV1LabelDeleteNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1LabelDeleteParams>;
};