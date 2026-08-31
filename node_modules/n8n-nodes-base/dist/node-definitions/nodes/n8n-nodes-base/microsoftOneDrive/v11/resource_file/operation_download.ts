/**
 * Microsoft OneDrive Node - Version 1.1
 * Discriminator: resource=file, operation=download
 */


interface Credentials {
  microsoftOneDriveOAuth2Api: CredentialReference;
}

/** Download a file */
export type MicrosoftOneDriveV11FileDownloadParams = {
  resource: 'file';
  operation: 'download';
/**
 * File ID
 */
    fileId?: string | Expression<string> | PlaceholderValue;
/**
 * Put Output File in Field
 * @hint The name of the output binary field to put the file in
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOneDriveV11FileDownloadOutput = {
  createdBy?: {
    user?: {
      displayName?: string;
      email?: string;
      id?: string;
    };
  };
  createdDateTime?: string;
  file?: {
    hashes?: {
      quickXorHash?: string;
    };
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
      id?: string;
    };
  };
  lastModifiedDateTime?: string;
  name?: string;
  parentReference?: {
    driveId?: string;
    driveType?: string;
    id?: string;
    name?: string;
    path?: string;
    siteId?: string;
  };
  size?: number;
  webUrl?: string;
};

export type MicrosoftOneDriveV11FileDownloadNode = {
  type: 'n8n-nodes-base.microsoftOneDrive';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOneDriveV11FileDownloadParams>;
  output?: Items<MicrosoftOneDriveV11FileDownloadOutput>;
};