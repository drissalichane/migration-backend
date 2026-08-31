/**
 * HubSpot Node - Version 2
 * Discriminator: resource=contactList, operation=add
 */


interface Credentials {
  hubspotApi: CredentialReference;
  hubspotAppToken: CredentialReference;
  hubspotOAuth2Api: CredentialReference;
}

/** Add contact to a list */
export type HubspotV2ContactListAddParams = {
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
 * Contact to Add
 * @displayOptions.show { by: ["id"] }
 */
    id?: number | Expression<number>;
/**
 * List to Add To
 */
    listId?: number | Expression<number>;
};

export type HubspotV2ContactListAddOutput = {
  discarded?: Array<number>;
  invalidEmails?: Array<string>;
  invalidVids?: Array<number>;
  updated?: Array<number>;
};

export type HubspotV2ContactListAddNode = {
  type: 'n8n-nodes-base.hubspot';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<HubspotV2ContactListAddParams>;
  output?: Items<HubspotV2ContactListAddOutput>;
};