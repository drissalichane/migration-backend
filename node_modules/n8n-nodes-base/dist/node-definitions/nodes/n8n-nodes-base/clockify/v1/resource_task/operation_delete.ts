/**
 * Clockify Node - Version 1
 * Discriminator: resource=task, operation=delete
 */


interface Credentials {
  clockifyApi: CredentialReference;
}

/** Delete a client */
export type ClockifyV1TaskDeleteParams = {
  resource: 'task';
  operation: 'delete';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.hide { resource: ["workspace"] }
 * @default []
 */
    workspaceId?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    projectId?: string | Expression<string>;
/**
 * ID of task to delete
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type ClockifyV1TaskDeleteNode = {
  type: 'n8n-nodes-base.clockify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClockifyV1TaskDeleteParams>;
};