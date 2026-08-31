/**
 * Netlify Node - Version 1
 * Discriminator: resource=site, operation=get
 */


interface Credentials {
  netlifyApi: CredentialReference;
}

/** Get a deployment */
export type NetlifyV1SiteGetParams = {
  resource: 'site';
  operation: 'get';
/**
 * Site ID
 */
    siteId?: string | Expression<string> | PlaceholderValue;
};

export type NetlifyV1SiteGetNode = {
  type: 'n8n-nodes-base.netlify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<NetlifyV1SiteGetParams>;
};