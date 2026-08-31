/**
 * Kafka Node - Version 1
 * Sends messages to a Kafka topic
 */


export interface KafkaV1Params {
/**
 * Name of the queue of topic to publish to
 */
    topic?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to send the data the node receives as JSON to Kafka
 * @default true
 */
    sendInputData?: boolean | Expression<boolean>;
/**
 * The message to be sent
 * @displayOptions.show { sendInputData: [false] }
 */
    message?: string | Expression<string> | PlaceholderValue;
  jsonParameters?: boolean | Expression<boolean>;
/**
 * Whether to use Confluent Schema Registry
 * @default false
 */
    useSchemaRegistry?: boolean | Expression<boolean>;
/**
 * URL of the schema registry
 * @displayOptions.show { useSchemaRegistry: [true] }
 */
    schemaRegistryUrl?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to use a message key
 * @default false
 */
    useKey?: boolean | Expression<boolean>;
/**
 * The message key
 * @displayOptions.show { useKey: [true] }
 */
    key?: string | Expression<string> | PlaceholderValue;
/**
 * Namespace and Name of Schema in Schema Registry (namespace.name)
 * @displayOptions.show { useSchemaRegistry: [true] }
 */
    eventName?: string | Expression<string> | PlaceholderValue;
/**
 * Headers
 * @displayOptions.show { jsonParameters: [false] }
 * @default {}
 */
    headersUi?: {
        /** Header
     */
    headerValues?: Array<{
      /** Key
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Header parameters as JSON (flat object)
 * @displayOptions.show { jsonParameters: [true] }
 */
    headerParametersJson?: IDataObject | string | Expression<string>;
  options?: {
    /** Whether or not producer must wait for acknowledgement from all replicas
     * @default false
     */
    acks?: boolean | Expression<boolean>;
    /** Whether to send the data in a compressed format using the GZIP codec
     * @default false
     */
    compression?: boolean | Expression<boolean>;
    /** The time to await a response in ms
     * @default 30000
     */
    timeout?: number | Expression<number>;
  };
}

export interface KafkaV1Credentials {
  kafka: CredentialReference;
}

interface KafkaV1NodeBase {
  type: 'n8n-nodes-base.kafka';
  version: 1;
  credentials?: KafkaV1Credentials;
}

export type KafkaV1ParamsNode = KafkaV1NodeBase & {
  config: NodeConfig<KafkaV1Params>;
};

export type KafkaV1Node = KafkaV1ParamsNode;