/**
 * AWS SES Node - Version 1
 * Discriminator: resource=email, operation=sendTemplate
 */


interface Credentials {
  aws: CredentialReference;
  awsAssumeRole: CredentialReference;
}

export type AwsSesV1EmailSendTemplateParams = {
  resource: 'email';
  operation: 'sendTemplate';
  authentication?: 'iam' | 'assumeRole' | Expression<string>;
/**
 * The ARN of the template to use when sending this email. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    templateName?: string | Expression<string>;
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
 * Template Data
 * @default {}
 */
    templateDataUi?: {
        /** Data
     */
    templateDataValues?: Array<{
      /** Key
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
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

export type AwsSesV1EmailSendTemplateOutput = {
  $?: {
    xmlns?: string;
  };
  ResponseMetadata?: {
    RequestId?: string;
  };
  SendTemplatedEmailResult?: {
    MessageId?: string;
  };
};

export type AwsSesV1EmailSendTemplateNode = {
  type: 'n8n-nodes-base.awsSes';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AwsSesV1EmailSendTemplateParams>;
  output?: Items<AwsSesV1EmailSendTemplateOutput>;
};