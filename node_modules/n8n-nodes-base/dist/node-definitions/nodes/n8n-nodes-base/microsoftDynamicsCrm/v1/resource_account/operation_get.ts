/**
 * Microsoft Dynamics CRM Node - Version 1
 * Discriminator: resource=account, operation=get
 */


interface Credentials {
  microsoftDynamicsOAuth2Api: CredentialReference;
}

export type MicrosoftDynamicsCrmV1AccountGetParams = {
  resource: 'account';
  operation: 'get';
/**
 * Account ID
 */
    accountId?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    returnFields?: string[];
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    expandFields?: string[];
  };
};

export type MicrosoftDynamicsCrmV1AccountGetNode = {
  type: 'n8n-nodes-base.microsoftDynamicsCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftDynamicsCrmV1AccountGetParams>;
};