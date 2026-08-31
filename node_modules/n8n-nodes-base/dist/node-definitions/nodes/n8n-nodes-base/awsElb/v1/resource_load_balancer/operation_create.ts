/**
 * AWS ELB Node - Version 1
 * Discriminator: resource=loadBalancer, operation=create
 */


interface Credentials {
  aws: CredentialReference;
  awsAssumeRole: CredentialReference;
}

/** Create a load balancer */
export type AwsElbV1LoadBalancerCreateParams = {
  resource: 'loadBalancer';
  operation: 'create';
  authentication?: 'iam' | 'assumeRole' | Expression<string>;
/**
 * The type of IP addresses used by the subnets for your load balancer
 * @default ipv4
 */
    ipAddressType?: 'ipv4' | 'dualstack' | Expression<string>;
/**
 * This name must be unique per region per account, can have a maximum of 32 characters
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Schema
 * @default internet-facing
 */
    schema?: 'internal' | 'internet-facing' | Expression<string>;
/**
 * Type
 * @default application
 */
    type?: 'application' | 'network' | Expression<string>;
/**
 * Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @default []
 */
    subnets?: string[];
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    securityGroups?: string[];
    /** Tags
     * @default {}
     */
    tagsUi?: {
        /** Tag
     */
    tagValues?: Array<{
      /** The key of the tag
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** The value of the tag
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
  };
};

export type AwsElbV1LoadBalancerCreateNode = {
  type: 'n8n-nodes-base.awsElb';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AwsElbV1LoadBalancerCreateParams>;
};