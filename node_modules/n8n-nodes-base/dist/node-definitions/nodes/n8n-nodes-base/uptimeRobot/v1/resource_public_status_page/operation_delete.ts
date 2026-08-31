/**
 * UptimeRobot Node - Version 1
 * Discriminator: resource=publicStatusPage, operation=delete
 */


interface Credentials {
  uptimeRobotApi: CredentialReference;
}

/** Delete a monitor */
export type UptimeRobotV1PublicStatusPageDeleteParams = {
  resource: 'publicStatusPage';
  operation: 'delete';
/**
 * The ID of the public status page
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type UptimeRobotV1PublicStatusPageDeleteNode = {
  type: 'n8n-nodes-base.uptimeRobot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<UptimeRobotV1PublicStatusPageDeleteParams>;
};