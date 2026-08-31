/**
 * Grafana Node - Version 1
 * Discriminator: resource=team, operation=update
 */


interface Credentials {
  grafanaApi: CredentialReference;
}

/** Update a dashboard */
export type GrafanaV1TeamUpdateParams = {
  resource: 'team';
  operation: 'update';
/**
 * ID of the team to update
 */
    teamId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Email of the team to update
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Name of the team to update
     */
    name?: string | Expression<string> | PlaceholderValue;
  };
};

export type GrafanaV1TeamUpdateNode = {
  type: 'n8n-nodes-base.grafana';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GrafanaV1TeamUpdateParams>;
};