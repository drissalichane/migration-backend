/**
 * SendGrid Node - Version 1
 * Discriminator: resource=list, operation=update
 */


interface Credentials {
  sendGridApi: CredentialReference;
}

/** Update a list */
export type SendGridV1ListUpdateParams = {
  resource: 'list';
  operation: 'update';
/**
 * ID of the list
 */
    listId?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the list
 */
    name?: string | Expression<string> | PlaceholderValue;
};

export type SendGridV1ListUpdateNode = {
  type: 'n8n-nodes-base.sendGrid';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SendGridV1ListUpdateParams>;
};