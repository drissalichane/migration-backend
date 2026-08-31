/**
 * MISP Node - Version 1
 * Discriminator: resource=user, operation=update
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1UserUpdateParams = {
  resource: 'user';
  operation: 'update';
/**
 * ID of the user to update
 */
    userId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Email
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** GPG Key
     */
    gpgkey?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    invited_by?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    org_id?: string | Expression<string>;
  };
};

export type MispV1UserUpdateNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1UserUpdateParams>;
};