/**
 * AWS SES Node - Version 1
 * Discriminator: resource=email, operation=send
 */


interface Credentials {
  aws: CredentialReference;
  awsAssumeRole: CredentialReference;
}

/** Add an email address to the list of identities */
export type AwsSesV1EmailSendParams = {
  resource: 'email';
  operation: 'send';
  authentication?: 'iam' | 'assumeRole' | Expression<string>;
/**
 * Whether body is HTML or simple text
 * @default false
 */
    isBodyHtml?: boolean | Expression<boolean>;
/**
 * Subject
 */
    subject?: string | Expression<string> | PlaceholderValue;
/**
 * The message to be sent
 */
    body?: string | Expression<string> | PlaceholderValue;
/**
 * Email address of the sender
 */
    fromEmail?: string | Expression<string> | PlaceholderValue;
/**
 * Email addresses of the recipients
 * @default []
 */
    toAddresses?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Bcc Recipients of the email
     * @default []
     */
    bccAddresses?: string | Expression<string> | PlaceholderValue;
    /** Cc recipients of the email
     * @default []
     */
    ccAddresses?: string | Expression<string> | PlaceholderValue;
    /** Name of the configuration set to use when you send an email using send
     */
    configurationSetName?: string | Expression<string> | PlaceholderValue;
    /** Reply-to email address(es) for the message
     * @default []
     */
    replyToAddresses?: string | Expression<string> | PlaceholderValue;
    /** Email address that bounces and complaints will be forwarded to when feedback forwarding is enabled
     */
    returnPath?: string | Expression<string> | PlaceholderValue;
    /** This parameter is used only for sending authorization
     */
    returnPathArn?: string | Expression<string> | PlaceholderValue;
    /** This parameter is used only for sending authorization
     */
    sourceArn?: string | Expression<string> | PlaceholderValue;
  };
};

export type AwsSesV1EmailSendOutput = {
  SendEmailResponse?: {
    $?: {
      xmlns?: string;
    };
    ResponseMetadata?: {
      RequestId?: string;
    };
    SendEmailResult?: {
      MessageId?: string;
    };
  };
};

export type AwsSesV1EmailSendNode = {
  type: 'n8n-nodes-base.awsSes';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AwsSesV1EmailSendParams>;
  output?: Items<AwsSesV1EmailSendOutput>;
};