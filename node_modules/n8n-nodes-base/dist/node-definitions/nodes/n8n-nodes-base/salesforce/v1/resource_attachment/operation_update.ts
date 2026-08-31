/**
 * Salesforce Node - Version 1
 * Discriminator: resource=attachment, operation=update
 */


interface Credentials {
  salesforceOAuth2Api: CredentialReference;
  salesforceJwtApi: CredentialReference;
}

/** Represents a file that a has uploaded and attached to a parent object */
export type SalesforceV1AttachmentUpdateParams = {
  resource: 'attachment';
  operation: 'update';
/**
 * OAuth Authorization Flow
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'jwt' | Expression<string>;
/**
 * ID of attachment that needs to be fetched
 */
    attachmentId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Input Binary Field
     * @hint The name of the input binary field containing the file to be uploaded
     * @default data
     */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
    /** Text description of the Document. Limit: 255 characters.
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Whether this record is viewable only by the owner and administrators (true) or viewable by all otherwise-allowed users (false)
     * @default false
     */
    isPrivate?: boolean | Expression<boolean>;
    /** Required. Name of the attached file. Maximum size is 255 characters. Label is File Name.
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** ID of the User who owns the attachment. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    owner?: string | Expression<string>;
  };
};

export type SalesforceV1AttachmentUpdateNode = {
  type: 'n8n-nodes-base.salesforce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SalesforceV1AttachmentUpdateParams>;
};