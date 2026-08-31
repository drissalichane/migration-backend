/**
 * RabbitMQ Node - Version 1
 * Sends messages to a RabbitMQ topic
 */


export interface RabbitmqV1Params {
/**
 * Operation
 * @default sendMessage
 */
    operation?: unknown;
/**
 * To where data should be moved
 * @displayOptions.hide { operation: ["deleteMessage"] }
 * @default queue
 */
    mode?: 'queue' | 'exchange' | Expression<string>;
/**
 * Name of the queue to publish to
 * @displayOptions.show { mode: ["queue"] }
 * @displayOptions.hide { operation: ["deleteMessage"] }
 */
    queue?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the exchange to publish to
 * @displayOptions.show { mode: ["exchange"] }
 */
    exchange?: string | Expression<string> | PlaceholderValue;
/**
 * Type of exchange
 * @displayOptions.show { mode: ["exchange"] }
 * @default fanout
 */
    exchangeType?: 'direct' | 'topic' | 'headers' | 'fanout' | Expression<string>;
/**
 * The routing key for the message
 * @displayOptions.show { mode: ["exchange"] }
 */
    routingKey?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to send the data the node receives as JSON
 * @displayOptions.show { operation: ["sendMessage"] }
 * @default true
 */
    sendInputData?: boolean | Expression<boolean>;
/**
 * The message to be sent
 * @displayOptions.show { sendInputData: [false] }
 */
    message?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @displayOptions.show { operation: ["sendMessage"] }
 * @default {}
 */
    options?: {
    /** An exchange to send messages to if this exchange can’t route them to any queues
     * @displayOptions.show { /mode: ["exchange"] }
     */
    alternateExchange?: string | Expression<string> | PlaceholderValue;
    /** Arguments to add, See &lt;a href="https://amqp-node.github.io/amqplib/channel_api.html#channel_publish" target="_blank"&gt;here&lt;/a&gt; for valid options
     * @default {}
     */
    arguments?: {
        /** Argument
     */
    argument?: Array<{
      /** Key
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Whether the queue will be deleted when the number of consumers drops to zero
     * @default false
     */
    autoDelete?: boolean | Expression<boolean>;
    /** Whether the queue will survive broker restarts
     * @default true
     */
    durable?: boolean | Expression<boolean>;
    /** Whether to scope the queue to the connection
     * @displayOptions.show { /mode: ["queue"] }
     * @default false
     */
    exclusive?: boolean | Expression<boolean>;
    /** Headers to add
     * @default {}
     */
    headers?: {
        /** Header
     */
    header?: Array<{
      /** Key
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
  };
}

export interface RabbitmqV1Credentials {
  rabbitmq: CredentialReference;
}

interface RabbitmqV1NodeBase {
  type: 'n8n-nodes-base.rabbitmq';
  version: 1;
  credentials?: RabbitmqV1Credentials;
}

export type RabbitmqV1ParamsNode = RabbitmqV1NodeBase & {
  config: NodeConfig<RabbitmqV1Params>;
};

export type RabbitmqV1Node = RabbitmqV1ParamsNode;