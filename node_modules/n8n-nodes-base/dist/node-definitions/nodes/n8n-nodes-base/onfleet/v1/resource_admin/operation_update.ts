/**
 * Onfleet Node - Version 1
 * Discriminator: resource=admin, operation=update
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Update an Onfleet admin */
export type OnfleetV1AdminUpdateParams = {
  resource: 'admin';
  operation: 'update';
/**
 * The ID of the admin object for lookup
 * @displayOptions.hide { operation: ["create", "getAll"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** The administrator's name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** The administrator's phone number
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Whether this administrator can perform write operations
     * @default false
     */
    isReadOnly?: boolean | Expression<boolean>;
  };
};

export type OnfleetV1AdminUpdateNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1AdminUpdateParams>;
};