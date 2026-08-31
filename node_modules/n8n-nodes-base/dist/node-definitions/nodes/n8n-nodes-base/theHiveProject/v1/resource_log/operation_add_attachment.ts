/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=log, operation=addAttachment
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1LogAddAttachmentParams = {
  resource: 'log';
  operation: 'addAttachment';
/**
 * Task Log
 * @default {"mode":"list","value":""}
 */
    logId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Array of supported attachments to add to the message
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
};

export type TheHiveProjectV1LogAddAttachmentNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1LogAddAttachmentParams>;
};