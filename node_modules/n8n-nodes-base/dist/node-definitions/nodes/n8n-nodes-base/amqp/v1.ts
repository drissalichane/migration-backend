/**
 * AMQP Sender Node - Version 1
 * Sends a raw-message via AMQP 1.0, executed once per item
 */


export interface AmqpV1Params {
/**
 * Name of the queue of topic to publish to
 */
    sink?: string | Expression<string> | PlaceholderValue;
/**
 * Header parameters as JSON (flat object). Sent as application_properties in amqp-message meta info.
 */
    headerParametersJson?: IDataObject | string | Expression<string>;
  options?: {
    /** Will be used to pass to the RHEA Backend as container_id
     */
    containerId?: string | Expression<string> | PlaceholderValue;
    /** Whether to send the data as an object
     * @default false
     */
    dataAsObject?: boolean | Expression<boolean>;
    /** Whether to automatically reconnect if disconnected
     * @default true
     */
    reconnect?: boolean | Expression<boolean>;
    /** Maximum number of reconnect attempts
     * @default 50
     */
    reconnectLimit?: number | Expression<number>;
    /** The only property to send. If empty the whole item will be sent.
     */
    sendOnlyProperty?: string | Expression<string> | PlaceholderValue;
  };
}

export interface AmqpV1Credentials {
  amqp: CredentialReference;
}

interface AmqpV1NodeBase {
  type: 'n8n-nodes-base.amqp';
  version: 1;
  credentials?: AmqpV1Credentials;
}

export type AmqpV1ParamsNode = AmqpV1NodeBase & {
  config: NodeConfig<AmqpV1Params>;
};

export type AmqpV1Node = AmqpV1ParamsNode;