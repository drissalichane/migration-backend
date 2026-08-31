/**
 * HubSpot Node - Version 1
 * Discriminator: resource=contactList, operation=add
 */


interface Credentials {
  hubspotApi: CredentialReference;
  hubspotAppToken: CredentialReference;
  hubspotOAuth2Api: CredentialReference;
}

/** Add contact to a list */
export type HubspotV1ContactListAddParams = {
  resource: 'contactList';
  operation: 'add';
  authentication?: 'apiKey' | 'appToken' | 'oAuth2' | Expression<string>;
/**
 * By
 * @default email
 */
    by?: 'id' | 'email' | Expression<string>;
/**
 * Email
 * @displayOptions.show { by: ["email"] }
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Contact ID
 * @displayOptions.show { by: ["id"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * List ID
 */
    listId?: string | Expression<string> | PlaceholderValue;
};

export type HubspotV1ContactListAddNode = {
  type: 'n8n-nodes-base.hubspot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HubspotV1ContactListAddParams>;
};