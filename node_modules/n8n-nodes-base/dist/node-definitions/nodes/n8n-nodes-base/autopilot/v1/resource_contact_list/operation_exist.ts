/**
 * Autopilot Node - Version 1
 * Discriminator: resource=contactList, operation=exist
 */


interface Credentials {
  autopilotApi: CredentialReference;
}

/** Check if contact is on list */
export type AutopilotV1ContactListExistParams = {
  resource: 'contactList';
  operation: 'exist';
/**
 * ID of the list to operate on. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    listId?: string | Expression<string>;
/**
 * Can be ID or email
 */
    contactId?: string | Expression<string> | PlaceholderValue;
};

export type AutopilotV1ContactListExistNode = {
  type: 'n8n-nodes-base.autopilot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AutopilotV1ContactListExistParams>;
};