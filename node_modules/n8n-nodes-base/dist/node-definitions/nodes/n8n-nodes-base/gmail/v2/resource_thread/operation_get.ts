/**
 * Gmail Node - Version 2
 * Discriminator: resource=thread, operation=get
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV2ThreadGetParams = {
  resource: 'thread';
  operation: 'get';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * The ID of the thread you are operating on
 */
    threadId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether to return only thread messages
     * @default true
     */
    returnOnlyMessages?: boolean | Expression<boolean>;
  };
};

export type GmailV2ThreadGetOutput = {
  historyId?: string;
  id?: string;
  messages?: Array<{
    'ARC-Authentication-Results'?: string;
    'ARC-Message-Signature'?: string;
    'ARC-Seal'?: string;
    'Authentication-Results'?: string;
    'Content-Type'?: string;
    Date?: string;
    'Delivered-To'?: string;
    'DKIM-Signature'?: string;
    From?: string;
    historyId?: string;
    id?: string;
    internalDate?: string;
    labels?: Array<{
      id?: string;
      name?: string;
    }>;
    'Message-ID'?: string;
    'MIME-Version'?: string;
    payload?: {
      body?: {
        data?: string;
        size?: number;
      };
      filename?: string;
      mimeType?: string;
      partId?: string;
      parts?: Array<{
        body?: {
          data?: string;
          size?: number;
        };
        filename?: string;
        headers?: Array<{
          name?: string;
          value?: string;
        }>;
        mimeType?: string;
        partId?: string;
      }>;
    };
    Received?: string;
    'Received-SPF'?: string;
    'Return-Path'?: string;
    sizeEstimate?: number;
    snippet?: string;
    Subject?: string;
    threadId?: string;
    To?: string;
    'X-Google-Smtp-Source'?: string;
    'X-Received'?: string;
  }>;
};

export type GmailV2ThreadGetNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GmailV2ThreadGetParams>;
  output?: Items<GmailV2ThreadGetOutput>;
};