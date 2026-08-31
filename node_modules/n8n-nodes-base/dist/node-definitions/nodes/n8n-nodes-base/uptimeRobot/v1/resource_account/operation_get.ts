/**
 * UptimeRobot Node - Version 1
 * Discriminator: resource=account, operation=get
 */


interface Credentials {
  uptimeRobotApi: CredentialReference;
}

/** Get account details */
export type UptimeRobotV1AccountGetParams = {
  resource: 'account';
  operation: 'get';
};

export type UptimeRobotV1AccountGetNode = {
  type: 'n8n-nodes-base.uptimeRobot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<UptimeRobotV1AccountGetParams>;
};