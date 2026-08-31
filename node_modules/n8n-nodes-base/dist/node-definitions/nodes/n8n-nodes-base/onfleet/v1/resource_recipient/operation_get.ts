/**
 * Onfleet Node - Version 1
 * Discriminator: resource=recipient, operation=get
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Get container information */
export type OnfleetV1RecipientGetParams = {
  resource: 'recipient';
  operation: 'get';
/**
 * The variable that is used for looking up a recipient
 * @default id
 */
    getBy?: 'id' | 'phone' | 'name' | Expression<string>;
/**
 * The ID of the recipient object for lookup
 * @displayOptions.show { getBy: ["id"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the recipient for lookup
 * @displayOptions.show { getBy: ["name"] }
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * The phone of the recipient for lookup
 * @displayOptions.show { getBy: ["phone"] }
 */
    phone?: string | Expression<string> | PlaceholderValue;
};

export type OnfleetV1RecipientGetNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1RecipientGetParams>;
};