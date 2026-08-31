/**
 * One Simple API Node - Version 1
 * Discriminator: resource=utility, operation=expandURL
 */


interface Credentials {
  oneSimpleApi: CredentialReference;
}

/** Expand a shortened URL */
export type OneSimpleApiV1UtilityExpandURLParams = {
  resource: 'utility';
  operation: 'expandURL';
/**
 * URL to unshorten
 */
    link?: string | Expression<string> | PlaceholderValue;
};

export type OneSimpleApiV1UtilityExpandURLNode = {
  type: 'n8n-nodes-base.oneSimpleApi';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OneSimpleApiV1UtilityExpandURLParams>;
};