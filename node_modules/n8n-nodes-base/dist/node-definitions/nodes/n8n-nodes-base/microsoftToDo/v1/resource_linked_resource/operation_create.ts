/**
 * Microsoft To Do Node - Version 1
 * Discriminator: resource=linkedResource, operation=create
 */


interface Credentials {
  microsoftToDoOAuth2Api: CredentialReference;
}

export type MicrosoftToDoV1LinkedResourceCreateParams = {
  resource: 'linkedResource';
  operation: 'create';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    taskListId?: string | Expression<string>;
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
/**
 * Field indicating title of the linked entity
 */
    displayName?: string | Expression<string> | PlaceholderValue;
/**
 * App name of the source that is sending the linked entity
 */
    applicationName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** ID of the object that is associated with this task on the third-party/partner system
     */
    externalId?: string | Expression<string> | PlaceholderValue;
    /** Deeplink to the linked entity
     */
    webUrl?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftToDoV1LinkedResourceCreateNode = {
  type: 'n8n-nodes-base.microsoftToDo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftToDoV1LinkedResourceCreateParams>;
};