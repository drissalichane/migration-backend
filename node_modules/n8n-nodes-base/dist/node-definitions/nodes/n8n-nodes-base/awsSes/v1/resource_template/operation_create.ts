/**
 * AWS SES Node - Version 1
 * Discriminator: resource=template, operation=create
 */


interface Credentials {
  aws: CredentialReference;
  awsAssumeRole: CredentialReference;
}

/** Create a new custom verification email template */
export type AwsSesV1TemplateCreateParams = {
  resource: 'template';
  operation: 'create';
  authentication?: 'iam' | 'assumeRole' | Expression<string>;
/**
 * The name of the template
 */
    templateName?: string | Expression<string> | PlaceholderValue;
/**
 * The subject line of the email
 */
    subjectPart?: string | Expression<string> | PlaceholderValue;
/**
 * The HTML body of the email
 */
    htmlPart?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The email body that will be visible to recipients whose email clients do not display HTML
     */
    textPart?: string | Expression<string> | PlaceholderValue;
  };
};

export type AwsSesV1TemplateCreateNode = {
  type: 'n8n-nodes-base.awsSes';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AwsSesV1TemplateCreateParams>;
};