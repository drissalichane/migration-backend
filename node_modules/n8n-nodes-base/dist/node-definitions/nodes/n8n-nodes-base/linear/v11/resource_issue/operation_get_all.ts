/**
 * Linear Node - Version 1.1
 * Discriminator: resource=issue, operation=getAll
 */


interface Credentials {
  linearApi: CredentialReference;
  linearOAuth2Api: CredentialReference;
}

/** Get many issues */
export type LinearV11IssueGetAllParams = {
  resource: 'issue';
  operation: 'getAll';
  authentication?: 'apiToken' | 'oAuth2' | Expression<string>;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
};

export type LinearV11IssueGetAllOutput = {
  archivedAt?: null;
  createdAt?: string;
  creator?: {
    displayName?: string;
    id?: string;
  };
  id?: string;
  identifier?: string;
  priority?: number;
  state?: {
    id?: string;
    name?: string;
  };
  title?: string;
};

export type LinearV11IssueGetAllNode = {
  type: 'n8n-nodes-base.linear';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<LinearV11IssueGetAllParams>;
  output?: Items<LinearV11IssueGetAllOutput>;
};