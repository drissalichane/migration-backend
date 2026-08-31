/**
 * ServiceNow Node - Version 1
 * Discriminator: resource=attachment, operation=upload
 */


interface Credentials {
  serviceNowOAuth2Api: CredentialReference;
  serviceNowBasicApi: CredentialReference;
}

/** Upload an attachment to a specific table record */
export type ServiceNowV1AttachmentUploadParams = {
  resource: 'attachment';
  operation: 'upload';
/**
 * Authentication method to use
 * @default oAuth2
 */
    authentication?: 'basicAuth' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    tableName?: string | Expression<string>;
/**
 * Sys_id of the record in the table specified in Table Name that you want to attach the file to
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the binary property that contains the data to upload
 * @default data
 */
    inputDataFieldName?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Name to give the attachment
     */
    file_name?: string | Expression<string> | PlaceholderValue;
  };
};

export type ServiceNowV1AttachmentUploadNode = {
  type: 'n8n-nodes-base.serviceNow';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ServiceNowV1AttachmentUploadParams>;
};