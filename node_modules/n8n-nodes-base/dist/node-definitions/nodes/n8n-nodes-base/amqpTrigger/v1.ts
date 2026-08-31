/**
 * AMQP Trigger Node - Version 1
 * Listens to AMQP 1.0 Messages
 */


export interface AmqpTriggerV1Params {
/**
 * Name of the queue of topic to listen to
 */
    sink?: string | Expression<string> | PlaceholderValue;
/**
 * Leave empty for non-durable topic subscriptions or queues
 * @hint for durable/persistent topic subscriptions
 */
    clientname?: string | Expression<string> | PlaceholderValue;
/**
 * Leave empty for non-durable topic subscriptions or queues
 * @hint for durable/persistent topic subscriptions
 */
    subscription?: string | Expression<string> | PlaceholderValue;
  options?: {
    /** Will be used to pass to the RHEA Backend as container_id
     */
    containerId?: string | Expression<string> | PlaceholderValue;
    /** Whether to convert JSON Body content (["body"]["content"]) from Byte Array to string. Needed for Azure Service Bus.
     * @default false
     */
    jsonConvertByteArrayToString?: boolean | Expression<boolean>;
    /** Whether to parse the body to an object
     * @default false
     */
    jsonParseBody?: boolean | Expression<boolean>;
    /** Number of messages to pull from the bus for every cicle
     * @default 100
     */
    pullMessagesNumber?: number | Expression<number>;
    /** Whether to return only the body property
     * @default false
     */
    onlyBody?: boolean | Expression<boolean>;
    /** Whether to process messages in parallel
     * @default true
     */
    parallelProcessing?: boolean | Expression<boolean>;
    /** Whether to automatically reconnect if disconnected
     * @default true
     */
    reconnect?: boolean | Expression<boolean>;
    /** Maximum number of reconnect attempts
     * @default 50
     */
    reconnectLimit?: number | Expression<number>;
    /** Milliseconds to sleep after every cicle
     * @default 10
     */
    sleepTime?: number | Expression<number>;
  };
}

export interface AmqpTriggerV1Credentials {
  amqp: CredentialReference;
}

interface AmqpTriggerV1NodeBase {
  type: 'n8n-nodes-base.amqpTrigger';
  version: 1;
  credentials?: AmqpTriggerV1Credentials;
  isTrigger: true;
}

export type AmqpTriggerV1ParamsNode = AmqpTriggerV1NodeBase & {
  config: NodeConfig<AmqpTriggerV1Params>;
};

export type AmqpTriggerV1Node = AmqpTriggerV1ParamsNode;