/**
 * Google Workspace Admin Node - Version 1
 * Discriminator: resource=group, operation=create
 */


interface Credentials {
  gSuiteAdminOAuth2Api: CredentialReference;
}

/** Create a group */
export type GSuiteAdminV1GroupCreateParams = {
  resource: 'group';
  operation: 'create';
/**
 * The group's display name
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The email must be unique
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups.
     */
    description?: string | Expression<string> | PlaceholderValue;
  };
};

export type GSuiteAdminV1GroupCreateOutput = {
  adminCreated?: boolean;
  description?: string;
  email?: string;
  etag?: string;
  id?: string;
  kind?: string;
  name?: string;
};

export type GSuiteAdminV1GroupCreateNode = {
  type: 'n8n-nodes-base.gSuiteAdmin';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GSuiteAdminV1GroupCreateParams>;
  output?: Items<GSuiteAdminV1GroupCreateOutput>;
};