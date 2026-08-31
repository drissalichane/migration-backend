/**
 * AWS SNS Node - Version 1
 * Sends data to AWS SNS
 */


export interface AwsSnsV1Params {
  authentication?: 'iam' | 'assumeRole' | Expression<string>;
  operation?: 'create' | 'delete' | 'publish';
/**
 * Name
 * @displayOptions.show { operation: ["create"] }
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @displayOptions.show { operation: ["create"] }
 * @default {}
 */
    options?: {
    /** The display name to use for a topic with SMS subscriptions
     */
    displayName?: string | Expression<string> | PlaceholderValue;
    /** Whether the topic you want to create is a FIFO (first-in-first-out) topic
     * @default false
     */
    fifoTopic?: boolean | Expression<boolean>;
  };
/**
 * Topic
 * @displayOptions.show { operation: ["publish", "delete"] }
 * @default {"mode":"list","value":""}
 */
    topic?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Subject when the message is delivered to email endpoints
 * @displayOptions.show { operation: ["publish"] }
 */
    subject?: string | Expression<string> | PlaceholderValue;
/**
 * The message you want to send
 * @displayOptions.show { operation: ["publish"] }
 */
    message?: string | Expression<string> | PlaceholderValue;
}

export interface AwsSnsV1Credentials {
  aws: CredentialReference;
  awsAssumeRole: CredentialReference;
}

interface AwsSnsV1NodeBase {
  type: 'n8n-nodes-base.awsSns';
  version: 1;
  credentials?: AwsSnsV1Credentials;
}

export type AwsSnsV1ParamsNode = AwsSnsV1NodeBase & {
  config: NodeConfig<AwsSnsV1Params>;
};

export type AwsSnsV1Node = AwsSnsV1ParamsNode;