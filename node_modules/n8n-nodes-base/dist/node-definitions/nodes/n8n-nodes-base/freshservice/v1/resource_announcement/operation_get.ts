/**
 * Freshservice Node - Version 1
 * Discriminator: resource=announcement, operation=get
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Retrieve an agent */
export type FreshserviceV1AnnouncementGetParams = {
  resource: 'announcement';
  operation: 'get';
/**
 * ID of the announcement to retrieve
 */
    announcementId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1AnnouncementGetNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1AnnouncementGetParams>;
};