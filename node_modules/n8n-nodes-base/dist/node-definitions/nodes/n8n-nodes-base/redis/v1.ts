/**
 * Redis Node - Version 1
 * Get, send and update data in Redis
 */


export interface RedisV1Params {
  operation?: 'delete' | 'get' | 'incr' | 'info' | 'keys' | 'llen' | 'pop' | 'publish' | 'push' | 'set';
/**
 * Name of the key to delete from Redis
 * @displayOptions.show { operation: ["delete"] }
 */
    key?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the property to write received data to. Supports dot-notation. Example: "data.person[0].name".
 * @displayOptions.show { operation: ["get"] }
 * @default propertyName
 */
    propertyName?: string | Expression<string> | PlaceholderValue;
/**
 * The type of the key to get
 * @displayOptions.show { operation: ["get"] }
 * @default automatic
 */
    keyType?: 'automatic' | 'hash' | 'list' | 'sets' | 'string' | Expression<string>;
/**
 * Options
 * @displayOptions.show { operation: ["get"] }
 * @default {}
 */
    options?: {
    /** &lt;p&gt;By default, dot-notation is used in property names. This means that "a.b" will set the property "b" underneath "a" so { "a": { "b": value} }.&lt;p&gt;&lt;/p&gt;If that is not intended this can be deactivated, it will then set { "a.b": value } instead.&lt;/p&gt;.
     * @default true
     */
    dotNotation?: boolean | Expression<boolean>;
  };
/**
 * Whether to set a timeout on key
 * @displayOptions.show { operation: ["incr"] }
 * @default false
 */
    expire?: boolean | Expression<boolean>;
/**
 * Number of seconds before key expiration
 * @displayOptions.show { operation: ["incr"], expire: [true] }
 * @default 60
 */
    ttl?: number | Expression<number>;
/**
 * The key pattern for the keys to return
 * @displayOptions.show { operation: ["keys"] }
 */
    keyPattern?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to get the value of matching keys
 * @displayOptions.show { operation: ["keys"] }
 * @default true
 */
    getValues?: boolean | Expression<boolean>;
/**
 * Name of the list in Redis
 * @displayOptions.show { operation: ["llen"] }
 */
    list?: string | Expression<string> | PlaceholderValue;
/**
 * The value to write in Redis
 * @displayOptions.show { operation: ["set"] }
 */
    value?: string | Expression<string> | PlaceholderValue;
/**
 * Whether the value is JSON or key value pairs
 * @displayOptions.show { keyType: ["hash"] }
 * @default true
 */
    valueIsJSON?: boolean | Expression<boolean>;
/**
 * Channel name
 * @displayOptions.show { operation: ["publish"] }
 */
    channel?: string | Expression<string> | PlaceholderValue;
/**
 * Data to publish
 * @displayOptions.show { operation: ["publish"] }
 */
    messageData?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to push or pop data from the end of the list
 * @displayOptions.show { operation: ["push", "pop"] }
 * @default false
 */
    tail?: boolean | Expression<boolean>;
}

export interface RedisV1Credentials {
  redis: CredentialReference;
}

interface RedisV1NodeBase {
  type: 'n8n-nodes-base.redis';
  version: 1;
  credentials?: RedisV1Credentials;
}

export type RedisV1ParamsNode = RedisV1NodeBase & {
  config: NodeConfig<RedisV1Params>;
};

export type RedisV1Node = RedisV1ParamsNode;