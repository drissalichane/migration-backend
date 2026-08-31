/**
 * Microsoft Graph Security Node - Version 1
 * Discriminator: resource=secureScoreControlProfile, operation=get
 */


interface Credentials {
  microsoftGraphSecurityOAuth2Api: CredentialReference;
}

export type MicrosoftGraphSecurityV1SecureScoreControlProfileGetParams = {
  resource: 'secureScoreControlProfile';
  operation: 'get';
/**
 * ID of the secure score control profile to retrieve
 */
    secureScoreControlProfileId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftGraphSecurityV1SecureScoreControlProfileGetNode = {
  type: 'n8n-nodes-base.microsoftGraphSecurity';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftGraphSecurityV1SecureScoreControlProfileGetParams>;
};