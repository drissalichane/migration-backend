/**
 * UptimeRobot Node - Version 1
 * Discriminator: resource=publicStatusPage, operation=create
 */


interface Credentials {
  uptimeRobotApi: CredentialReference;
}

/** Create a monitor */
export type UptimeRobotV1PublicStatusPageCreateParams = {
  resource: 'publicStatusPage';
  operation: 'create';
/**
 * The friendly name of the status page
 */
    friendlyName?: string | Expression<string> | PlaceholderValue;
/**
 * Monitor IDs to be displayed in status page (the values are separated with a dash (-) or 0 for all monitors)
 */
    monitors?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The domain or subdomain that the status page will run on
     */
    custom_domain?: string | Expression<string> | PlaceholderValue;
    /** The password for the status page
     */
    password?: string | Expression<string> | PlaceholderValue;
    /** The sorting of the status page
     */
    sort?: 1 | 2 | 3 | 4 | Expression<number>;
  };
};

export type UptimeRobotV1PublicStatusPageCreateNode = {
  type: 'n8n-nodes-base.uptimeRobot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<UptimeRobotV1PublicStatusPageCreateParams>;
};