/**
 * UptimeRobot Node - Version 1
 * Discriminator: resource=maintenanceWindow, operation=get
 */


interface Credentials {
  uptimeRobotApi: CredentialReference;
}

/** Get account details */
export type UptimeRobotV1MaintenanceWindowGetParams = {
  resource: 'maintenanceWindow';
  operation: 'get';
/**
 * The ID of the maintenance window
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type UptimeRobotV1MaintenanceWindowGetNode = {
  type: 'n8n-nodes-base.uptimeRobot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<UptimeRobotV1MaintenanceWindowGetParams>;
};