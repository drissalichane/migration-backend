/**
 * AWS Cognito Node - Version 1
 * Discriminator: resource=group, operation=update
 */


interface Credentials {
  aws: CredentialReference;
}

/** Update an existing group */
export type AwsCognitoV1GroupUpdateParams = {
  resource: 'group';
  operation: 'update';
/**
 * Select the user pool to use
 * @default {"mode":"list","value":""}
 */
    userPool?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Select the group you want to update
 * @default {"mode":"list","value":""}
 */
    group?: { __rl: true; mode: 'list' | 'groupName'; value: string; cachedResultName?: string };
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** A new description for the group
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** The new precedence value for the group. Lower values indicate higher priority.
     */
    precedence?: number | Expression<number>;
    /** A new role Amazon Resource Name (ARN) for the group. Used for setting claims in tokens.
     */
    arn?: string | Expression<string> | PlaceholderValue;
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

export type AwsCognitoV1GroupUpdateNode = {
  type: 'n8n-nodes-base.awsCognito';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AwsCognitoV1GroupUpdateParams>;
};