/**
 * Grafana Node - Version 1
 * Discriminator: resource=user, operation=delete
 */


interface Credentials {
  grafanaApi: CredentialReference;
}

/** Delete a dashboard */
export type GrafanaV1UserDeleteParams = {
  resource: 'user';
  operation: 'delete';
/**
 * ID of the user to delete
 */
    userId?: string | Expression<string> | PlaceholderValue;
};

export type GrafanaV1UserDeleteNode = {
  type: 'n8n-nodes-base.grafana';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GrafanaV1UserDeleteParams>;
};