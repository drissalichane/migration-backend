/**
 * MQTT Node - Version 1
 * Push messages to MQTT
 */


export interface MqttV1Params {
/**
 * The topic to publish to
 */
    topic?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to send the data the node receives as JSON
 * @default true
 */
    sendInputData?: boolean | Expression<boolean>;
/**
 * The message to publish
 * @displayOptions.show { sendInputData: [false] }
 */
    message?: string | Expression<string> | PlaceholderValue;
  options?: {
    /** QoS subscription level
     * @default 0
     */
    qos?: 0 | 1 | 2 | Expression<number>;
    /** Normally if a publisher publishes a message to a topic, and no one is subscribed to that topic the message is simply discarded by the broker. However the publisher can tell the broker to keep the last message on that topic by setting the retain flag to true.
     * @default false
     */
    retain?: boolean | Expression<boolean>;
  };
}

export interface MqttV1Credentials {
  mqtt: CredentialReference;
}

interface MqttV1NodeBase {
  type: 'n8n-nodes-base.mqtt';
  version: 1;
  credentials?: MqttV1Credentials;
}

export type MqttV1ParamsNode = MqttV1NodeBase & {
  config: NodeConfig<MqttV1Params>;
};

export type MqttV1Node = MqttV1ParamsNode;