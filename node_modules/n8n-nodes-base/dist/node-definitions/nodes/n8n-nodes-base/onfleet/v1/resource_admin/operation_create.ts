/**
 * Onfleet Node - Version 1
 * Discriminator: resource=admin, operation=create
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Create a new Onfleet admin */
export type OnfleetV1AdminCreateParams = {
  resource: 'admin';
  operation: 'create';
/**
 * The ID of the admin object for lookup
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * The administrator's name
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * The administrator's email address
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The administrator's phone number
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Whether this administrator can perform write operations
     * @default false
     */
    isReadOnly?: boolean | Expression<boolean>;
  };
};

export type OnfleetV1AdminCreateNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1AdminCreateParams>;
};