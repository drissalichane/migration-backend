/**
 * Grafana Node - Version 1
 * Discriminator: resource=dashboard, operation=update
 */


interface Credentials {
  grafanaApi: CredentialReference;
}

/** Update a dashboard */
export type GrafanaV1DashboardUpdateParams = {
  resource: 'dashboard';
  operation: 'update';
/**
 * Unique alphabetic identifier or URL of the dashboard to update
 */
    dashboardUidOrUrl?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Folder to move the dashboard into - if the folder is unspecified, the dashboard will be saved to the General folder. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    folderId?: string | Expression<string>;
    /** New title of the dashboard
     */
    title?: string | Expression<string> | PlaceholderValue;
  };
};

export type GrafanaV1DashboardUpdateNode = {
  type: 'n8n-nodes-base.grafana';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GrafanaV1DashboardUpdateParams>;
};