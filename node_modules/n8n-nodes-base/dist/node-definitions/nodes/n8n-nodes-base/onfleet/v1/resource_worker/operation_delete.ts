/**
 * Onfleet Node - Version 1
 * Discriminator: resource=worker, operation=delete
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Delete an Onfleet admin */
export type OnfleetV1WorkerDeleteParams = {
  resource: 'worker';
  operation: 'delete';
/**
 * The ID of the worker object for lookup
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type OnfleetV1WorkerDeleteNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1WorkerDeleteParams>;
};