/**
 * Microsoft To Do Node - Version 1
 * Discriminator: resource=list, operation=getAll
 */


interface Credentials {
  microsoftToDoOAuth2Api: CredentialReference;
}

export type MicrosoftToDoV1ListGetAllParams = {
  resource: 'list';
  operation: 'getAll';
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

export type MicrosoftToDoV1ListGetAllOutput = {
  '@odata.etag'?: string;
  displayName?: string;
  id?: string;
  isOwner?: boolean;
  isShared?: boolean;
  wellknownListName?: string;
};

export type MicrosoftToDoV1ListGetAllNode = {
  type: 'n8n-nodes-base.microsoftToDo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftToDoV1ListGetAllParams>;
  output?: Items<MicrosoftToDoV1ListGetAllOutput>;
};