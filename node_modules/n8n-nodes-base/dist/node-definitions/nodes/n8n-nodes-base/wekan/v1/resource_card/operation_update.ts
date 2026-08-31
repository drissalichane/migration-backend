/**
 * Wekan Node - Version 1
 * Discriminator: resource=card, operation=update
 */


interface Credentials {
  wekanApi: CredentialReference;
}

/** Update a card */
export type WekanV1CardUpdateParams = {
  resource: 'card';
  operation: 'update';
/**
 * The ID of the board that list belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    boardId?: string | Expression<string>;
/**
 * The ID of the list that card belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    listId?: string | Expression<string>;
/**
 * The ID of the card to update. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    cardId?: string | Expression<string>;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Update the owner of the card. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    authorId?: string | Expression<string>;
    /** The new list of assignee IDs attached to the card. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    assignees?: string[];
    /** The new color of the card
     */
    color?: 'black' | 'blue' | 'crimson' | 'darkgreen' | 'gold' | 'gray' | 'green' | 'indigo' | 'lime' | 'magenta' | 'mistyrose' | 'navy' | 'orange' | 'paleturquoise' | 'peachpuff' | 'pink' | 'plum' | 'purple' | 'red' | 'saddlebrown' | 'silver' | 'sky' | 'slateblue' | 'white' | 'yellow' | Expression<string>;
    /** The new description of the card
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** The new due at field of the card
     */
    dueAt?: string | Expression<string>;
    /** The new end at field of the card
     */
    endAt?: string | Expression<string>;
    /** The label IDs attached to the card
     */
    labelIds?: string | Expression<string> | PlaceholderValue;
    /** The new list ID of the card (move operation). Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    listId?: string | Expression<string>;
    /** The new list of member IDs attached to the card. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    members?: string[];
    /** The new over time field of the card
     * @default false
     */
    isOverTime?: boolean | Expression<boolean>;
    /** The parent of the card. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    parentId?: string | Expression<string>;
    /** The new received at field of the card
     */
    receivedAt?: string | Expression<string>;
    /** The internally used sort value of a card
     * @default 0
     */
    sort?: number | Expression<number>;
    /** The new spent time field of the card
     */
    spentTime?: number | Expression<number>;
    /** The new start at field of the card
     */
    startAt?: string | Expression<string>;
    /** The new swimlane ID of the card. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    swimlaneId?: string | Expression<string>;
    /** The new title of the card
     */
    title?: string | Expression<string> | PlaceholderValue;
  };
};

export type WekanV1CardUpdateNode = {
  type: 'n8n-nodes-base.wekan';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WekanV1CardUpdateParams>;
};