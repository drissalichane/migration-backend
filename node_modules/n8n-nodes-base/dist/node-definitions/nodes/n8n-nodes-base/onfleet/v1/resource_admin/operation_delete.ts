/**
 * Onfleet Node - Version 1
 * Discriminator: resource=admin, operation=delete
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Delete an Onfleet admin */
export type OnfleetV1AdminDeleteParams = {
  resource: 'admin';
  operation: 'delete';
/**
 * The ID of the admin object for lookup
 * @displayOptions.hide { operation: ["create", "getAll"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type OnfleetV1AdminDeleteNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1AdminDeleteParams>;
};