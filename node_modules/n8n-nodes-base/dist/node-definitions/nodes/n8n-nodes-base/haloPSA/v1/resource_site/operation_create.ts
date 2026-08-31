/**
 * HaloPSA Node - Version 1
 * Discriminator: resource=site, operation=create
 */


interface Credentials {
  haloPSAApi: CredentialReference;
}

/** Create a client */
export type HaloPSAV1SiteCreateParams = {
  resource: 'site';
  operation: 'create';
/**
 * Enter site name
 */
    siteName?: string | Expression<string> | PlaceholderValue;
/**
 * Whether client can be selected by ID
 * @default false
 */
    selectOption?: boolean | Expression<boolean>;
/**
 * Client ID
 * @displayOptions.show { selectOption: [true] }
 */
    clientId?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Main Contact
     */
    maincontact_name?: string | Expression<string> | PlaceholderValue;
    /** Notes
     */
    notes?: string | Expression<string> | PlaceholderValue;
    /** Phone Number
     */
    phonenumber?: string | Expression<string> | PlaceholderValue;
  };
};

export type HaloPSAV1SiteCreateNode = {
  type: 'n8n-nodes-base.haloPSA';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HaloPSAV1SiteCreateParams>;
};