/**
 * Microsoft OneDrive Node - Version 1
 * Discriminator: resource=file, operation=delete
 */


interface Credentials {
  microsoftOneDriveOAuth2Api: CredentialReference;
}

/** Delete a file */
export type MicrosoftOneDriveV1FileDeleteParams = {
  resource: 'file';
  operation: 'delete';
/**
 * Field ID
 */
    fileId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOneDriveV1FileDeleteOutput = {
  success?: boolean;
};

export type MicrosoftOneDriveV1FileDeleteNode = {
  type: 'n8n-nodes-base.microsoftOneDrive';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOneDriveV1FileDeleteParams>;
  output?: Items<MicrosoftOneDriveV1FileDeleteOutput>;
};