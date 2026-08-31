/**
 * Trello Node - Version 1
 * Discriminator: resource=label, operation=create
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Create a new attachment for a card */
export type TrelloV1LabelCreateParams = {
  resource: 'label';
  operation: 'create';
/**
 * The ID of the board
 * @default {"mode":"list","value":""}
 */
    boardId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Name for the label
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * The color for the label
 * @default null
 */
    color?: 'black' | 'blue' | 'green' | 'lime' | 'null' | 'orange' | 'pink' | 'purple' | 'red' | 'sky' | 'yellow' | Expression<string>;
};

export type TrelloV1LabelCreateNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1LabelCreateParams>;
};