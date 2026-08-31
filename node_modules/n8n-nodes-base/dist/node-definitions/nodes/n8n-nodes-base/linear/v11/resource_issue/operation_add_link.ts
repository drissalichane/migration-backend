/**
 * Linear Node - Version 1.1
 * Discriminator: resource=issue, operation=addLink
 */


interface Credentials {
  linearApi: CredentialReference;
  linearOAuth2Api: CredentialReference;
}

/** Add a link to an issue */
export type LinearV11IssueAddLinkParams = {
  resource: 'issue';
  operation: 'addLink';
  authentication?: 'apiToken' | 'oAuth2' | Expression<string>;
/**
 * Issue ID
 */
    issueId?: string | Expression<string> | PlaceholderValue;
/**
 * Link
 */
    link?: string | Expression<string> | PlaceholderValue;
};

export type LinearV11IssueAddLinkNode = {
  type: 'n8n-nodes-base.linear';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<LinearV11IssueAddLinkParams>;
};