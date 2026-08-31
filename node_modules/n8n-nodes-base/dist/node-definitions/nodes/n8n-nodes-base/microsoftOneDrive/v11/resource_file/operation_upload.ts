/**
 * Microsoft OneDrive Node - Version 1.1
 * Discriminator: resource=file, operation=upload
 */


interface Credentials {
  microsoftOneDriveOAuth2Api: CredentialReference;
}

/** Upload a file up to 4MB in size */
export type MicrosoftOneDriveV11FileUploadParams = {
  resource: 'file';
  operation: 'upload';
/**
 * The name the file should be saved as
 */
    fileName?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the parent folder that will contain the file
 */
    parentId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether the data to upload should be taken from binary field
 * @default false
 */
    binaryData?: boolean | Expression<boolean>;
/**
 * The text content of the file
 * @displayOptions.show { binaryData: [false] }
 */
    fileContent?: string | Expression<string> | PlaceholderValue;
/**
 * Input Binary Field
 * @hint The name of the input binary field containing the file to be written
 * @displayOptions.show { binaryData: [true] }
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOneDriveV11FileUploadOutput = {
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

export type MicrosoftOneDriveV11FileUploadNode = {
  type: 'n8n-nodes-base.microsoftOneDrive';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOneDriveV11FileUploadParams>;
  output?: Items<MicrosoftOneDriveV11FileUploadOutput>;
};