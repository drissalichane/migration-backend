/**
 * Clockify Node - Version 1
 * Discriminator: resource=client, operation=update
 */


interface Credentials {
  clockifyApi: CredentialReference;
}

/** Update a client */
export type ClockifyV1ClientUpdateParams = {
  resource: 'client';
  operation: 'update';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.hide { resource: ["workspace"] }
 * @default []
 */
    workspaceId?: string | Expression<string>;
/**
 * Client ID
 */
    clientId?: string | Expression<string> | PlaceholderValue;
/**
 * Name
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Address of client being created/updated
     */
    address?: string | Expression<string> | PlaceholderValue;
    /** Archived
     * @default false
     */
    archived?: boolean | Expression<boolean>;
  };
};

export type ClockifyV1ClientUpdateNode = {
  type: 'n8n-nodes-base.clockify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClockifyV1ClientUpdateParams>;
};