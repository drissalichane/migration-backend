/**
 * Grafana Node - Version 1
 * Discriminator: resource=team, operation=create
 */


interface Credentials {
  grafanaApi: CredentialReference;
}

/** Create a dashboard */
export type GrafanaV1TeamCreateParams = {
  resource: 'team';
  operation: 'create';
/**
 * Name of the team to create
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Email of the team to create
     */
    email?: string | Expression<string> | PlaceholderValue;
  };
};

export type GrafanaV1TeamCreateNode = {
  type: 'n8n-nodes-base.grafana';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GrafanaV1TeamCreateParams>;
};