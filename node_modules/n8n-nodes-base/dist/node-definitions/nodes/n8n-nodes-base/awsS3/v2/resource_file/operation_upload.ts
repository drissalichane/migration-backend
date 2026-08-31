/**
 * AWS S3 Node - Version 2
 * Discriminator: resource=file, operation=upload
 */


interface Credentials {
  aws: CredentialReference;
  awsAssumeRole: CredentialReference;
}

/** Upload a file */
export type AwsS3V2FileUploadParams = {
  resource: 'file';
  operation: 'upload';
  authentication?: 'iam' | 'assumeRole' | Expression<string>;
/**
 * Bucket Name
 */
    bucketName?: string | Expression<string> | PlaceholderValue;
/**
 * File Name
 * @displayOptions.show { binaryData: [false] }
 */
    fileName?: string | Expression<string> | PlaceholderValue;
/**
 * Whether the data to upload should be taken from binary field
 * @default true
 */
    binaryData?: boolean | Expression<boolean>;
/**
 * The text content of the file to upload
 * @displayOptions.show { binaryData: [false] }
 */
    fileContent?: string | Expression<string> | PlaceholderValue;
/**
 * Input Binary Field
 * @hint The name of the input binary field containing the file to be uploaded
 * @displayOptions.show { binaryData: [true] }
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The canned ACL to apply to the object
     * @default private
     */
    acl?: 'authenticatedRead' | 'awsExecRead' | 'bucketOwnerFullControl' | 'bucketOwnerRead' | 'private' | 'publicRead' | 'publicReadWrite' | Expression<string>;
    /** Whether to give the grantee READ, READ_ACP, and WRITE_ACP permissions on the object
     * @default false
     */
    grantFullControl?: boolean | Expression<boolean>;
    /** Whether to allow grantee to read the object data and its metadata
     * @default false
     */
    grantRead?: boolean | Expression<boolean>;
    /** Whether to allow grantee to read the object ACL
     * @default false
     */
    grantReadAcp?: boolean | Expression<boolean>;
    /** Whether to allow grantee to write the ACL for the applicable object
     * @default false
     */
    grantWriteAcp?: boolean | Expression<boolean>;
    /** Whether a legal hold will be applied to this object
     * @default false
     */
    lockLegalHold?: boolean | Expression<boolean>;
    /** The Object Lock mode that you want to apply to this object
     */
    lockMode?: 'governance' | 'compliance' | Expression<string>;
    /** The date and time when you want this object's Object Lock to expire
     */
    lockRetainUntilDate?: string | Expression<string>;
    /** Parent folder you want to create the file in
     */
    parentFolderKey?: string | Expression<string> | PlaceholderValue;
    /** Whether the requester will pay for requests and data transfer. While Requester Pays is enabled, anonymous access to this bucket is disabled.
     * @default false
     */
    requesterPays?: boolean | Expression<boolean>;
    /** The server-side encryption algorithm used when storing this object in Amazon S3
     */
    serverSideEncryption?: 'AES256' | 'aws:kms' | Expression<string>;
    /** Specifies the AWS KMS Encryption Context to use for object encryption
     */
    serverSideEncryptionContext?: string | Expression<string> | PlaceholderValue;
    /** If x-amz-server-side-encryption is present and has the value of aws:kms
     */
    encryptionAwsKmsKeyId?: string | Expression<string> | PlaceholderValue;
    /** Specifies the algorithm to use to when encrypting the object (for example, AES256)
     */
    serversideEncryptionCustomerAlgorithm?: string | Expression<string> | PlaceholderValue;
    /** Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data
     */
    serversideEncryptionCustomerKey?: string | Expression<string> | PlaceholderValue;
    /** Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321
     */
    serversideEncryptionCustomerKeyMD5?: string | Expression<string> | PlaceholderValue;
    /** Amazon S3 storage classes
     * @default standard
     */
    storageClass?: 'deepArchive' | 'glacier' | 'intelligentTiering' | 'onezoneIA' | 'standard' | 'standardIA' | Expression<string>;
  };
/**
 * Optional extra headers to add to the message (most headers are allowed)
 * @default {}
 */
    tagsUi?: {
        /** Tag
     */
    tagsValues?: Array<{
      /** Key
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type AwsS3V2FileUploadOutput = {
  $?: {
    xmlns?: string;
  };
  Bucket?: string;
  ChecksumCRC64NVME?: string;
  ChecksumType?: string;
  ETag?: string;
  Key?: string;
  Location?: string;
};

export type AwsS3V2FileUploadNode = {
  type: 'n8n-nodes-base.awsS3';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<AwsS3V2FileUploadParams>;
  output?: Items<AwsS3V2FileUploadOutput>;
};