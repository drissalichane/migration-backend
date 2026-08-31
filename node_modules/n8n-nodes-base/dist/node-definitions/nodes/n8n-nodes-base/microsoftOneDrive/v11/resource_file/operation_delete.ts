/**
 * Microsoft OneDrive Node - Version 1.1
 * Discriminator: resource=file, operation=delete
 */


interface Credentials {
  microsoftOneDriveOAuth2Api: CredentialReference;
}

/** Delete a file */
export type MicrosoftOneDriveV11FileDeleteParams = {
  resource: 'file';
  operation: 'delete';
/**
 * Field ID
 */
    fileId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOneDriveV11FileDeleteOutput = {
  success?: boolean;
};

export type MicrosoftOneDriveV11FileDeleteNode = {
  type: 'n8n-nodes-base.microsoftOneDrive';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOneDriveV11FileDeleteParams>;
  output?: Items<MicrosoftOneDriveV11FileDeleteOutput>;
};