/**
 * AWS Cognito Node - Version 1
 * Discriminator: resource=user, operation=update
 */


interface Credentials {
  aws: CredentialReference;
}

/** Update an existing group */
export type AwsCognitoV1UserUpdateParams = {
  resource: 'user';
  operation: 'update';
/**
 * Select the user pool to use
 * @default {"mode":"list","value":""}
 */
    userPool?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * User
 * @default {"mode":"list","value":""}
 */
    user?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Attributes to update for the user
 * @default {"attributes":[]}
 */
    userAttributes?: {
        /** Attributes
     */
    attributes?: Array<{
      /** Attribute Type
       * @default standard
       */
      attributeType?: 'standard' | 'custom' | Expression<string>;
      /** Standard Attribute
       * @displayOptions.show { attributeType: ["standard"] }
       * @default address
       */
      standardName?: 'address' | 'birthdate' | 'email' | 'family_name' | 'gender' | 'given_name' | 'locale' | 'middle_name' | 'name' | 'nickname' | 'phone_number' | 'preferred_username' | 'profilepicture' | 'updated_at' | 'sub' | 'website' | 'zoneinfo' | Expression<string>;
      /** The name of the custom attribute (must start with "custom:")
       * @displayOptions.show { attributeType: ["custom"] }
       */
      customName?: string | Expression<string> | PlaceholderValue;
      /** The value of the attribute
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
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

export type AwsCognitoV1UserUpdateNode = {
  type: 'n8n-nodes-base.awsCognito';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AwsCognitoV1UserUpdateParams>;
};