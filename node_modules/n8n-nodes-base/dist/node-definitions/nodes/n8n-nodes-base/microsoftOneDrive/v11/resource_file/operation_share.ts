/**
 * Microsoft OneDrive Node - Version 1.1
 * Discriminator: resource=file, operation=share
 */


interface Credentials {
  microsoftOneDriveOAuth2Api: CredentialReference;
}

/** Share a file */
export type MicrosoftOneDriveV11FileShareParams = {
  resource: 'file';
  operation: 'share';
/**
 * File ID
 */
    fileId?: string | Expression<string> | PlaceholderValue;
/**
 * The type of sharing link to create
 */
    type?: 'view' | 'edit' | 'embed' | Expression<string>;
/**
 * The type of sharing link to create
 */
    scope?: 'anonymous' | 'organization' | Expression<string>;
};

export type MicrosoftOneDriveV11FileShareOutput = {
  '@odata.context'?: string;
  hasPassword?: boolean;
  id?: string;
  link?: {
    preventsDownload?: boolean;
    scope?: string;
    type?: string;
    webHtml?: string;
    webUrl?: string;
  };
  roles?: Array<string>;
  shareId?: string;
};

export type MicrosoftOneDriveV11FileShareNode = {
  type: 'n8n-nodes-base.microsoftOneDrive';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOneDriveV11FileShareParams>;
  output?: Items<MicrosoftOneDriveV11FileShareOutput>;
};