/**
 * UptimeRobot Node - Version 1
 * Discriminator: resource=alertContact, operation=update
 */


interface Credentials {
  uptimeRobotApi: CredentialReference;
}

/** Update a monitor */
export type UptimeRobotV1AlertContactUpdateParams = {
  resource: 'alertContact';
  operation: 'update';
/**
 * The ID of the alert contact
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** The friendly name of the alert contact
     */
    friendly_name?: string | Expression<string> | PlaceholderValue;
    /** The correspondent value for the alert contact type (can only be used if it is a Webhook alert contact)
     */
    value?: string | Expression<string> | PlaceholderValue;
  };
};

export type UptimeRobotV1AlertContactUpdateNode = {
  type: 'n8n-nodes-base.uptimeRobot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<UptimeRobotV1AlertContactUpdateParams>;
};