/**
 * AWS SES Node - Version 1
 * Discriminator: resource=template, operation=update
 */


interface Credentials {
  aws: CredentialReference;
  awsAssumeRole: CredentialReference;
}

/** Update an existing custom verification email template */
export type AwsSesV1TemplateUpdateParams = {
  resource: 'template';
  operation: 'update';
  authentication?: 'iam' | 'assumeRole' | Expression<string>;
/**
 * The name of the template
 */
    templateName?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** The email body that will be visible to recipients whose email clients do not display HTML
     */
    textPart?: string | Expression<string> | PlaceholderValue;
    /** The subject line of the email
     */
    subjectPart?: string | Expression<string> | PlaceholderValue;
    /** The HTML body of the email
     */
    htmlPart?: string | Expression<string> | PlaceholderValue;
  };
};

export type AwsSesV1TemplateUpdateNode = {
  type: 'n8n-nodes-base.awsSes';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AwsSesV1TemplateUpdateParams>;
};