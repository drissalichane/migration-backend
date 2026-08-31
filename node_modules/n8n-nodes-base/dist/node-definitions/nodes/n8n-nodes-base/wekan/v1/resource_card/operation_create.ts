/**
 * Wekan Node - Version 1
 * Discriminator: resource=card, operation=create
 */


interface Credentials {
  wekanApi: CredentialReference;
}

/** Create a new board */
export type WekanV1CardCreateParams = {
  resource: 'card';
  operation: 'create';
/**
 * The ID of the board that list belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    boardId?: string | Expression<string>;
/**
 * The ID of the list to create card in. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    listId?: string | Expression<string>;
/**
 * The title of the card
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * The swimlane ID of the new card. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    swimlaneId?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    authorId?: string | Expression<string>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The new list of assignee IDs attached to the card. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    assignees?: string[];
    /** The new description of the card
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** The new list of member IDs attached to the card. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    members?: string[];
  };
};

export type WekanV1CardCreateNode = {
  type: 'n8n-nodes-base.wekan';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WekanV1CardCreateParams>;
};