/**
 * Google Workspace Admin Node - Version 1
 * Discriminator: resource=device, operation=update
 */


interface Credentials {
  gSuiteAdminOAuth2Api: CredentialReference;
}

/** Update a ChromeOS device */
export type GSuiteAdminV1DeviceUpdateParams = {
  resource: 'device';
  operation: 'update';
/**
 * Select the device you want to retrieve
 * @default {"mode":"list","value":""}
 */
    deviceId?: { __rl: true; mode: 'list' | 'deviceId'; value: string; cachedResultName?: string };
/**
 * Update Fields
 * @default {}
 */
    updateOptions?: {
    /** The full path to the organizational unit. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    orgUnitPath?: string | Expression<string>;
    /** The annotated user of the device
     */
    annotatedUser?: string | Expression<string> | PlaceholderValue;
    /** The annotated location of the device
     */
    annotatedLocation?: string | Expression<string> | PlaceholderValue;
    /** The annotated asset ID of a device
     */
    annotatedAssetId?: string | Expression<string> | PlaceholderValue;
    /** Add notes to a device
     */
    notes?: string | Expression<string> | PlaceholderValue;
  };
};

export type GSuiteAdminV1DeviceUpdateNode = {
  type: 'n8n-nodes-base.gSuiteAdmin';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GSuiteAdminV1DeviceUpdateParams>;
};