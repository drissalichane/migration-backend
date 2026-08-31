/**
 * Microsoft Graph Security Node - Version 1
 * Discriminator: resource=secureScore, operation=get
 */


interface Credentials {
  microsoftGraphSecurityOAuth2Api: CredentialReference;
}

export type MicrosoftGraphSecurityV1SecureScoreGetParams = {
  resource: 'secureScore';
  operation: 'get';
/**
 * ID of the secure score to retrieve
 */
    secureScoreId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftGraphSecurityV1SecureScoreGetNode = {
  type: 'n8n-nodes-base.microsoftGraphSecurity';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftGraphSecurityV1SecureScoreGetParams>;
};