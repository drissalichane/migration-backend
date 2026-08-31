/**
 * AWS SES Node - Version 1
 * Discriminator: resource=customVerificationEmail, operation=create
 */


interface Credentials {
  aws: CredentialReference;
  awsAssumeRole: CredentialReference;
}

/** Create a new custom verification email template */
export type AwsSesV1CustomVerificationEmailCreateParams = {
  resource: 'customVerificationEmail';
  operation: 'create';
  authentication?: 'iam' | 'assumeRole' | Expression<string>;
/**
 * The email address that the custom verification email is sent from
 */
    fromEmailAddress?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the custom verification email template
 */
    templateName?: string | Expression<string> | PlaceholderValue;
/**
 * The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML
 */
    templateContent?: string | Expression<string> | PlaceholderValue;
/**
 * The subject line of the custom verification email
 */
    templateSubject?: string | Expression<string> | PlaceholderValue;
/**
 * The URL that the recipient of the verification email is sent to if his or her address is successfully verified
 */
    successRedirectionURL?: string | Expression<string> | PlaceholderValue;
/**
 * The URL that the recipient of the verification email is sent to if his or her address is not successfully verified
 */
    failureRedirectionURL?: string | Expression<string> | PlaceholderValue;
};

export type AwsSesV1CustomVerificationEmailCreateNode = {
  type: 'n8n-nodes-base.awsSes';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AwsSesV1CustomVerificationEmailCreateParams>;
};