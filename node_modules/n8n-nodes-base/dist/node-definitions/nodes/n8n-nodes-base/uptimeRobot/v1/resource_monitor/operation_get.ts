/**
 * UptimeRobot Node - Version 1
 * Discriminator: resource=monitor, operation=get
 */


interface Credentials {
  uptimeRobotApi: CredentialReference;
}

/** Get account details */
export type UptimeRobotV1MonitorGetParams = {
  resource: 'monitor';
  operation: 'get';
/**
 * The ID of the monitor
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type UptimeRobotV1MonitorGetNode = {
  type: 'n8n-nodes-base.uptimeRobot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<UptimeRobotV1MonitorGetParams>;
};