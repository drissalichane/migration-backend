/**
 * Trello Node - Version 1
 * Discriminator: resource=label, operation=removeLabel
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Remove a label from a card */
export type TrelloV1LabelRemoveLabelParams = {
  resource: 'label';
  operation: 'removeLabel';
/**
 * The ID of the card
 * @default {"mode":"list","value":""}
 */
    cardId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * The ID of the label to remove
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type TrelloV1LabelRemoveLabelNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1LabelRemoveLabelParams>;
};