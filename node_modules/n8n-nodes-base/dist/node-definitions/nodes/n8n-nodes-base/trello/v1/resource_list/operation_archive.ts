/**
 * Trello Node - Version 1
 * Discriminator: resource=list, operation=archive
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Archive/Unarchive a list */
export type TrelloV1ListArchiveParams = {
  resource: 'list';
  operation: 'archive';
/**
 * The ID of the list to archive or unarchive
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Whether the list should be archived or unarchived
 * @default false
 */
    archive?: boolean | Expression<boolean>;
};

export type TrelloV1ListArchiveNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1ListArchiveParams>;
};