/**
 * UptimeRobot Node - Version 1
 * Discriminator: resource=monitor, operation=create
 */


interface Credentials {
  uptimeRobotApi: CredentialReference;
}

/** Create a monitor */
export type UptimeRobotV1MonitorCreateParams = {
  resource: 'monitor';
  operation: 'create';
/**
 * The friendly name of the monitor
 */
    friendlyName?: string | Expression<string> | PlaceholderValue;
/**
 * The type of the monitor
 */
    type?: 5 | 1 | 2 | 3 | 4 | Expression<number>;
/**
 * The URL/IP of the monitor
 */
    url?: string | Expression<string> | PlaceholderValue;
};

export type UptimeRobotV1MonitorCreateNode = {
  type: 'n8n-nodes-base.uptimeRobot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<UptimeRobotV1MonitorCreateParams>;
};