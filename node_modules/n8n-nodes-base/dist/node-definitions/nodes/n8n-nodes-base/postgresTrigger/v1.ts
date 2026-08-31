/**
 * Postgres Trigger Node - Version 1
 * Listens to Postgres messages
 */


export interface PostgresTriggerV1Params {
  triggerMode?: 'createTrigger' | 'listenTrigger' | Expression<string>;
/**
 * Schema Name
 * @displayOptions.show { triggerMode: ["createTrigger"] }
 * @default {"mode":"list","value":"public"}
 */
    schema?: { __rl: true; mode: 'list' | 'name'; value: string; cachedResultName?: string };
/**
 * Table Name
 * @displayOptions.show { triggerMode: ["createTrigger"] }
 * @default {"mode":"list","value":""}
 */
    tableName?: { __rl: true; mode: 'list' | 'name'; value: string; cachedResultName?: string };
/**
 * Name of the channel to listen to
 * @displayOptions.show { triggerMode: ["listenTrigger"] }
 */
    channelName?: string | Expression<string> | PlaceholderValue;
/**
 * Event to listen for
 * @displayOptions.show { triggerMode: ["createTrigger"] }
 * @default INSERT
 */
    firesOn?: 'INSERT' | 'UPDATE' | 'DELETE' | Expression<string>;
/**
 * Additional Fields
 * @displayOptions.show { triggerMode: ["createTrigger"] }
 * @default {}
 */
    additionalFields?: {
    /** Name of the channel to listen to
     */
    channelName?: string | Expression<string> | PlaceholderValue;
    /** Name of the function to create
     */
    functionName?: string | Expression<string> | PlaceholderValue;
    /** Whether to replace an existing function and trigger with the same name
     * @default false
     */
    replaceIfExists?: boolean | Expression<boolean>;
    /** Name of the trigger to create
     */
    triggerName?: string | Expression<string> | PlaceholderValue;
  };
  options?: {
    /** Number of seconds reserved for connecting to the database
     * @default 30
     */
    connectionTimeout?: number | Expression<number>;
    /** Number of seconds to wait before idle connection would be eligible for closing
     * @default 0
     */
    delayClosingIdleConnection?: number | Expression<number>;
  };
}

export interface PostgresTriggerV1Credentials {
  postgres: CredentialReference;
}

interface PostgresTriggerV1NodeBase {
  type: 'n8n-nodes-base.postgresTrigger';
  version: 1;
  credentials?: PostgresTriggerV1Credentials;
  isTrigger: true;
}

export type PostgresTriggerV1ParamsNode = PostgresTriggerV1NodeBase & {
  config: NodeConfig<PostgresTriggerV1Params>;
};

export type PostgresTriggerV1Node = PostgresTriggerV1ParamsNode;