/**
 * Onfleet Node - Version 1
 * Discriminator: resource=team, operation=delete
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Delete an Onfleet admin */
export type OnfleetV1TeamDeleteParams = {
  resource: 'team';
  operation: 'delete';
/**
 * The ID of the team object for lookup
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type OnfleetV1TeamDeleteNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1TeamDeleteParams>;
};