/**
 * Trello Node - Version 1
 * Discriminator: resource=checklist, operation=createCheckItem
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Create a checklist item */
export type TrelloV1ChecklistCreateCheckItemParams = {
  resource: 'checklist';
  operation: 'createCheckItem';
/**
 * The ID of the checklist to update
 */
    checklistId?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the new check item on the checklist
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Whether the check item is already checked when created
     * @default false
     */
    checked?: boolean | Expression<boolean>;
    /** The position of the checklist on the card. One of: top, bottom, or a positive number.
     */
    pos?: string | Expression<string> | PlaceholderValue;
  };
};

export type TrelloV1ChecklistCreateCheckItemOutput = {
  due?: null;
  dueReminder?: null;
  id?: string;
  idChecklist?: string;
  idMember?: null;
  name?: string;
  pos?: number;
  state?: string;
};

export type TrelloV1ChecklistCreateCheckItemNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1ChecklistCreateCheckItemParams>;
  output?: Items<TrelloV1ChecklistCreateCheckItemOutput>;
};