/**
 * Mautic Node - Version 1
 * Discriminator: resource=segmentEmail, operation=send
 */


interface Credentials {
  mauticApi: CredentialReference;
  mauticOAuth2Api: CredentialReference;
}

/** Send an email */
export type MauticV1SegmentEmailSendParams = {
  resource: 'segmentEmail';
  operation: 'send';
  authentication?: 'credentials' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    segmentEmailId?: string | Expression<string>;
};

export type MauticV1SegmentEmailSendNode = {
  type: 'n8n-nodes-base.mautic';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MauticV1SegmentEmailSendParams>;
};