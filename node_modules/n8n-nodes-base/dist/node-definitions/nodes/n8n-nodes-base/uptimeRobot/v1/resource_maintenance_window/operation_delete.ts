/**
 * UptimeRobot Node - Version 1
 * Discriminator: resource=maintenanceWindow, operation=delete
 */


interface Credentials {
  uptimeRobotApi: CredentialReference;
}

/** Delete a monitor */
export type UptimeRobotV1MaintenanceWindowDeleteParams = {
  resource: 'maintenanceWindow';
  operation: 'delete';
/**
 * The ID of the maintenance window
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type UptimeRobotV1MaintenanceWindowDeleteNode = {
  type: 'n8n-nodes-base.uptimeRobot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<UptimeRobotV1MaintenanceWindowDeleteParams>;
};