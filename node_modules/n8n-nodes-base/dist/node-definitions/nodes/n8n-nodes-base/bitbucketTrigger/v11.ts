/**
 * Bitbucket Trigger Node - Version 1.1
 * Handle Bitbucket events via webhooks
 */


export interface BitbucketTriggerV11Params {
/**
 * Authentication
 * @default accessToken
 */
    authentication?: 'password' | 'accessToken' | Expression<string>;
  resource?: 'repository' | 'workspace';
/**
 * The repository of which to listen to the events. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.show { resource: ["workspace", "repository"] }
 */
    workspace?: string | Expression<string>;
/**
 * The events to listen to. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.show { resource: ["workspace", "repository"] }
 * @default []
 */
    events?: string[];
/**
 * The repository of which to listen to the events. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.show { resource: ["repository"] }
 */
    repository?: string | Expression<string>;
}

export interface BitbucketTriggerV11Credentials {
  bitbucketApi: CredentialReference;
  bitbucketAccessTokenApi: CredentialReference;
}

interface BitbucketTriggerV11NodeBase {
  type: 'n8n-nodes-base.bitbucketTrigger';
  version: 1.1;
  credentials?: BitbucketTriggerV11Credentials;
  isTrigger: true;
}

export type BitbucketTriggerV11ParamsNode = BitbucketTriggerV11NodeBase & {
  config: NodeConfig<BitbucketTriggerV11Params>;
};

export type BitbucketTriggerV11Node = BitbucketTriggerV11ParamsNode;