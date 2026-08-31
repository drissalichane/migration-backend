/**
 * Webex by Cisco Node - Version 1
 * Discriminator: resource=message, operation=update
 */


interface Credentials {
  ciscoWebexOAuth2Api: CredentialReference;
}

export type CiscoWebexV1MessageUpdateParams = {
  resource: 'message';
  operation: 'update';
/**
 * ID of the message to update
 */
    messageId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether the message uses markdown
 * @default false
 */
    markdown?: boolean | Expression<boolean>;
/**
 * The message, in plain text
 * @displayOptions.show { markdown: [false] }
 */
    text?: string | Expression<string> | PlaceholderValue;
/**
 * The message, in Markdown format. The maximum message length is 7439 bytes.
 * @displayOptions.show { markdown: [true] }
 */
    markdownText?: string | Expression<string> | PlaceholderValue;
};

export type CiscoWebexV1MessageUpdateNode = {
  type: 'n8n-nodes-base.ciscoWebex';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CiscoWebexV1MessageUpdateParams>;
};