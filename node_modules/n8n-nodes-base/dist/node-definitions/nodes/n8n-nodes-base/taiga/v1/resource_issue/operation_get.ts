/**
 * Taiga Node - Version 1
 * Discriminator: resource=issue, operation=get
 */


interface Credentials {
  taigaApi: CredentialReference;
}

/** Get an epic */
export type TaigaV1IssueGetParams = {
  resource: 'issue';
  operation: 'get';
/**
 * ID of the issue to retrieve
 */
    issueId?: string | Expression<string> | PlaceholderValue;
};

export type TaigaV1IssueGetNode = {
  type: 'n8n-nodes-base.taiga';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TaigaV1IssueGetParams>;
};