/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=case, operation=getAttachment
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1CaseGetAttachmentParams = {
  resource: 'case';
  operation: 'getAttachment';
/**
 * Case
 * @default {"mode":"list","value":""}
 */
    caseId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * ID of the attachment. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    attachmentId?: string | Expression<string>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Rename the file when downloading
     */
    fileName?: string | Expression<string> | PlaceholderValue;
    /** Name of the binary property to which write the data of the attachment
     * @default data
     */
    dataPropertyName?: string | Expression<string> | PlaceholderValue;
  };
};

export type TheHiveProjectV1CaseGetAttachmentNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1CaseGetAttachmentParams>;
};