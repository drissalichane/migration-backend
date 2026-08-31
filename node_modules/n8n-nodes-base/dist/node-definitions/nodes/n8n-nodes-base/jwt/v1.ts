/**
 * JWT Node - Version 1
 * JWT
 */


export interface JwtV1Params {
  operation?: 'decode' | 'sign' | 'verify';
/**
 * Whether to use JSON to build the claims
 * @displayOptions.show { operation: ["sign"] }
 * @default false
 */
    useJson?: boolean | Expression<boolean>;
/**
 * Payload Claims
 * @displayOptions.show { operation: ["sign"], useJson: [false] }
 * @default {}
 */
    claims?: {
    /** Identifies the recipients that the JWT is intended for
     */
    audience?: string | Expression<string> | PlaceholderValue;
    /** The lifetime of the token in seconds
     * @default 3600
     */
    expiresIn?: number | Expression<number>;
    /** Identifies the principal that issued the JWT
     */
    issuer?: string | Expression<string> | PlaceholderValue;
    /** Unique identifier for the JWT
     */
    jwtid?: string | Expression<string> | PlaceholderValue;
    /** The time before which the JWT must not be accepted for processing
     * @default 0
     */
    notBefore?: number | Expression<number>;
    /** Identifies the principal that is the subject of the JWT
     */
    subject?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Claims to add to the token in JSON format
 * @displayOptions.show { operation: ["sign"], useJson: [true] }
 */
    claimsJson?: IDataObject | string | Expression<string>;
/**
 * The token to verify or decode
 * @displayOptions.show { operation: ["verify", "decode"] }
 */
    token?: string | Expression<string> | PlaceholderValue;
  options?: {
    /** Whether to return the complete decoded token with information about the header and signature or just the payload
     * @displayOptions.show { /operation: ["verify", "decode"] }
     * @default false
     */
    complete?: boolean | Expression<boolean>;
    /** Whether to ignore the expiration of the token
     * @displayOptions.show { /operation: ["verify"] }
     * @default false
     */
    ignoreExpiration?: boolean | Expression<boolean>;
    /** Whether to ignore the not before claim of the token
     * @displayOptions.show { /operation: ["verify"] }
     * @default false
     */
    ignoreNotBefore?: boolean | Expression<boolean>;
    /** Number of seconds to tolerate when checking the nbf and exp claims, to deal with small clock differences among different servers
     * @displayOptions.show { /operation: ["verify"] }
     * @default 0
     */
    clockTolerance?: number | Expression<number>;
    /** The kid (key ID) claim is an optional header claim, used to specify the key for validating the signature
     * @displayOptions.show { /operation: ["sign"] }
     */
    kid?: string | Expression<string> | PlaceholderValue;
    /** The algorithm to use for signing or verifying the token, overrides algorithm in credentials
     * @displayOptions.show { /operation: ["sign", "verify"] }
     * @default HS256
     */
    algorithm?: 'ES256' | 'ES384' | 'ES512' | 'HS256' | 'HS384' | 'HS512' | 'PS256' | 'PS384' | 'PS512' | 'RS256' | 'RS384' | 'RS512' | Expression<string>;
  };
}

export interface JwtV1Credentials {
  jwtAuth: CredentialReference;
}

interface JwtV1NodeBase {
  type: 'n8n-nodes-base.jwt';
  version: 1;
  credentials?: JwtV1Credentials;
}

export type JwtV1ParamsNode = JwtV1NodeBase & {
  config: NodeConfig<JwtV1Params>;
};

export type JwtV1Node = JwtV1ParamsNode;