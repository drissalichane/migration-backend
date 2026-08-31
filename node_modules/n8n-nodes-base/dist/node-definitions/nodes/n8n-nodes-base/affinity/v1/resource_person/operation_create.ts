/**
 * Affinity Node - Version 1
 * Discriminator: resource=person, operation=create
 */


interface Credentials {
  affinityApi: CredentialReference;
}

/** Create a list entry */
export type AffinityV1PersonCreateParams = {
  resource: 'person';
  operation: 'create';
/**
 * The first name of the person
 */
    firstName?: string | Expression<string> | PlaceholderValue;
/**
 * The last name of the person
 */
    lastName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Organizations that the person is associated with. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    organizations?: string[];
  };
/**
 * The email addresses of the person
 * @default []
 */
    emails?: string | Expression<string> | PlaceholderValue;
};

export type AffinityV1PersonCreateNode = {
  type: 'n8n-nodes-base.affinity';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AffinityV1PersonCreateParams>;
};