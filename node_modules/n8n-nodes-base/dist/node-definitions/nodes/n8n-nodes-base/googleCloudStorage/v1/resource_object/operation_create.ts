/**
 * Google Cloud Storage Node - Version 1
 * Discriminator: resource=object, operation=create
 */


interface Credentials {
  googleCloudStorageOAuth2Api: CredentialReference;
}

/** Create a new Bucket */
export type GoogleCloudStorageV1ObjectCreateParams = {
  resource: 'object';
  operation: 'create';
/**
 * Bucket Name
 */
    bucketName?: string | Expression<string> | PlaceholderValue;
/**
 * Object Name
 */
    objectName?: string | Expression<string> | PlaceholderValue;
/**
 * Projection
 * @default full
 */
    updateProjection?: 'full' | 'noAcl';
/**
 * Whether the data for creating a file should come from a binary field
 * @default true
 */
    createFromBinary?: boolean;
/**
 * Input Binary Field
 * @hint The name of the input binary field containing the file to be written
 * @displayOptions.show { createFromBinary: [true] }
 * @default data
 */
    createBinaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * Content of the file to be uploaded
 * @displayOptions.show { createFromBinary: [false] }
 */
    createContent?: string | Expression<string> | PlaceholderValue;
/**
 * Create Fields
 * @default {}
 */
    createData?: {
    /** Access Control List
     * @default []
     */
    acl?: IDataObject | string | Expression<string>;
    /** Cache Control
     */
    cacheControl?: string | Expression<string> | PlaceholderValue;
    /** Content Disposition
     */
    contentDisposition?: string | Expression<string> | PlaceholderValue;
    /** Content Encoding
     */
    contentEncoding?: string | Expression<string> | PlaceholderValue;
    /** Content Language
     */
    contentLanguage?: string | Expression<string> | PlaceholderValue;
    /** Content Type
     */
    contentType?: string | Expression<string> | PlaceholderValue;
    /** CRC32c Checksum
     */
    crc32c?: string | Expression<string> | PlaceholderValue;
    /** Custom Time
     */
    customTime?: string | Expression<string> | PlaceholderValue;
    /** Event Based Hold
     * @default false
     */
    eventBasedHold?: boolean | Expression<boolean>;
    /** MD5 Hash
     */
    md5Hash?: string | Expression<string> | PlaceholderValue;
    /** Metadata
     * @default {}
     */
    metadata?: IDataObject | string | Expression<string>;
    /** Storage Class
     */
    storageClass?: string | Expression<string> | PlaceholderValue;
    /** Temporary Hold
     * @default false
     */
    temporaryHold?: boolean | Expression<boolean>;
  };
/**
 * Additional Parameters
 * @default {}
 */
    createQuery?: {
    /** Content Encoding
     */
    contentEncoding?: string | Expression<string> | PlaceholderValue;
    /** Generation
     * @default -1
     */
    generation?: number | Expression<number>;
    /** Generation Match
     * @default -1
     */
    ifGenerationMatch?: number | Expression<number>;
    /** Generation Exclude
     * @default -1
     */
    ifGenerationNotMatch?: number | Expression<number>;
    /** Metageneration Match
     * @default -1
     */
    ifMetagenerationMatch?: number | Expression<number>;
    /** Metageneration Exclude
     * @default -1
     */
    ifMetagenerationNotMatch?: number | Expression<number>;
    /** KMS Key Name
     */
    kmsKeyName?: string | Expression<string> | PlaceholderValue;
    /** Predefined ACL
     * @default authenticatedRead
     */
    predefinedAcl?: 'authenticatedRead' | 'bucketOwnerFullControl' | 'bucketOwnerRead' | 'private' | 'projectPrivate' | 'publicRead' | Expression<string>;
  };
/**
 * Encryption Headers
 * @default {}
 */
    encryptionHeaders?: {
    /** Encryption Algorithm
     * @default AES256
     */
    'X-Goog-Encryption-Algorithm'?: 'AES256' | Expression<string>;
    /** Encryption Key
     */
    'X-Goog-Encryption-Key'?: string | Expression<string> | PlaceholderValue;
    /** Encryption Key Hash
     */
    'X-Goog-Encryption-Key-Sha256'?: string | Expression<string> | PlaceholderValue;
  };
  requestOptions?: {
    /** Batching
     * @default {"batch":{}}
     */
    batching?: {
        /** Batching
     */
    batch?: {
      /** Input will be split in batches to throttle requests. -1 for disabled. 0 will be treated as 1.
       * @default 50
       */
      batchSize?: number | Expression<number>;
      /** Time (in milliseconds) between each batch of requests. 0 for disabled.
       * @default 1000
       */
      batchInterval?: number | Expression<number>;
    };
  };
    /** Whether to accept the response even if SSL certificate validation is not possible
     * @default false
     */
    allowUnauthorizedCerts?: boolean;
    /** HTTP proxy to use. If authentication is required it can be defined as follow: http://username:password@myproxy:3128
     */
    proxy?: string | Expression<string> | PlaceholderValue;
    /** Time in ms to wait for the server to send response headers (and start the response body) before aborting the request
     * @default 10000
     */
    timeout?: number | Expression<number>;
  };
};

export type GoogleCloudStorageV1ObjectCreateOutput = {
  bucket?: string;
  contentType?: string;
  crc32c?: string;
  etag?: string;
  generation?: string;
  id?: string;
  kind?: string;
  md5Hash?: string;
  mediaLink?: string;
  metageneration?: string;
  name?: string;
  selfLink?: string;
  size?: string;
  storageClass?: string;
  timeCreated?: string;
  timeFinalized?: string;
  timeStorageClassUpdated?: string;
  updated?: string;
};

export type GoogleCloudStorageV1ObjectCreateNode = {
  type: 'n8n-nodes-base.googleCloudStorage';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleCloudStorageV1ObjectCreateParams>;
  output?: Items<GoogleCloudStorageV1ObjectCreateOutput>;
};