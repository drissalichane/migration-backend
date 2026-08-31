/**
 * Clockify Node - Version 1
 * Discriminator: resource=timeEntry, operation=delete
 */


interface Credentials {
  clockifyApi: CredentialReference;
}

/** Delete a client */
export type ClockifyV1TimeEntryDeleteParams = {
  resource: 'timeEntry';
  operation: 'delete';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.hide { resource: ["workspace"] }
 * @default []
 */
    workspaceId?: string | Expression<string>;
/**
 * Time Entry ID
 */
    timeEntryId?: string | Expression<string> | PlaceholderValue;
};

export type ClockifyV1TimeEntryDeleteNode = {
  type: 'n8n-nodes-base.clockify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClockifyV1TimeEntryDeleteParams>;
};