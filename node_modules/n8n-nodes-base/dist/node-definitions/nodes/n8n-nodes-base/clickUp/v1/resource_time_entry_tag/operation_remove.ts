/**
 * ClickUp Node - Version 1
 * Discriminator: resource=timeEntryTag, operation=remove
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Remove a tag from a task */
export type ClickUpV1TimeEntryTagRemoveParams = {
  resource: 'timeEntryTag';
  operation: 'remove';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    team?: string | Expression<string>;
/**
 * Time Entry IDs
 */
    timeEntryIds?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @default []
 */
    tagNames?: string[];
};

export type ClickUpV1TimeEntryTagRemoveNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1TimeEntryTagRemoveParams>;
};