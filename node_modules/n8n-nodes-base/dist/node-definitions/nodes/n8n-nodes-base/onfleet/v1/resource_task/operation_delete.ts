/**
 * Onfleet Node - Version 1
 * Discriminator: resource=task, operation=delete
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Delete an Onfleet admin */
export type OnfleetV1TaskDeleteParams = {
  resource: 'task';
  operation: 'delete';
/**
 * The ID of the task object for lookup
 * @displayOptions.hide { operation: ["create", "getAll"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type OnfleetV1TaskDeleteNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1TaskDeleteParams>;
};