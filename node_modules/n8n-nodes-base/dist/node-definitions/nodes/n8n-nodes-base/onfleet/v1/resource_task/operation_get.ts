/**
 * Onfleet Node - Version 1
 * Discriminator: resource=task, operation=get
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Get container information */
export type OnfleetV1TaskGetParams = {
  resource: 'task';
  operation: 'get';
/**
 * The ID of the task object for lookup
 * @displayOptions.hide { operation: ["create", "getAll"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type OnfleetV1TaskGetNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1TaskGetParams>;
};