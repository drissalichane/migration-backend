/**
 * Microsoft OneDrive Node - Version 1
 * Discriminator: resource=file, operation=search
 */


interface Credentials {
  microsoftOneDriveOAuth2Api: CredentialReference;
}

/** Search a file */
export type MicrosoftOneDriveV1FileSearchParams = {
  resource: 'file';
  operation: 'search';
/**
 * The query text used to search for items. Values may be matched across several fields including filename, metadata, and file content.
 */
    query?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOneDriveV1FileSearchOutput = {
  createdBy?: {
    user?: {
      displayName?: string;
      email?: string;
    };
  };
  createdDateTime?: string;
  file?: {
    mimeType?: string;
  };
  fileSystemInfo?: {
    createdDateTime?: string;
    lastModifiedDateTime?: string;
  };
  id?: string;
  lastModifiedBy?: {
    user?: {
      displayName?: string;
      email?: string;
    };
  };
  lastModifiedDateTime?: string;
  name?: string;
  parentReference?: {
    driveId?: string;
    driveType?: string;
    id?: string;
    siteId?: string;
  };
  size?: number;
  webUrl?: string;
};

export type MicrosoftOneDriveV1FileSearchNode = {
  type: 'n8n-nodes-base.microsoftOneDrive';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOneDriveV1FileSearchParams>;
  output?: Items<MicrosoftOneDriveV1FileSearchOutput>;
};