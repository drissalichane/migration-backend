/**
 * Clockify Node - Version 1
 * Discriminator: resource=tag, operation=update
 */


interface Credentials {
  clockifyApi: CredentialReference;
}

/** Update a client */
export type ClockifyV1TagUpdateParams = {
  resource: 'tag';
  operation: 'update';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.hide { resource: ["workspace"] }
 * @default []
 */
    workspaceId?: string | Expression<string>;
/**
 * Tag ID
 */
    tagId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Archived
     * @default false
     */
    archived?: boolean | Expression<boolean>;
    /** Name
     */
    name?: string | Expression<string> | PlaceholderValue;
  };
};

export type ClockifyV1TagUpdateNode = {
  type: 'n8n-nodes-base.clockify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClockifyV1TagUpdateParams>;
};