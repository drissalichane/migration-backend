/**
 * MISP Node - Version 1
 * Discriminator: resource=user, operation=create
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1UserCreateParams = {
  resource: 'user';
  operation: 'create';
/**
 * Email
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Role IDs are available in the MISP dashboard at /roles/index
 */
    role_id?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
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

export type MispV1UserCreateNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1UserCreateParams>;
};