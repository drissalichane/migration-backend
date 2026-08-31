/**
 * Affinity Node - Version 1
 * Discriminator: resource=organization, operation=create
 */


interface Credentials {
  affinityApi: CredentialReference;
}

/** Create a list entry */
export type AffinityV1OrganizationCreateParams = {
  resource: 'organization';
  operation: 'create';
/**
 * The name of the organization
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * The domain name of the organization
 */
    domain?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Persons that the new organization will be associated with. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    persons?: string[];
  };
};

export type AffinityV1OrganizationCreateOutput = {
  crunchbase_uuid?: null;
  domain?: string;
  domains?: Array<string>;
  global?: boolean;
  id?: number;
  name?: string;
  person_ids?: Array<number>;
};

export type AffinityV1OrganizationCreateNode = {
  type: 'n8n-nodes-base.affinity';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AffinityV1OrganizationCreateParams>;
  output?: Items<AffinityV1OrganizationCreateOutput>;
};