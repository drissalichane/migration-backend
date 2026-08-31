/**
 * Microsoft To Do Node - Version 1
 * Discriminator: resource=linkedResource, operation=get
 */


interface Credentials {
  microsoftToDoOAuth2Api: CredentialReference;
}

export type MicrosoftToDoV1LinkedResourceGetParams = {
  resource: 'linkedResource';
  operation: 'get';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    taskListId?: string | Expression<string>;
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
/**
 * Linked Resource ID
 */
    linkedResourceId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftToDoV1LinkedResourceGetNode = {
  type: 'n8n-nodes-base.microsoftToDo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftToDoV1LinkedResourceGetParams>;
};