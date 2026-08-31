/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=observable, operation=create
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1ObservableCreateParams = {
  resource: 'observable';
  operation: 'create';
/**
 * Create in
 * @default case
 */
    createIn?: 'case' | 'alert' | Expression<string>;
/**
 * Case
 * @displayOptions.show { createIn: ["case"] }
 * @default {"mode":"list","value":""}
 */
    id?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @default file
 */
    dataType?: string | Expression<string>;
/**
 * Data
 * @displayOptions.hide { dataType: ["file"] }
 */
    data?: string | Expression<string> | PlaceholderValue;
/**
 * Array of supported attachments to add to the message
 * @displayOptions.show { dataType: ["file"] }
 * @default {}
 */
    attachmentsUi?: {
        /** Values
     */
    values?: Array<{
      /** Add the field name from the input node
       * @hint The name of the field with the attachment in the node input
       * @default data
       */
      field?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Fields
 * @default {"mappingMode":"defineBelow","value":null}
 */
    observableFields?: unknown;
};

export type TheHiveProjectV1ObservableCreateNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1ObservableCreateParams>;
};