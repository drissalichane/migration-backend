/**
 * AWS SES Node - Version 1
 * Discriminator: resource=template, operation=delete
 */


interface Credentials {
  aws: CredentialReference;
  awsAssumeRole: CredentialReference;
}

/** Delete an existing custom verification email template */
export type AwsSesV1TemplateDeleteParams = {
  resource: 'template';
  operation: 'delete';
  authentication?: 'iam' | 'assumeRole' | Expression<string>;
/**
 * The name of the template
 */
    templateName?: string | Expression<string> | PlaceholderValue;
};

export type AwsSesV1TemplateDeleteNode = {
  type: 'n8n-nodes-base.awsSes';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AwsSesV1TemplateDeleteParams>;
};