/**
 * Microsoft OneDrive Node - Version 1
 * Discriminator: resource=file, operation=get
 */


interface Credentials {
  microsoftOneDriveOAuth2Api: CredentialReference;
}

/** Get a file */
export type MicrosoftOneDriveV1FileGetParams = {
  resource: 'file';
  operation: 'get';
/**
 * Field ID
 */
    fileId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOneDriveV1FileGetOutput = {
  '@microsoft.graph.downloadUrl'?: string;
  '@odata.context'?: string;
  createdBy?: {
    application?: {
      displayName?: string;
      id?: string;
    };
    user?: {
      displayName?: string;
      email?: string;
      id?: string;
    };
  };
  createdDateTime?: string;
  cTag?: string;
  eTag?: string;
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
  shared?: {
    scope?: string;
  };
  size?: number;
  webUrl?: string;
};

export type MicrosoftOneDriveV1FileGetNode = {
  type: 'n8n-nodes-base.microsoftOneDrive';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOneDriveV1FileGetParams>;
  output?: Items<MicrosoftOneDriveV1FileGetOutput>;
};