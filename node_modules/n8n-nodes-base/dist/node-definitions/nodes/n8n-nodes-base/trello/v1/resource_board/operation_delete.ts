/**
 * Trello Node - Version 1
 * Discriminator: resource=board, operation=delete
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Delete an attachment */
export type TrelloV1BoardDeleteParams = {
  resource: 'board';
  operation: 'delete';
/**
 * The ID of the board
 * @default {"mode":"list","value":""}
 */
    id?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
};

export type TrelloV1BoardDeleteNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1BoardDeleteParams>;
};