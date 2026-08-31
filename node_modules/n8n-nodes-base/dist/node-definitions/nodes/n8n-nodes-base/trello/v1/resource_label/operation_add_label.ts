/**
 * Trello Node - Version 1
 * Discriminator: resource=label, operation=addLabel
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Add a label to a card */
export type TrelloV1LabelAddLabelParams = {
  resource: 'label';
  operation: 'addLabel';
/**
 * The ID of the card
 * @default {"mode":"list","value":""}
 */
    cardId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * The ID of the label to add
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type TrelloV1LabelAddLabelNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1LabelAddLabelParams>;
};