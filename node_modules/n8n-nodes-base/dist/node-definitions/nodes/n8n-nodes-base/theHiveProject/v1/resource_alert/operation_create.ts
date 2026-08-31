/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=alert, operation=create
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1AlertCreateParams = {
  resource: 'alert';
  operation: 'create';
/**
 * Fields
 * @default {"mappingMode":"defineBelow","value":null}
 */
    alertFields?: unknown;
/**
 * Observables
 * @default {}
 */
    observableUi?: {
        /** Values
     */
    values?: Array<{
      /** Type of the observable. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      dataType?: string | Expression<string>;
      /** Data
       * @displayOptions.hide { dataType: ["file"] }
       */
      data?: string | Expression<string> | PlaceholderValue;
      /** Input Binary Field
       * @hint The name of the input binary field containing the file to be written
       * @displayOptions.show { dataType: ["file"] }
       * @default data
       */
      binaryProperty?: string | Expression<string> | PlaceholderValue;
      /** Message
       */
      message?: string | Expression<string> | PlaceholderValue;
      /** Tags
       */
      tags?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type TheHiveProjectV1AlertCreateNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1AlertCreateParams>;
};