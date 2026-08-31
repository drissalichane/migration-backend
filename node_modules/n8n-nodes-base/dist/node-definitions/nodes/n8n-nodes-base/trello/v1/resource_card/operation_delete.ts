/**
 * Trello Node - Version 1
 * Discriminator: resource=card, operation=delete
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Delete an attachment */
export type TrelloV1CardDeleteParams = {
  resource: 'card';
  operation: 'delete';
/**
 * The ID of the card
 * @default {"mode":"list","value":""}
 */
    id?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
};

export type TrelloV1CardDeleteNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1CardDeleteParams>;
};