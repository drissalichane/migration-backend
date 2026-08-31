/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=messageAttachment, operation=getAll
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** List and search calendars */
export type MicrosoftOutlookV2MessageAttachmentGetAllParams = {
  resource: 'messageAttachment';
  operation: 'getAll';
/**
 * Message
 * @default {"mode":"list","value":""}
 */
    messageId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 100
 */
    limit?: number | Expression<number>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** The fields to add to the output
     * @default []
     */
    fields?: Array<'contentType' | 'isInline' | 'lastModifiedDateTime' | 'name' | 'size'>;
  };
};

export type MicrosoftOutlookV2MessageAttachmentGetAllOutput = {
  '@odata.mediaContentType'?: string;
  '@odata.type'?: string;
  contentType?: string;
  id?: string;
  isInline?: boolean;
  lastModifiedDateTime?: string;
  name?: string;
  size?: number;
};

export type MicrosoftOutlookV2MessageAttachmentGetAllNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2MessageAttachmentGetAllParams>;
  output?: Items<MicrosoftOutlookV2MessageAttachmentGetAllOutput>;
};