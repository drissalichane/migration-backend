/**
 * MISP Node - Version 1
 * Discriminator: resource=noticelist, operation=get
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1NoticelistGetParams = {
  resource: 'noticelist';
  operation: 'get';
/**
 * Numeric ID of the noticelist
 */
    noticelistId?: string | Expression<string> | PlaceholderValue;
};

export type MispV1NoticelistGetNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1NoticelistGetParams>;
};